'use client'
import { useState, useEffect } from 'react';
import '../globals.css';
import 'flowbite/dist/flowbite.css';
import Navbar from '../../components/Navbar';
import Events from '../../components/events';

export default function EventPage() {
    const [activeTab, setActiveTab] = useState('Events');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const pathname = window.location.pathname;
        const tab = pathname.substring(1).charAt(0).toUpperCase() + pathname.substring(2);
        setActiveTab(tab === '' ? 'Events' : tab);
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <Navbar activeTab={activeTab} />
            {isLoading ? (
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="spinner-grow text-primary me-2" style={{ width: '1.5rem', height: '1.5rem' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success me-2" style={{ width: '1.5rem', height: '1.5rem' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger me-2" style={{ width: '1.5rem', height: '1.5rem' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-warning" style={{ width: '1.5rem', height: '1.5rem' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <Events />
            )}
        </>
    );
}
