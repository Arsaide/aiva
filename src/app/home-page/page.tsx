import React from 'react';
import Main from '@/components/pages/home-page/main/Main';
import Info from '@/components/pages/home-page/info/Info';
import CarPark from '@/components/pages/home-page/car-park/CarPark';
import BannerSection from '@/components/pages/home-page/banner-section/BannerSection';

const HomePage = () => {
    return (
        <>
            <Main />
            <Info />
            <CarPark />
            <BannerSection
                bg={'./backgrounds/gps-bg.jpg'}
                title={
                    'Все наши машины оснащены системой контроля GPS-навигацией с поддержкой ГЛОНАСС'
                }
                text={
                    'Мы всегда сможем отследить местонахождение Вашего груза и связаться с водителем'
                }
                mr={200}
                left={true}
            />
            <BannerSection
                bg={'./backgrounds/belay-bg.jpg'}
                title={'Ваш груз застрахован на 10 млн. рублей'}
                text={
                    'Мы предлагаем: полный комплекс услуг по страхованию груза; полис экспедированной ответственности.'
                }
                ml={200}
                right={true}
            />
        </>
    );
};

export default HomePage;
