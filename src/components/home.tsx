import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsYoutube, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import CountUp from 'react-countup';
import { BASE_URL} from "../util/constant";

export default function Home() {

    const [highlights, setHighlights] = useState([]);
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const fetchHighlights = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/highlight`);
                const responseData = response.data.data;
                if (Array.isArray(responseData)) {
                    setHighlights(responseData);
                } else if (typeof responseData === 'object') {
                    const highlightsArray = Object.values(responseData);
                    setHighlights(highlightsArray);
                } else {
                    console.error('Unexpected response format:', responseData);
                }
            } catch (error) {
                console.error('Error fetching highlights:', error);
            }
        };

        const fetchPartners = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/partner`);
                setPartners(response.data.data);
            } catch (error) {
                console.error('Error fetching partners:', error);
            }
        };

        fetchHighlights();
        fetchPartners();
    }, []);

    const [counters, setCounters] = useState([
        { target: 5, current: 0 },
        { target: 2000, current: 0 },
        { target: 80, current: 0 }
    ]);
    const [countersVisible, setCountersVisible] = useState(false);
    const countersRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (
                countersRef.current &&
                window.innerHeight + window.scrollY >= countersRef.current.offsetTop
            ) {
                setCountersVisible(true);
                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (countersVisible) {
            setCounters(prevCounters =>
                prevCounters.map(counter => ({ ...counter, current: counter.target }))
            );
        }
    }, [countersVisible]);

    useEffect(() => {
        AOS.init();
    }, []);

    const allPartners = [...partners, ...partners];
    return (

        <>
            {/* Header Image: */}
            <div data-aos="fade-up" >
                <Image className="img-fluid" src="/Header.svg" alt="" width={2000} height={100} />
            </div>
            <br />
            
            <br />
            {/* What is GDG Portion: */}
            <div className="d-flex justify-content-center align-items-center h-70 py-9" data-aos='fade-up'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-5 d-flex justify-content-center">
                            <Image src="isGdsc.svg" alt="" height={1000} width={1000} className="img-fluid" />
                        </div>
                        <div className="col-md-6 mb-9 d-flex justify-content-center">
                            <Image
                                src="/what.svg"
                                height={600}
                                width={400}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* About Section: */}
            <div className="bg-image" data-aos="fade-up">
                <div className="d-flex justify-content-center align-items-center" style={{ height: '110%' }}  >
                    <div className="container">
                        <div className="row p-5">
                            <div className="col-md-6 mb-5">
                                <Image
                                    src="/dhaSuffa.svg"
                                    height={600}
                                    width={500}
                                    alt=""
                                />
                            </div>
                            <div className="col-md-6 mb-5">
                                <Image src="About.svg" alt="" height={600} width={500} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             {/* Partners */}
            <br />
            <div className="m-5">
                <div className="d-flex flex-column align-items-center">
                    <h2><b>Our Partners</b></h2>
                </div>
                <br />
                <div className="logo-container">
                    <div className="logo-slider">
                        {allPartners.map((partner, index) => (
                            <a className="logo-item" href={partner.link} key={index} target="_blank" rel="noopener noreferrer">
                                <Image src={partner.picture} alt={partner.name} className="img-fluid" width={300} height={100} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <br />
            <br />
            {/* What GDG Does Portion: */}
            <div className="m-5" >
                <div className="d-flex flex-column align-items-center" >
                    <h2><b>What we do</b></h2>
                    <p>Our professional and smart team work together to deliver you</p>
                </div>
                <div className="row" >
                    <div className="col-md-2 d-flex flex-column align-items-center" >
                    </div>
                    <br />
                    <div className="col-md-8" >
                        <div className="row" >
                            <div className="col-md-4 my-3" >
                                <div className="shadow-sm p-3 rounded-lg Blue-hover-effect-container">
                                    <div className="content-to-hide">
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col text-center">
                                                    <Image src='/worshopicon.svg' alt="" width={50} height={50} style={{ display: 'block', margin: '0 auto' }} />
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row justify-content-center">
                                                <div className="col text-center">
                                                    <h5 className="text-primary"><b>WorkShops</b></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="m-1" >
                                        GDG conducts workshops and training on latest topics and technologies to boost students technical skills.
                                    </p>
                                </div>
                            </div>
                            <br />
                            <div className="col-md-4 my-3" >
                                <div className="shadow-sm p-3 rounded-lg Success-hover-effect-container">
                                    <div className="content-to-hide" >
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col text-center">
                                                    <Image src='/codeicon.svg' alt="" width={50} height={50} style={{ display: 'block', margin: '0 auto' }} />
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row justify-content-center">
                                                <div className="col text-center">
                                                    <h5 className="text-success"><b>Hackathons</b></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="m-1" >
                                        GDG hosts hackathons and coding contests to enhance students teamwork, and problem-solving through real-world challenges.
                                    </p>
                                </div>
                            </div>
                            <br />
                            <div className="col-md-4 my-3" >
                                <div className="shadow-sm p-3 rounded-lg Danger-hover-effect-container align-middle">
                                    <div className="content-to-hide" >
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col text-center">
                                                    <Image src='/techtalkicon.svg' alt="" width={50} height={50} style={{ display: 'block', margin: '0 auto' }} />
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row justify-content-center">
                                                <div className="col text-center">
                                                    <h5 className="text-danger"><b>Tech Talks</b></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="m-1" >
                                        GDG regularly invites industry experts for tech talks, offering students insights into technology trends and career advice.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-md-4 my-3" >
                                <div className="shadow-sm p-3 rounded-lg Success-hover-effect-container">
                                    <div className="content-to-hide" >
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col text-center">
                                                    <Image src='/bootcampsicon.svg' alt="" width={50} height={50} style={{ display: 'block', margin: '0 auto' }} />
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row justify-content-center">
                                                <div className="col text-center">
                                                    <h5 className="text-success" ><b>BootCamps</b></h5>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <p className="m-1" >
                                        GDG offers targeted bootCamps and intensive training for rapid, hands-on skill mastery in specific technologies.
                                    </p>
                                </div>
                            </div>
                            <br />
                            <div className="col-md-4 my-3" >
                                <div className="shadow-sm p-3 rounded-lg Danger-hover-effect-container">
                                    <div className="content-to-hide" >
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col text-center">
                                                    <Image src='/studyjamsicon.svg' alt="" width={50} height={50} style={{ display: 'block', margin: '0 auto' }} />
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row justify-content-center">
                                                <div className="col text-center">
                                                    <h5 className="text-danger" ><b>Study Jams</b></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="m-1" >
                                        GDG conducts study jams for collaborative learning on specific topics, promoting peer learning, teamwork, and knowledge exchange.
                                    </p>
                                </div>
                            </div>
                            <br />
                            <div className="col-md-4 my-3" >
                                <div className="shadow-sm p-3 rounded-lg Blue-hover-effect-container">
                                    <div className="content-to-hide" >
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col text-center">
                                                    <Image src='/careericon.svg' alt="" width={50} height={50} style={{ display: 'block', margin: '0 auto' }} />
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row justify-content-center">
                                                <div className="col text-center">
                                                    <h5 className="text-primary" ><b>Career Development</b></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="m-1" >
                                        GDG offers career development sessions focusing on resume building, interview skills, and networking, boosting employability and confidence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex flex-column align-items-center" >
                    </div>
                </div>
            </div>
            {/* Community Counter: */}

            <div id="counters-section" ref={countersRef} className="counters-section">
                <div data-aos="fade-up" data-aos-once="true">
                    <div className="d-flex flex-column align-items-center text-center">
                        <h2 className="mb-3"><b>The Community is Growing Everyday</b></h2>
                    </div>
                    <br />
                    <div className="row d-flex justify-content-center text-center">
                        {counters.map((counter, index) => (
                            <div key={index} className="col-md-3 col-12" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                                <div className="d-flex flex-column align-items-center">
                                    <Image
                                        src={index === 0 ? '/Years.svg' : index === 1 ? '/Attendees.svg' : '/events.svg'}
                                        alt=""
                                        className="img-fluid mb-2"
                                        width={100}
                                        height={50}
                                    />
                                    <h1>
                                        <b>
                                            <CountUp start={0} end={counter.target} duration={10} />
                                            +
                                        </b>
                                    </h1>
                                    <p className="text-secondary">
                                        {index === 0 ? 'YEARS' : index === 1 ? 'Attendees' : 'Events'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Highlights Carousel: */}
            <div className="d-flex justify-content-center align-items-center p-5">
                <div>
                    <div className="d-flex flex-column align-items-center">
                        <h1><b>Highlights</b></h1>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                        {highlights.length > 0 ? (
                            <Carousel>
                                {highlights.map((highlight, index) => (
                                    <Carousel.Item key={index}>
                                        <Image
                                            width={1500}
                                            height={300}
                                            src={highlight.picture}
                                            alt={`Highlight ${index + 1}`}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        ) : (
                            <p>No highlights available.</p>
                        )}
                    </div>
                </div>
            </div>



            {/* Sponsor Form: */}
            <div className="d-flex justify-content-center align-items-center p-3">
                <div className="shadow-sm p-5 rounded-lg" style={{ backgroundColor: '#FEECEC' }}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="text-danger"><b>Become our Sponsor</b></h1>
                            <br />
                            <p className="text-secondary">Grow audience with GDG@DSU sponsorships</p>
                            <p className="text-secondary">Learn more</p>
                        </div>
                        <div className="col-md-3">
                            <button
                                className="btn btn-danger custom-hover"
                                style={{ borderRadius: '50px' }}
                                onClick={() => window.location.href = 'https://qj6nngakaoz.typeform.com/to/WY2PSuRz'}
                            >
                                Become Sponsor
                            </button>
                        </div>
                        <div className="col-md-3">
                            <Image src="/sponsor.svg" alt="" className="img-fluid" width={300} height={150}/>
                        </div>
                    </div>
                </div>
            </div>


            {/* Footer: */}
            
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
                    <div className="pt-0 mt-0 flex justify-center items-center">
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

            </div>
        </>
    )
}