import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { service, name, tel, message } = body;
    
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
        return NextResponse.json(user);
    } catch {
       return NextResponse.json("Failed to send message.", { status: 500 });
    }
}