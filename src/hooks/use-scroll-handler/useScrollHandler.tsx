import { useState, useEffect } from 'react';

const useScrollHandler = () => {
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const isScrolledDown = prevScrollPos < currentScrollPos;

        setPrevScrollPos(currentScrollPos);

        setVisible(!isScrolledDown || currentScrollPos === 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return { visible };
};

export default useScrollHandler;
