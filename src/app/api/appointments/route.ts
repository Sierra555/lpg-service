'use-server';

import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import nodemailer from "nodemailer";
import { UserSchema } from "@/app/schemas/User";

export async function POST(request: Request) {
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