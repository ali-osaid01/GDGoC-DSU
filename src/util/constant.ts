import dynamic from 'next/dynamic';

export const BASE_URL = "https://gdgoc-dsu.vercel.app/api";

export const components = {
  Founder: dynamic(() => import('../components/founder'), { ssr: false }),
  Leads: dynamic(() => import('../components/leads'), { ssr: false }),
  Operations: dynamic(() => import('../components/operations'), { ssr: false }),
  Executives: dynamic(() => import('../components/executives'), { ssr: false }),
  Marketing: dynamic(() => import('../components/marketing'), { ssr: false }),
  Development: dynamic(() => import('../components/development'), { ssr: false }),
};

export const tabsData = [
  { id: 1, title: 'Founder', color: 'border-blue-400 bg-blue-500' },
  { id: 2, title: 'Leads', color: 'border-red-500 bg-red-500' },
  { id: 3, title: 'Operations', color: 'border-green-500 bg-green-500' },
  { id: 4, title: 'Development', color: 'border-blue-400 bg-blue-500' },
  { id: 5, title: 'Marketing', color: 'border-green-500 bg-green-500' },
  { id: 6, title: 'Executives', color: 'border-blue-400 bg-blue-500' },
];

export const TabData = [
  { id: 1, title: 'Events', color: 'border-blue-400 bg-blue-500' },
  { id: 2, title: 'Speakers', color: 'border-blue-400 bg-blue-500' },
];

export const highlights = [
  { picture: '/Slider Images/Slider1.svg' },
  { picture: '/Slider Images/Slider2.svg' },
  { picture: '/Slider Images/Slider3.svg' },
  { picture: '/Slider Images/Slider4.svg' },
  { picture: '/Slider Images/Slider5.svg' },
];

export const avatarUrls = [
  "/Ateeq.svg",
  "/Abeer.svg",
  "/Tarun.svg",
  "/Alishan.svg",
  "/Nimra.svg",
];
