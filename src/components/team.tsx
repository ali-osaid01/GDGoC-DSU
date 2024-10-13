import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsYoutube, BsLinkedin } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import Image from 'next/image';
import '../styles/teams.css'; 
import { components, tabsData } from '../util/constant';

const Team: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Founder');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const ActiveComponent = components[activeTab];
  const activeTabData = tabsData.find(tab => tab.title === activeTab);
  const activeTabBorderColor = activeTabData ? activeTabData.color.split(' ')[0] : 'border-gray-100';
  const activeTabBgColor = activeTabData ? activeTabData.color.split(' ')[1] : 'bg-gray-100';

  return (
    <main className="min-h-screen bg-white justify-center">
      <div className="flex justify-center items-center">
        <Image src="/teams-header.svg" alt="" width={2000} height={400} />
      </div>
      <div className="flex justify-center team-navbar">
        <ul className={`flex items-center justify-center w-full sm:max-w-2xl max-w-2xl text-center text-gray-500 bg-white rounded-full p-2 border-4 ${activeTabBorderColor}`} style={{ marginBottom: 0 }}>
          {tabsData.map((tab) => (
            <li key={tab.id} className="flex-1">
              <p
                onClick={() => handleTabClick(tab.title)}
                className={`flex justify-center items-center py-2 px-1 sm:py-3 sm:px-2 text-xs sm:text-sm md:text-lg cursor-pointer tab-item ${activeTab === tab.title ? `${activeTabBgColor} text-white rounded-full shadow` : 'rounded-full'
                  }`}
                style={{ marginBottom: 0 }}
              >
                {tab.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 p-5">
        {ActiveComponent ? <ActiveComponent /> : <div>No Component Found</div>}
      </div>

      
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
    </main>
  );
};

export default Team;
