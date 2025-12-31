import React from 'react';
import DefaultWeight from '../../../components/Default/DefaultWeight';

const Banner = () => {

    return (
        <div className="w-full">
            <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] xl:h-[70vh] lg:h-[75vh] overflow-hidden">

                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover">
                    <source
                        src="/image/banner-vedio.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Content  */}
                <div className="absolute inset-0 flex items-center">
                    <DefaultWeight>

                        <div className="max-w-2xl text-white">
                            <p className="text-sm sm:text-base uppercase tracking-wide text-gray-200 mb-2">
                                Elevate Your Brand With
                            </p>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                                High-Quality Garments. <br />
                                Ethically Made.
                            </h1>

                            <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
                                At Zaheen Knitwear Ltd., we pride ourselves on being your reliable partner
                                for apparel production. Our commitment to ethical manufacturing ensures
                                that every garment is crafted with care and integrity.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="bg-primary hover:bg-base text-white px-6 py-3 text-sm sm:text-base rounded transition">
                                    Contact Us
                                </button>

                                <button className="border border-white hover:border-primary hover:bg-primary text-white px-6 py-3 text-sm sm:text-base rounded transition">
                                    Learn More
                                </button>
                            </div>
                        </div>

                    </DefaultWeight>
                </div>
            </div>
        </div>

    );
};

export default Banner;