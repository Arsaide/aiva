import React from 'react';
import MainSection from '@/components/pages/home-page/main-section/MainSection';
import Info from '@/components/pages/home-page/info-section/InfoSection';
import CarParkSection from '@/components/pages/home-page/car-park-section/CarParkSection';
import GpsBannerSection from '@/components/pages/home-page/banners/gps-banner-section/GpsBannerSection';
import BelayBannerSection from '@/components/pages/home-page/banners/belay-banner-section/BelayBannerSection';
import GallerySection from '@/components/pages/home-page/gallery-section/GallerySection';
import ServicesSection from '@/components/pages/home-page/services-section/ServicesSection';
import ClientSection from '@/components/pages/home-page/clients-section/ClientsSection';
import FormSection from '@/components/pages/home-page/form-section/FormSection';

const HomePage = () => {
    return (
        <>
            <MainSection />
            <Info />
            <CarParkSection />
            <GpsBannerSection
                title={
                    'Все наши машины оснащены системой контроля GPS-навигацией с поддержкой ГЛОНАСС'
                }
                text={
                    'Мы всегда сможем отследить местонахождение Вашего груза и связаться с водителем'
                }
            />
            <GallerySection />
            <BelayBannerSection
                title={'Ваш груз застрахован на 10 млн. рублей'}
                text={
                    'Мы предлагаем: полный комплекс услуг по страхованию груза; полис экспедированной ответственности.'
                }
            />
            <ServicesSection />
            <ClientSection />
            <FormSection />
        </>
    );
};

export default HomePage;
