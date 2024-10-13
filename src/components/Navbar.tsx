/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Navbar as FlowbiteNavbar } from "flowbite-react";

interface NavbarProps {
    activeTab: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab }) => {
    const router = useRouter();

    const handleTabClick = (tab: string) => {
        router.push(`/${tab.toLowerCase().replace(' ', '')}`);
    };

    return (
        <FlowbiteNavbar rounded>
            <FlowbiteNavbar.Brand as={Link} href="/home">
                <Image src='/LOGO.svg' alt='logo' width={275} height={0} />
            </FlowbiteNavbar.Brand>
            <FlowbiteNavbar.Toggle />
            <FlowbiteNavbar.Collapse className="custom-collapse">
                <ul className="nav nav-underline font-manrope font-bold custom-nav">
                    {['Home', 'Our Story', 'Events', 'Team', 'Contact'].map((tab) => (
                        <li key={tab} className="nav-item custom-nav-item">
                            <button
                                className='nav-link'
                                onClick={() => handleTabClick(tab)}
                                type="button"
                                role="tab"
                            >
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>
            </FlowbiteNavbar.Collapse>
        </FlowbiteNavbar>
    );
};

export default Navbar;
