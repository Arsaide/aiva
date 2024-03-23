import React from 'react';
import Main from '@/components/pages/home-page/main/Main';
import Info from '@/components/pages/home-page/info/Info';
import CarPark from '@/components/pages/home-page/car-park/CarPark';
import GpsPage from '@/components/pages/home-page/gps-page/GpsPage';

const HomePage = () => {
    return (
        <>
            <Main />
            <Info />
            <CarPark />
            <GpsPage />
        </>
    );
};

export default HomePage;
