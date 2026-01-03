import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, mobile, email, quantity, price } = await request.json();

        // Basic validation
        if (!name || !mobile || !email || !quantity || !price) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        console.log('Received order:', { name, mobile, email, quantity, price });

        // Email Configuration
        // In a real application, these should be environment variables.
        const user = process.env.GMAIL_USER;
        const pass = process.env.GMAIL_PASS;
        const receiver = process.env.RECEIVER_EMAIL || 'info.thefamilyadventure@gmail.com';

        if (user && pass) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user,
                    pass,
                },
            });

            const mailOptions = {
                from: user,
                to: receiver, // Site owner email
                replyTo: email,
                subject: `New Order Received from ${name}`,
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
                        <h2 style="color: #4b4845;">New Order Alert! 🚨</h2>
                        <p>You have received a new order from the website.</p>
                        
                        <div style="background-color: #faf9f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="margin-top: 0; color: #8d6e63;">Customer Details</h3>
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Mobile:</strong> <a href="tel:${mobile}">${mobile}</a></p>
                            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        </div>
                        
                        <div style="background-color: #fff3e0; padding: 15px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="margin-top: 0; color: #e67e22;">Order Details</h3>
                            <p><strong>Item:</strong> Dryfruit Laddoo</p>
                            <p><strong>Quantity:</strong> ${quantity}</p>
                            <p><strong>Total Price:</strong> ₹${price}</p>
                        </div>
                        
                        <p style="color: #888; font-size: 12px; margin-top: 30px;">
                            This is an automated message from The Family Adventure website.
                        </p>
                    </div>
                `,
            };

            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
        } else {
            console.log('Skipping email send: GMAIL_USER or GMAIL_PASS not set.');
            // For testing/demo purposes, we'll confirm success even without email config
            // so the frontend UI flow can be verified.
        }

        return NextResponse.json({ message: 'Order received successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error processing order:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
