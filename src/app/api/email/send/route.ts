'use server';
import { Resend } from 'resend';
import { validateString } from '@/app/api/email/send/utils/validate';
import { EmailMessage } from '@/components/email-message/EmailMessage';
import { NextResponse } from 'next/server';
import { name } from 'eslint-plugin-prettier';
import { number } from 'prop-types';

const resend = new Resend('re_X84kSdkN_M16GTUSNyWVou9Hr4ZZcGEad');

export async function POST(request: Request): Promise<Response> {
    const { name, email, number, message } = await request.json();

    // const senderEmail = formData.get('email');
    // const message = formData.get('message');
    // const number = formData.get('number');
    // const name = formData.get('name');

    // if (!validateString(message, 5000)) {
    //     return {
    //         error: 'Invalid message',
    //     };
    // }
    //
    // if (!validateString(email, 500)) {
    //     return {
    //         error: 'Invalid sender email-message',
    //     };
    // }

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Форма с сайт',
            reply_to: email,
            text: message,
            react: EmailMessage({
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
