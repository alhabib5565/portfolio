import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import heroImage from '../assets/heroImage.png'
import { FaArrowRight } from 'react-icons/fa';
import {FiDownload} from 'react-icons/fi'
const Home = () => {
    return (
        <div name='home' className='bg-gradient-to-t pb-8 md:pb-0 to-cyan-950 from-gray-800 pt-20 min-h-screen md:h-screen'>
            <div className='max-w-screen-lg pt-8 md:pt-20 md:mt-0 mx-auto h-full px-4 md:px-8 lg:px-14 flex flex-col md:flex-row gap-6 justify-between items-center'>
                <div className='md:w-2/3 space-y-4'>
                    <h2 className='text-3xl md:text-5xl font-bold text-white'>Hi, I'm Al-Habib</h2>
                    <h2 className='text-2xl md:text-4xl font-bold text-cyan-300'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'UI/UX Desiner',
                                1000,
                                'MERN Stack Developer',
                                1000,
                                'Frontend Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            className=''
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className='text-gray-300'>
                        I am passionate about building dynamic web applications using the MERN stack. With my expertise in Tailwind, React.js, Node.js, Express.js, and MongoDB, I am able to create engaging user interfaces that enhance the overall user experience.
                    </p>
                    <div className='flex items-center gap-6'>
                        <button className='group text-white flex items-center gap-3 uppercase font-medium bg-gradient-to-r from-cyan-400 to-sky-700 py-2 px-4 rounded-lg'>projects <span><FaArrowRight className='group-hover:rotate-90 duration-300'></FaArrowRight></span></button>

                        <a download={true} href="/resume.pdf" className='text-white flex items-center gap-3 uppercase font-medium bg-gradient-to-r from-cyan-400 to-sky-700 py-2 px-4 rounded-lg hover:scale-x-105 duration-300'>resume <span><FiDownload></FiDownload></span></a>
                    </div>
                </div>
                <div className='md:w-2/6 order-first md:order-last'>
                    <img className='rounded-lg w-[300px]' src={heroImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;