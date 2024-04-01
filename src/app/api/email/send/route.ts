'use server';
import { Resend } from 'resend';
import { OrderMessage } from '@/components/layout/email-messages/order-message/OrderMessage';
import { NextResponse } from 'next/server';

const resend = new Resend('re_X84kSdkN_M16GTUSNyWVou9Hr4ZZcGEad');

export async function POST(request: Request): Promise<Response> {
    const { name, email, number, message } = await request.json();

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'ЗАКАЗ - ФОРМА КЛИЕНТА',
            text: message,
            react: OrderMessage({
                name: name,
                number: number,
                email: email,
                text: message,
            }),
        });

        return NextResponse.json({ success: 'ok' });
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}
