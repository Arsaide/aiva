'use server';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { VacanciesMessage } from '@/components/layout/email-messages/vacancies-message/VacanciesMessage';

const resend = new Resend('re_X84kSdkN_M16GTUSNyWVou9Hr4ZZcGEad');

export async function POST(request: Request): Promise<Response> {
    const { name, number, message } = await request.json();

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'arsaidekm@gmail.com',
            subject: 'ВАКАНСИЯ - ФОРМА КЛИЕНТ',
            text: 'message',
            react: VacanciesMessage({
                name: name,
                number: number,
                message: message,
            }),
        });

        return NextResponse.json({ success: 'ok' });
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}
