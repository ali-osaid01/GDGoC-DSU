import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { BASE_URL } from '../util/constant';

export default function Speakers() {
  const [speakersData, setSpeakersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_URL}/event?topEvent=true`)
      .then(response => {
        const responseData = response.data.data;

        if (Array.isArray(responseData)) {
          setSpeakersData(responseData);
        } else if (typeof responseData === 'object') {
          // Convert the object to an array
          const speakersArray = Object.values(responseData);
          setSpeakersData(speakersArray);
        } else {
          console.error('Unexpected response format:', responseData);
        }

        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching speakers:', error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="flex flex-col gap-5 min-h-screen bg-white">
      <h1 className="text-3xl font-bold text-center my-8" data-aos="fade-up">
        <b>Speakers</b>
      </h1>
      
      {/* Speakers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-8 mx-auto max-w-screen-xl">
        {loading ? (
          <p className="text-center col-span-full">Loading...</p>
        ) : (
          speakersData.length > 0 ? (
            speakersData.map(speaker => (
              speaker.speaker !== "NA" && (
                <div key={speaker.id} className="flex pb-3">
                  <div className="flex flex-col w-full items-center text-center bg-white shadow-xl rounded-xl overflow-hidden">
                    <Image className="w-40 items-center rounded-full" src={speaker.speakerImage} width={100} height={100} alt="Profile" />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold mb-2 text-gray-900">{speaker.speaker}</h2>
                      <p className="text-sm text-gray-600 mb-4">{speaker.speakerBio}</p>
                      <p className="text-sm text-gray-800 mb-2"><span className="font-semibold">Speaker at:</span> {speaker.name}</p>
                      <a href={speaker.speakerLinkedln} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-gray-300 rounded-full px-3 py-1 text-md text-black hover:bg-gray-100 hover:border-gray-400 transition duration-300 ease-in-out no-underline">
                      <Image src='/LinkedINfilled.svg' alt='LinkedIn' width={20} height={20} className="mr-2" />
                      <span>LinkedIn Profile</span>
                    </a>
                    </div>
                  </div>
                </div>
              )
            ))
          ) : (
            <p className="text-center col-span-full">No speakers data available.</p>
          )
        )}
      </div>
    </main>
  );
}
