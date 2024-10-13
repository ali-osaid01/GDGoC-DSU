import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import  '../styles/teams.css'; // Adjust path as needed
import { BASE_URL } from '../util/constant';


export default function Executives() {
  const [executives, setExecutives] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/teams?role=Executive-core-team-member`)
      .then(response => {
        const responseData = response.data.data;

        if (Array.isArray(responseData)) {
          setExecutives(responseData);
        } else if (typeof responseData === 'object') {
          // Convert the object to an array
          const executivesArray = Object.values(responseData);
          setExecutives(executivesArray);
        } else {
          console.error('Unexpected response format:', responseData);
        }
      })
      .catch(error => console.error('Error fetching executives:', error));
  }, []);

  return (
    <main className="flex flex-col gap-5 min-h-screen bg-white">
      {/* Quote Image */}
      <div data-aos="fade-up" className="w-full flex justify-center py-8">
        <Image src='/executivesquote.svg' className='quote-image' alt='' width={820} height={200} />
      </div>

      {/* Ensure executives is not empty before rendering */}
      {executives.length > 0 && (
        <>
          {/* Members Div 1 */}
          <div data-aos="fade-up" className="team-card grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-screen-xl">
            {executives.map((item, index) => (
              <div 
                key={index} 
                className="flex pb-3 w-full max-w-sm flex-col rounded-xl justify-between overflow-hidden transition-shadow bg-white shadow-lg hover:shadow-xl mx-auto md:mr-4"
              >
                <div className="relative">
                  <div className="flex items-center justify-center w-full h-7">
                    <Image src='/dotimgexecutive.svg' alt='' width={370} height={100} />
                  </div>
                  <div className="flex justify-center">
                    <Image src={item.picture} className="w-20 h-20 rounded-full" alt={item.fullname} width={100} height={100} />
                  </div>
                  <div className="flex flex-col items-center" style={{marginTop:-30}}>
                    <p className="mt-5 font-bold lg:text-lg text-md text-center text-gray-900">
                      {item.fullname}
                    </p>
                    <p className="text-gray-700 text-sm" style={{marginTop:-10}}>{item.tagline}</p>
                    <p className="text-gray-700 text-justify text-sm w-60" style={{marginTop:-5}}>{item.bio}</p>
                    <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-gray-300 rounded-full px-3 py-1 text-md text-black hover:bg-gray-100 hover:border-gray-400 transition duration-300 ease-in-out no-underline">
                      <Image src='/LinkedINfilled.svg' alt='LinkedIn' width={20} height={20} className="mr-2" />
                      <span>LinkedIn Profile</span>
                    </a>
                    <br/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
