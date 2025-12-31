import React from 'react';
import DefaultWeight from '../../components/Default/DefaultWeight';

const ServicePage = () => {
    return (
        <section className="relative w-full bg-[#E9F7F7] py-24 overflow-hidden">
            <DefaultWeight>
                <div className="flex flex-col lg:flex-row items-center gap-10">

                    {/* Left Content Card */}
                    <div className="relative w-full lg:w-3/5 z-10">
                        {/* Torn Paper Container */}
                        <div
                            className="bg-white p-8 md:p-16 lg:p-20 shadow-xl"
                            style={{
                                clipPath: "polygon(0% 0%, 100% 0%, 95% 15%, 100% 30%, 94% 45%, 99% 60%, 93% 75%, 98% 90%, 90% 100%, 0% 100%)",
                                WebkitClipPath: "polygon(0% 0%, 100% 0%, 95% 15%, 100% 30%, 94% 45%, 99% 60%, 93% 75%, 98% 90%, 90% 100%, 0% 100%)"
                            }}
                        >
                            <div className="max-w-lg">
                                {/* Badge */}
                                <div className="inline-flex items-center px-6 py-1.5 rounded-full border border-secondary text-secondary text-sm font-semibold mb-8 hover:bg-secondary hover:text-white transition duration-300">
                                    Process
                                </div>

                                {/* Heading */}
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-[1.1] mb-6">
                                    Do You Want Custom Project With Textilery? Contact Us Now
                                </h2>

                                {/* Paragraph */}
                                <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                                    At Zaheen Knitwear Ltd., we pride ourselves on being your reliable partner for apparel production.
                                    Our commitment to ethical manufacturing ensures that every garment is crafted with care and integrity.
                                </p>

                                {/* Button */}
                                <button className="px-8 py-3.5 border-2 border-secondary text-secondary font-bold text-lg hover:bg-secondary hover:text-white transition-all duration-300 rounded-sm">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right site image  */}
                    <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                        <div className="relative group">
                            <img
                                src="../../../public/image/dress.png"
                                alt="Custom Apparel"

                            />
                        </div>
                    </div>

                </div>
            </DefaultWeight>
        </section>
    );
};

export default ServicePage;