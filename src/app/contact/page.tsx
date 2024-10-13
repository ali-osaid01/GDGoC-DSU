"use client";
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import 'flowbite/dist/flowbite.css';
import './form.css'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { BASE_URL } from '../../util/constant';

export default function Contact() {
    const [activeTab, setActiveTab] = useState('Contact');
    const [isLoading, setIsLoading] = useState(true);
    const [showAlert, setShowAlert] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        const pathname = window.location.pathname;
        const tab = pathname.substring(1).charAt(0).toUpperCase() + pathname.substring(2);
        setActiveTab(tab === '' ? 'Team' : tab);
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setShowAlert(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                });
                setTimeout(() => {
                    setShowAlert(false);
                }, 5000); 
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

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
                <div className="container mx-auto px-4 mt-8">
                    {showAlert && (
                        <div className="alert alert-success" role="alert">
                            Your message has been sent successfully!
                        </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0" >
                        <div className="col-span-1 flex flex-col justify-center items-center p-8">
                            <div className="mb-8 text-center">
                                <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
                                <p className="text-gray-700 mb-6">How we can help you?</p>
                                <div className="flex items-center mb-6">
                                    <HiOutlineMail className="text-primary inline-block mr-4 h-8 w-8" />
                                    <span className="text-gray-700 text-xl">GDGDSU@gmail.com</span>
                                </div>
                                <div className="flex items-center mb-6">
                                    <HiOutlineLocationMarker className="text-primary inline-block mr-4 h-8 w-8" />
                                    <span className="text-gray-700 text-xl">Ph VII ext, DHA Karachi</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-div col-span-2">
                            <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
                            <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" id="firstName" name="firstName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" value={formData.firstName} onChange={handleChange} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" value={formData.lastName} onChange={handleChange} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                                    <textarea id="message" name="message" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" value={formData.message} onChange={handleChange}></textarea>
                                </div>
                                <div className="flex justify-end mb-4">
                                    <button type="submit" className="inline-block px-4 py-2 text-white bg-primary rounded-full hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50">
                                        Send
                                    </button>
                                    <span className="text-gray-500 self-center mx-4">OR</span>
                                    <button type="button" onClick={() => window.location.href = 'https://qj6nngakaoz.typeform.com/to/WY2PSuRz'} className="inline-block px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50">
                                        Become a Sponsor
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
