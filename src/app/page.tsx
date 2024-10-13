'use client'
import { useEffect } from 'react';

const Home: React.FC = () => {
    useEffect(() => {
        window.location.replace('/home');
    }, []);

    return null;
}

export default Home;
