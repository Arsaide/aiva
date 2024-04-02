import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.scss';
import Header from '@/components/layout/common/header/Header';
import Footer from '@/components/layout/common/footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const montserrat = Montserrat({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'АИВА - Транспортная компания',
    description:
        'АИВА Грузоперевозки – ваш надежный партнер в организации перевозок ' +
        'грузов по всей России. Мы предоставляем высококачественные услуги по ' +
        'доставке грузов различного типа и объема, обеспечивая оперативность, ' +
        'безопасность и надежность на всех этапах транспортировки. Наша компания' +
        ' основана на принципах профессионализма, эффективности и индивидуального' +
        ' подхода к каждому клиенту, стремясь удовлетворить самые высокие требования.',
    keywords:
        'грузоперевозки, транспортная логистика, доставка грузов, вся Россия,' +
        ' надежность, профессионализм, оперативность, безопасность,' +
        ' индивидуальный подход, качество услуг, страховка',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
