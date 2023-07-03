import React, { useEffect } from 'react';
import jobPortal from '../assets/portfolio/jobportal.png'
import resturent from '../assets/portfolio/resturent.png'
import toyMarketPlace from '../assets/portfolio/toymarketplace.png'
import { AiFillGithub } from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const portfolios = [
        {
            id: 1,
            src: jobPortal,
            client_code: 'https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-alhabib5565',
            live_site: 'https://648c71791c63b71d808a748c--alhabibjobs.netlify.app/'
        },
        {
            id: 2,
            src: resturent,
            client_code: 'https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-alhabib5565',
            server_code: 'https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-alhabib5565',
            live_site: 'https://assignment10-dbefd.web.app/'
        },
        {
            id: 3,
            src: toyMarketPlace,
            client_code: 'https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-alhabib5565',
            server_code: 'https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-alhabib5565',
            live_site: 'https://ema-john-simple-with-fir-a29b0.web.app/'
        }
    ];

    return (
        <div
            name="projects"
            className="bg-gradient-to-b from-cyan-950 to-gray-800 w-full text-white  md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0">
                    {portfolios.map(({ id, src, client_code, live_site, server_code }) => (
                        <div data-aos='fade-up' key={id} className="shadow-md shadow-gray-600 overflow-hidden rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105 w-full h-[300px]"
                            />
                            <div className="flex items-center justify-center">
                                <a href={live_site} target='_blank' className="flex justify-between items-center px-6 my-2 hover:bg-cyan-600 py-3 duration-200 ">
                                    Demo
                                </a>
                                <a href={client_code} className="flex justify-between gap-2 items-center px-6 my-2 hover:bg-cyan-600 py-3 duration-200 ">
                                    Client <AiFillGithub></AiFillGithub>
                                </a>
                                {
                                    server_code && <a href={server_code} className="flex justify-between gap-2 items-center px-6 my-2 hover:bg-cyan-600 py-3 duration-200 ">
                                        Server <AiFillGithub></AiFillGithub>
                                    </a>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;