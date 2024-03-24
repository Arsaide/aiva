import React from 'react';
import Main from '@/components/pages/home-page/main/Main';
import Info from '@/components/pages/home-page/info/Info';
import CarPark from '@/components/pages/home-page/car-park/CarPark';
import GpsBannerSection from '@/components/pages/home-page/banners/gps-banner-section/GpsBannerSection';
import BelayBannerSection from '@/components/pages/home-page/banners/belay-banner-section/BelayBannerSection';

const HomePage = () => {
    return (
        <>
            <Main />
            <Info />
            <CarPark />
            <GpsBannerSection
                title={
                    'Все наши машины оснащены системой контроля GPS-навигацией с поддержкой ГЛОНАСС'
                }
                text={
                    'Мы всегда сможем отследить местонахождение Вашего груза и связаться с водителем'
                }
            />
            <BelayBannerSection
                title={'Ваш груз застрахован на 10 млн. рублей'}
                text={
                    'Мы предлагаем: полный комплекс услуг по страхованию груза; полис экспедированной ответственности.'
                }
            />
        </>
    );
};

export default HomePage;
