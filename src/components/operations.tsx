import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import  '../styles/teams.css'; // Adjust path as needed
import { BASE_URL } from '../util/constant';

export default function Operations() {
  const [operators, setOperators] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/teams?team=operation`)
      .then(response => {
        const responseData = response.data.data;

        if (Array.isArray(responseData)) {
          setOperators(responseData);
        } else if (typeof responseData === 'object') {
          // Convert the object to an array
          const operatorsArray = Object.values(responseData);
          setOperators(operatorsArray);
        } else {
          console.error('Unexpected response format:', responseData);
        }
      })
      .catch(error => console.error('Error fetching operation team:', error));
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Quote Image */}
      <div data-aos="fade-up" className="w-full flex justify-center py-8">
        <Image src='/operationsquote.svg' alt='' width={800} height={200} className='quote-image' />
      </div>

      {/* Ensure operators is not empty before rendering */}
      {operators.length > 0 && (
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 mx-auto max-w-screen-xl">
          {operators.map((item, index) => (
            <div key={index} className="pb-1 w-70 h-30 flex flex-col rounded-xl justify-between overflow-hidden bg-white shadow-xl">
              <div className="relative">
                <div className="flex items-center justify-center w-full h-5 ">
                  <Image src='/dotimgreen.svg' alt='Dot Image' width={600} height={200} />
                </div>
                <div className="flex justify-center top-30">
                  <Image src={item.picture} className="rounded-full" alt={item.fullname} width={100} height={100} />
                </div>
                <div className="flex flex-col items-center">
                  <p className="mt-5 font-bold text-xl text-center text-gray-900">
                    {item.fullname}
                  </p>
                  <p className="text-gray-700 text-sm">{item.tagline}</p>
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
      )}
    </main>
  );
}
