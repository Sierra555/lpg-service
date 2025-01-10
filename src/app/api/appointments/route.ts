import 'server-only';

import arcjet, { detectBot, shield, tokenBucket } from "@arcjet/next";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import nodemailer from "nodemailer";
import { UserSchema } from "@/app/schemas/User";

const aj = arcjet({
    key: process.env.ARCJET_KEY!,
    characteristics: ["ip.src"],
    rules: [
        shield({ mode: "LIVE" }),
        detectBot({
          mode: "LIVE",
          allow: [
            "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
            "CATEGORY:MONITOR", // Uptime monitoring services
            "CATEGORY:PREVIEW", // Link previews e.g. Slack, Discord
          ],
        }),
        tokenBucket({
          mode: "LIVE",
          refillRate: 5,
          interval: 10,
          capacity: 10,
        }),
      ],
})

export async function POST(request: Request) {
    const decision = await aj.protect(request, { requested: 5 });
    console.log("Arcjet decision", decision);
  
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return NextResponse.json(
          { error: "Too Many Requests", reason: decision.reason },
          { status: 429 },
        );
      } else if (decision.reason.isBot()) {
        return NextResponse.json(
          { error: "No bots allowed", reason: decision.reason },
          { status: 403 },
        );
      } else {
        return NextResponse.json(
          { error: "Forbidden", reason: decision.reason },
          { status: 403 },
        );
      }
    }

    try {
        const data = await request.json();
        const parsed = UserSchema.safeParse(data);

        if (parsed.success) {
            const { tel , service, name, message } = parsed.data;

            const user = await prisma.user.create({
                data: {
                    service,
                    name,
                    tel,
                    message
                }
            });

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                secure: false,
                auth: {
                user: process.env.GMAIL_FROM,
                pass: process.env.GMAIL_APP_PASSWORD,
                }
            });

            const mailOptions = {
                from: '"Message bot from GasMaster"<daa62345@gmail.com>',
                to: 'dara6234@gmail.com',
                subject: `Повідомлення від ${name}`,
                text: `Послуга: ${service} | ${message} | Номер телефону: ${tel}`, 
                html: `<p>Послуга: ${service}</p><div>${message}</div><p>Номер телефону: ${tel}</p>`,
            };
            
            await transporter.sendMail(mailOptions);
            return NextResponse.json(user, { status: 200 });
        } else {
            return NextResponse.json({message: "Invalid data", issues: parsed.error.errors}, { status: 400 });
        }

    } catch {
       return NextResponse.json("Failed to send message.", { status: 500 });
    }
}