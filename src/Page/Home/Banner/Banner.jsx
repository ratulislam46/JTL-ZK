import React, { useRef, useState } from 'react';
import { FaPlay, FaPause} from 'react-icons/fa';

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
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
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

                {/* Video Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl">
                    {/* Tagline */}
                    <div className="mb-4 text-gray-300">
                        <p>Elevate Your Band With</p>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
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
        </section>
    );
};

export default Banner;