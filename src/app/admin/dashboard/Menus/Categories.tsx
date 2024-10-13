'use client'
import { useState } from "react";
import dynamic from 'next/dynamic';
const GDSCLead = dynamic(() => import('../Categories/gdsclead'), { ssr: false });
const ExecutiveCoreTeam = dynamic(() => import('../Categories/executivecoreteam'), { ssr: false });
const OperationsTeam = dynamic(() => import('../Categories/operationsteam'), { ssr: false });
const DevelopmentTeam = dynamic(() => import('../Categories/developmentteam'), { ssr: false });
const MarketingTeam = dynamic(() => import('../Categories/marketingteam'), { ssr: false });
const Speakers = dynamic(() => import('../Categories/speakers'), { ssr: false });
const Events = dynamic(() => import('../Categories/events'), { ssr: false });
const OurTopEvent = dynamic(() => import('../Categories/ourtopevent'), { ssr: false });
const Community = dynamic(() => import('../Categories/community'), { ssr: false });
const Partners = dynamic(() => import('../Categories/partners'), { ssr: false });
const Highlights = dynamic(() => import('../Categories/highlights'), { ssr: false });
const NewEvent = dynamic(() => import('../Categories/newevent'), { ssr: false });
const Team = dynamic(() => import('../Categories/Team'), { ssr: false });
import Image from "next/image";
import { Button, Drawer, TextInput, Label } from "flowbite-react";
export default function Categories(){
    const initialCardsData  = [
        {
            id: 1,
            name: 'Team',
            date: 'Uploaded last 15 Sep 2023',
            imageUrl: '/coreTeam.svg',
            component: <Team />
        },
        {
            id: 2,
            name: 'Speakers/Events',
            date: 'Uploaded last 15 Sep 2023',
            imageUrl: '/eventsCat.svg',
            component: <Events />
        },
        {
            id: 3,
            name: 'Partners',
            date: 'Uploaded last 15 Sep 2023',
            imageUrl: '/Partners.svg',
            component: <Partners />
        },
        {
            id: 4,
            name: 'Highlights',
            date: 'Uploaded last 15 Sep 2023',
            imageUrl: '/Highlights.svg',
            component: <Highlights />
        },
    
        
      ];
        const [searchQuery, setSearchQuery] = useState('');
        const [cardsData, setCardsData] = useState(initialCardsData);

        const handleSearchChange = (e) => {
            setSearchQuery(e.target.value);
            const filteredCards = initialCardsData.filter((card) =>
            card.name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setCardsData(filteredCards);
        };
        const [selectedComponent, setSelectedComponent] = useState(null);
        const handleCardClick = (component) => {
            setSelectedComponent(component);
          };
    return(
        <>
        <div className="p-6">
            <div className="container mx-auto">
                {selectedComponent ? (
                <div className="flex">
                <Button color="blue" size='sm' pill className="mr-4" onClick={() => setSelectedComponent(null)}>
                  Back
                </Button>
                <div className="flex ml-16">
                  <h1 style={{marginLeft:'15px'}} className="text-2xl font-bold">{selectedComponent.name}</h1>
                </div>
              </div>
                ) : (
                <h1 className="text-2xl font-bold mb-4">Categories</h1>
                )}
                {!selectedComponent && (
                <div className="mb-6">
                    <input
                    type="text"
                    placeholder="Search categories..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
                    />
                </div>
                )}
                {!selectedComponent ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cardsData.map((card) => (
                    <div
                        key={card.id}
                        className="relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 h-48"
                        onClick={() => handleCardClick(card)}
                    >
                        <div className="p-4 flex flex-col items-center justify-center h-full">
                        <Image
                            src={card.imageUrl}
                            alt={card.name}
                            className="w-12 h-12 mb-4"
                            width={50}
                            height={50}
                        />
                        <div className="text-center">
                            <h3 className="text-lg font-bold">{card.name}</h3>
                            <p className="text-gray-600">{card.date}</p>
                        </div>
                        </div>
                        <div className="absolute top-2 right-2">
                        <button className="text-gray-600 hover:text-gray-800">
                            <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                            />
                            </svg>
                        </button>
                        </div>
                    </div>
                    ))}
                </div>
                ) : (
                <div>{selectedComponent.component}</div>
                )}
            </div>
        </div>
        </>
    )
}