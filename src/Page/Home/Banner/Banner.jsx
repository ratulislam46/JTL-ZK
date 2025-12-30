import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaArrowRight } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineMail } from 'react-icons/md';

const Banner = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div>
            <div className="h-screen flex items-center justify-center mb-40">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src='../../../../public/image/banner-vedio.mp4' type="video/mp4" />
                    </video>

                    {/* Video Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content Container */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <div className="max-w-3xl">
                        {/* Tagline */}
                        <div className="mb-4 text-gray-300 mt-20 ">
                            <p>Elevate Your Band With</p>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            High-Quality Garments.
                            <span className="block mt-2">Ethically Made.</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-tight">
                            At Zaneen Knitwear Ltd., we pride ourselves on being your reliable partner for
                            apparel production. Our commitment to ethical manufacturing ensures that every
                            garment meets the highest standards of quality and sustainability.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button className="px-8 py-4 bg-primary text-white hover:bg-primary/90">
                                Contact Us
                            </button>
                            <button className="px-8 py-4 border border-white text-white hover:bg-primary hover:border-primary">
                                Learn More
                            </button>
                        </div>

                    </div>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-8 right-8 z-20">
                    <button
                        onClick={togglePlayPause}
                        className="p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition duration-300"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                    </button>
                </div>
                <div className='absolute -bottom-36  flex gap-4 container mx-auto '>
                    {/* <div className='lg:flex items-end gap-4 mt-50 lg:mt-0'>
                        <div className='flex items-center gap-2'>
                            <div>
                                <IoLocationOutline size={34} className='text-secondary' />
                            </div>
                            <div>
                                <h4 className='text-secondary font-semibold text-2xl'>Location</h4>
                                <p className='text-gray-400'>Kashimpur, Gazipur Sadar / Gazipur</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div>
                                <MdOutlineMail size={34} className='text-secondary' />
                            </div>
                            <div>
                                <h4 className='text-secondary font-semibold text-2xl'>Email</h4>
                                <p className='text-gray-400'>compliance@danysknitwear.com</p>
                            </div>
                        </div>
                    </div> */}
                    {/* Card 1 */}
                    {/* <div className="bg-primary text-white p-8 md:p-12 flex-1 md:flex flex-col justify-between hidden">
                        <div className="space-y-3">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                                Quality Product
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>

                        <button className="flex items-center gap-2 mt-6">
                            Read More <FaArrowRight />
                        </button>
                    </div> */}

                    {/* Card 2 */}
                    {/* <div className="bg-secondary text-white p-8 md:p-12 flex-1 md:flex flex-col justify-between hidden">
                        <div className="space-y-3">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                                Project Overview
                            </h2>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                                35 Millions
                            </h1>
                        </div>

                        <button className="flex items-center gap-2 mt-6">
                            Read More <FaArrowRight />
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;