'use server';
import { Resend } from 'resend';
import { validateString } from '@/app/api/email/send/utils/validate';
import { EmailMessage } from '@/components/email-message/EmailMessage';
import { NextApiRequest, NextApiResponse } from 'next';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('email');
    const message = formData.get('message');
    const number = formData.get('number');
    const name = formData.get('name');

    if (!validateString(message, 5000)) {
        return {
            error: 'Invalid message',
        };
    }

    if (!validateString(senderEmail, 500)) {
        return {
            error: 'Invalid sender email-message',
        };
    }

    try {
        const reactElement: React.ReactNode = EmailMessage({
            name: name as string,
            number: number as string,
            email: senderEmail as string,
            text: message as string,
        });

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: senderEmail as string,
            subject: 'Форма с сайта',
            reply_to: senderEmail as string,
            text: message as string,
            react: reactElement,
        });

        return { success: true };
    } catch (error) {
        console.log('Error:', error);
        return { error: error };
    }
};
