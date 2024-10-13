
'use client';
import React, { useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import AvatarCircles from "./ui/avatar-circles";
import Image from "next/image";
import { Button, FooterDivider, Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsYoutube, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import AOS from 'aos';
import { MdEvent } from "react-icons/md";
import 'aos/dist/aos.css';
import '../styles/ourstory.css';
import { avatarUrls } from "../util/constant";

export default function OurStory() {


    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>

            <div data-aos="fade-up" >
                <Image width={1500} height={100} className="img-fluid" src="/OurStory.svg" alt=""></Image>
            </div>

            <div className="m-0" data-aos="fade-up" style={{marginTop:-30}}>
                <div className="journey-section d-flex flex-column align-items-center" >
                    <h1><b>The <span className="text-danger">Journey Begins</span></b></h1>
                </div>
                <br />
                <div className="row" style={{marginTop:-30}}>
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <div className="card" style={{ borderColor: 'transparent' }}>
                            <div className="card-body">
                                <p className="text-secondary">
                                    This was the best moment of my life. I received an email selecting me as the Google DSC Lead for my university. It felt like a dream come true, especially since I was the first applicant. With all the excitement, I also understood the significant responsibilities that came with the role.
                                </p>
                                <p className="text-secondary">
                                    GDG addressed the need for structured learning paths for specific technologies. For example, we held an online Flutter bootcamp with guidance from experienced alumni, providing a clear roadmap for those interested in front-end development. We reached out to all engineering departments at our university, emphasizing the value of software development, and are proud to see most of them now actively involved in learning software.
                                </p>
                                <p className="text-secondary">
                                    The first time Google DSC arrived on campus, everything was going well until the COVID-19 outbreak impacted us all. Educational institutions closed, forcing us to shelve plans for tech events, talks, and bootcamps. However, GDG embraced the challenge and successfully moved all activities online using Google Meet.
                                </p>
                            </div>
                        </div>
                        <br />
                        <FooterDivider />
                    </div>
                    <div className="col-md-6" style={{marginTop:-120}}>
                        <CardContainer className="inter-var">
                            <CardBody>
                                <CardItem translateZ="100" className="w-96">
                                    <Image
                                        src="/journeybegins.svg"
                                        height="0"
                                        width="0"
                                        className="img-fluid imgResponsive"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>
            </div>
            <div className="m-5" data-aos="fade-up">
                <div className="d-flex flex-column align-items-center">
                    <h1><b>The <span className="text-success">Best Team</span></b></h1>
                </div>
                <br />
                <div className="row" style={{marginTop:10}}>
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <div className="card" style={{ borderColor: 'transparent' }}>
                            <div className="card-body">
                                <p className="text-secondary">
                                    The formation of a team is always the problem, the right talent and team can do wonders for your character. Our Recruitment process was strictly based on merit and the right talent where the talent quota was made to recruit five males and five females to be in the team. The same ratio of gender diversity can make your team more successful as compared to teams with less gender diversity.
                                </p>
                                <p className="text-secondary">
                                    In computer science industry, there is very less amount of women working and the problem is that they are not encouraged and motivated to work in the tech, we broke that stereotype, made it compulsory for every core team member to attend which resulted in female students discover Flutter and felt in love with the technology, now their vision is more clear and they aim to become Flutter Developers after graduation.
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="flex flex-row mb-10 w-full">
                            <AvatarCircles numPeople={10} avatarUrls={avatarUrls} /> {/* Added inline style for right margin */}
                            <Button color="blue" className="custom-hover" href="/team" pill style={{ marginLeft: '5px' }}>
                                View Team
                            </Button>
                        </div>
                        <FooterDivider />
                    </div>
                    <div className="col-md-6">
                        <CardContainer className="inter-var">
                            <CardBody>
                                <CardItem translateZ="100" className="w-100">
                                    <Image
                                        src="/theTeam.svg"
                                        layout="responsive"
                                        height="0"
                                        width="0"
                                        className="img-fluid imgpadding"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>
            </div>

            <br />
            <div className="m-5 mt-5" data-aos="fade-up" >
                <div className="row" >
                    <div className="col-md-3" >

                    </div>
                    <div className="col-md-6" >
                        <div className="d-flex flex-column text-center align-items-center" style={{marginTop:40}} >
                            <Image src="/Quote.svg" alt="" className="quoteimage-story" width={800} height={400} />
                        </div>
                    </div>
                    <div className="col-md-3" >

                    </div>
                </div>
            </div>
            <br />
            <div className="m-5" data-aos="fade-up" >
                <br />
                <div className="row" >
                    <div className="col-md-2" >
                        <Image src="flutter.svg" alt="" className="img-fluid" width={250} height={100} />
                    </div>
                    <div className="col-md-4" >
                        <div className="card" style={{ borderColor: 'transparent' }} >
                            <div className="card-heading" >
                                <h1><b>Flutter Bootcamp</b></h1>
                            </div>
                            <div className="card-body" style={{marginLeft:-20}}>
                                <p className="text-secondary" >
                                    Flutter bootcamp was the first online bootcamp in DSC Pakistan which used to be held on weekend days like Friday, Saturday and Sunday at 9:00PM, which became an ideal time for students where we had attendance of more than 90+ students in a single class. After bootcamp, Gave paid internships to top three performers.
                                </p>

                                <p className="text-secondary">
                                    A student from India, reached out since Urdu and Hindi are similar. The journey became easier to learn Flutter in Urdu. Later we built a team to continue the legacy (here is Palivi joining the team virtually from india)
                                </p>
                            </div>
                        </div>
                        <br />
                        <FooterDivider />
                    </div>
                    <div className="col-md-6" >
                        <CardContainer className="inter-var">
                            <CardBody>
                                <a href="https://www.youtube.com/playlist?list=PLLyazdzLgFw43XOqsTk5GGrXuPOvd3Bzm" className="no-underline">
                                    <CardItem translateZ="100" className="w-full">
                                        <Image
                                            src="/flutterbootCamps.svg"
                                            height="1000"
                                            width="1000"
                                            className="imgpadding"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                </a>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>
            </div>
            <div className="m-5" data-aos="fade-up" >
                <br />
                <div className="row" >
                    <div className="col-md-2" >
                        <Image src="python.svg" alt="" className="img-fluid" width={250} height={100} />
                    </div>
                    <div className="col-md-4" >
                        <div className="card" style={{ borderColor: 'transparent' }} >
                            <div className="card-heading" >
                                <h1><b>Python Bootcamp</b></h1>
                            </div>
                            <div className="card-body" style={{marginLeft:-20}}>
                                <p className="text-secondary">
                                    But teaching Data Science, which is new in Pakistan with very few opportunities, was still a long procedure, because it has requirements to be fulfilled and a bigger roadmap than any other technology. We understood the problem and made a decision to make a bootcamp completely focused on learning Python and planned later to start Data Science Bootcamp.
                                </p>
                                <p className="text-secondary" >
                                    A series on interactive study jam on Python, where the core focus was to teach Development and Automation conducted by top-notch freelancers from DHA Suffa University in which concepts related to real-world programming were focused by core team members Tarun Kumar and Bahawal Baloch.
                                </p>
                                <p className="text-secondary">
                                    Python Bootcamp was a huge success with more than 100 participants, who joined class on weekends, not only from DHA Suffa University but all the universities in Karachi collaborated.
                                </p>
                            </div>
                        </div>
                        <br />
                        <FooterDivider />
                    </div>
                    <div className="col-md-6" >
                        <CardContainer className="inter-var">
                            <a href="https://www.youtube.com/playlist?list=PLLyazdzLgFw4SsqxcJzmoKZ94juVjEJZG" className="no-underline">
                                <CardBody >
                                    <CardItem translateZ="100" className="w-full">
                                        <Image
                                            src="/python1.svg"
                                            height="1000"
                                            width="1000"
                                            className="imgpadding"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                    <br />
                                    <CardItem translateZ="100" className="w-full">
                                        <Image
                                            src="/python2.svg"
                                            height="1000"
                                            width="1000"
                                            className="imgpadding"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                </CardBody>
                            </a>
                        </CardContainer>
                    </div>
                </div>
            </div>
            <br />
            <div className="m-5" data-aos="fade-up" >
                <br />
                <div className="row" >
                    <div className="col-md-2" >
                        <Image src="datacamplogo.svg" alt="" className="img-fluid" width={250} height={100} />
                    </div>
                    <div className="col-md-4" >
                        <div className="card" style={{ borderColor: 'transparent' }} >
                            <div className="card-heading" >
                                <h1><b>Sponsored By Datacamp</b></h1>
                            </div>
                            <div className="card-body" style={{marginLeft:-20}}>
                                <p className="text-secondary" >
                                    We also got sponsored by Silicon valley based Edtech startup DataCamp with 500 accounts. one account cost 60K PKR making us the only chapter to get this sponsorship.
                                </p>
                                <p className="text-secondary" >
                                    Find Pakistan :) <a href="https://www.datacamp.com/donates" >Datacamp</a>
                                </p>

                            </div>
                        </div>
                        <br />
                        <FooterDivider />
                    </div>
                    <div className="col-md-6" >
                        <CardContainer className="inter-var">
                            <CardBody >
                                <a href="https://www.datacamp.com/blog/how-datacamp-donates-connected-pakistani-students-during-covid" className="no-underline">
                                    <CardItem translateZ="100" className="w-full">
                                        <Image
                                            src="/datacamp1.svg"
                                            height="1000"
                                            width="1000"
                                            className="imgpadding"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                </a>
                            </CardBody>
                        </CardContainer>

                    </div>
                </div>
            </div>
            <div className="m-5" data-aos="fade-up" >
                <br />
                <div className="row" >
                    <div className="col-md-2" >
                        <Image src="cyber.svg" alt="" className="img-fluid" width={250} height={100}/>
                    </div>
                    <div className="col-md-4" >
                        <div className="card" style={{ borderColor: 'transparent' }} >
                            <div className="card-heading" >
                                <h1><b>Cyber Security Bootcamp</b></h1>
                            </div>
                            <div className="card-body"style={{marginLeft:-20}}>
                                <p className="text-secondary">
                                    In a world full of cyber security threats, we need defenders who can help us save the world for good, so our last bootcamp was focused on cyber security teaching people fundamentals and to ace their technical interviews.</p>
                            </div>
                        </div>
                        <br />
                        <FooterDivider />
                    </div>
                    <div className="col-md-6" >
                        <CardContainer className="inter-var">
                            <CardBody >
                                <a href="https://www.youtube.com/playlist?list=PLLyazdzLgFw4destGu7IsY_7LiKfKO6pc" className="no-underline">
                                    <CardItem translateZ="100" className="w-full">
                                        <Image
                                            src="/cyber1.svg"
                                            height="1000"
                                            width="1000"
                                            className="imgpadding"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                </a>
                            </CardBody>
                        </CardContainer>

                    </div>
                </div>
            </div>
            <div className="m-5" data-aos="fade-up" >
                <br />
                <div className="row" >
                    <div className="col-md-2" >
                        <Image src="git.svg" alt="" className="img-fluid" width={250} height={100}/>
                    </div>
                    <div className="col-md-4" >
                        <div className="card" style={{ borderColor: 'transparent' }} >
                            <div className="card-heading" >
                                <h1><b>GIT Crash Course</b></h1>
                            </div>
                            <div className="card-body" style={{marginLeft:-20}}>
                                <p className="text-secondary">
                                    Breaking Records and Creating History was the main vision in which we also identified a major issue where students were not implementing the concepts of version control system, in which an ultimate guide series was made in native urdu language to educate students. (we taught github basically :D)                            </p>
                            </div>
                        </div>
                        <br />
                        <FooterDivider />
                    </div>
                    <div className="col-md-6" >
                        <CardContainer className="inter-var">
                            <CardBody >
                                <a href="https://www.youtube.com/playlist?list=PLLyazdzLgFw7YKIV7tPhwruafPl388OoN" className="no-underline">
                                    <CardItem translateZ="100" className="w-full">
                                        <Image
                                            src="/git1.svg"
                                            height="1000"
                                            width="1000"
                                            className="imgpadding"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                </a>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>
            </div>
            <div className="m-0 text-center" data-aos="fade-up" >
                <br />
                <div className="row" >
                    <div className="col-md-2" >
                    </div>
                    <div className="col-md-10" >
                        <div className="card" style={{ borderColor: 'transparent',marginTop:-120 }} >
                            <div className="card-heading" >
                                <div className="row" >
                                    <div className="col-md-8" >
                                        <h3><b>More events & webinars that we conducted</b></h3>
                                    </div>
                                    <div className="col-md-2">
                                        <Button className="custom-hover" href="/events" color="blue" pill>
                                            <MdEvent className="m-1" />
                                            View All
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="events-section card-body d-flex flex-column align-items-center text-center">
                                <div className="row" >
                                    <div className="col-md-2 my-3" >
                                        <Image className="img-fluid" src="/event1.svg" width={200} height={200} alt="" />
                                    </div>
                                    <div className="col-md-2 my-3" >
                                        <Image className="img-fluid" src="/event2.svg" width={200} height={200} alt="" />
                                    </div>
                                    <div className="col-md-2 my-3" >
                                        <Image className="img-fluid" src="/event3.svg" width={200} height={200} alt="" />
                                    </div>
                                    <div className="col-md-2 my-3" >
                                        <Image className="img-fluid" src="/event4.svg" width={200} height={200} alt="" />
                                    </div>
                                    <div className="col-md-2 my-3" >
                                        <Image className="img-fluid" src="/event5.svg" width={200} height={200} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center" style={{ marginLeft: '10%' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                    <div className="px-4 justify-center">
                        <div className="end-section">
                            <div className="title">
                            <h1><b>The <span>End</span></b></h1>
                                </div>
                                <p className="text-secondary w-full">
                                    This was the best moment of my life. I received an email selecting me as the Google DSC Lead for my university. It felt like a dream come true, especially since I was the first applicant. With all the excitement, I also understood the significant responsibilities that came with the role.
                                </p>
                        </div>
                    </div>

                    <div className="px-4">
                        <Image src="/TheEnd.svg" className="img-fluid end-image" alt="End-Image" width={600} height={200} />
                    </div>
                </div>
            </div>


            
            {/* Story Landing Page Ends */}
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
}