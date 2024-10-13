import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsYoutube, BsLinkedin } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import { TabData, highlights } from '../util/constant';

const AllEventsComponent = dynamic(() => import('../components/allevents'), { ssr: false });
const SpeakersComponent = dynamic(() => import('../components/speakers'), { ssr: false });

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Events');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const activeTabData = TabData.find(tab => tab.title === activeTab);
  const activeTabBorderColor = activeTabData ? activeTabData.color.split(' ')[0] : 'border-gray-100';
  const activeTabBgColor = activeTabData ? activeTabData.color.split(' ')[1] : 'bg-gray-100';

  return (
    <>
      <div className="flex justify-center items-center">
        <Image src="/events-header.svg" alt="" width={2000} height={200} />
      </div>
      <div className="flex justify-center mt-4">
        <ul className={`flex items-center justify-center w-full max-w-2xl text-center text-gray-500 bg-white rounded-full p-2 border-4 ${activeTabBorderColor}`} style={{ marginBottom: 0 }}>
          {TabData.map((tab) => (
            <li key={tab.id} className="flex-1" style={{ marginBottom: 0 }}>
              <p
                onClick={() => handleTabClick(tab.title)}
                className={`flex justify-center items-center py-2 px-1 sm:py-3 sm:px-2 text-xs sm:text-sm md:text-lg cursor-pointer ${
                  activeTab === tab.title ? `${activeTabBgColor} text-white rounded-full shadow` : 'rounded-full'
                }`}
                style={{ marginBottom: 0 }}
              >
                {tab.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <section className="section_container mt-5">
        <div data-aos="fade-up" className="full-page-content">
          <div className="d-flex flex-column align-items-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-5">
              <b>Our Top Events</b>
            </h1>
          </div>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            {highlights.length > 0 ? (
              <Carousel>
                {highlights.map((highlight, index) => (
                  <Carousel.Item key={index}>
                    <Image
                      className="d-block w-100"
                      src={highlight.picture}
                      alt={`Highlight ${index + 1}`}
                      width={50}
                      height={50}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <p>No highlights available.</p>
            )}
          </div>
        </div>
        
        {activeTab === 'Events' ? <AllEventsComponent /> : <SpeakersComponent />}
      </section>

      <div>
      <div className="shadow-sm p-3 rounded-lg">
    <div className="flex flex-col items-center text-center">
        <Image src="LOGO.svg" alt="Logo" className="img-fluid mb-3" width={350} height={100} />
        <div className="text-secondary mb-3"><b>Connect With Us</b></div>
        <div className="flex justify-center flex-wrap">
            <div className="p-2"><Footer.Icon href="https://www.facebook.com/GoogleDeveloperStudentClubDHASuffaUniversity/" icon={BsFacebook} /></div>
            <div className="p-2"><Footer.Icon href="https://github.com/GDSCDSU/" icon={BsGithub} /></div>
            <div className="p-2"><Footer.Icon href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=gdscdsu@gmail.com" icon={IoMdMail} /></div>
            <div className="p-2"><Footer.Icon href="https://www.instagram.com/googledev.dsu/" icon={BsInstagram} /></div>
            <div className="p-2"><Footer.Icon href="https://www.linkedin.com/company/developer-student-club-dsu-powered-by-google-developers/" icon={BsLinkedin} /></div>
            <div className="p-2"><Footer.Icon href="https://www.youtube.com/@GoogleDSCatDHASuffaUniversity" icon={BsYoutube} /></div>
        </div>
        <Footer.Divider />         
    </div>
    <div className="flex flex-col w-full justify-center text-center">
                        <div className="text-gray-500 mb-1">
                            ©2024 GDG@DSU
                        </div>
                        <div className="text-gray-500">
                            <a href="https://www.dsu.edu.pk/" className="text-gray-500 no-underline">DHA Suffa University</a>
                        </div>
                    </div>
                </div>
      </div>
    </>
  );
};

export default Events;
