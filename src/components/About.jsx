import React, { useEffect } from 'react';
import heroImage from '../assets/heroImage.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div name="about" className='bg-gradient-to-t md:h-screen to-cyan-950 from-gray-800 pb-8 md:pb-0'>
            <h2 data-aos='zoom-in-up' className='text-4xl font-medium text-center text-white pt-8 md:pt-16 lg:pt-24'>About</h2>
            <div className='max-w-screen-lg mx-auto mt-10  flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-8 lg:px-14'>
                <div className='md:w-2/3 text-gray-300 text-justify'>
                    <p data-aos="fade-up-left">
                        Hi, I'm Al-Habib, a junior MERN stack developer. I recently completed a comprehensive programming course at Programming Hero, where I gained a solid foundation in the MERN stack and web development."
                    </p>
                    <br />
                    <p data-aos='fade-up-left'>
                        Throughout the course, I worked on various projects that allowed me to apply my knowledge of MongoDB, Express.js, React, and Node.js. I learned how to build interactive user interfaces using React and create RESTful APIs using Express.js and Node.js. Additionally, I gained experience in working with MongoDB for data storage and retrieval.
                    </p>
                    <br />
                    <p data-aos='fade-up-left'>
                        Although I'm a junior developer, I am highly motivated and dedicated to honing my skills and expanding my knowledge. I'm passionate about creating clean and efficient code, following best practices and industry standards.
                    </p>
                </div>
                <div data-aos="fade-up-right" className='md:w-2/6 order-first'>
                    <img className='rounded-xl w-[300px]' src={heroImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;