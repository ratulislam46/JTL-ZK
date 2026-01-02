import React, { useState } from 'react';
import DefaultWeight from '../Default/DefaultWeight';
import PaymentChannels from './PaymentChannels';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { CiLinkedin, CiLocationArrow1 } from 'react-icons/ci';
import { MdContentCopy, MdOutlineMailOutline } from 'react-icons/md';
import { IoCopySharp } from 'react-icons/io5';
import GoogleMap from './GoogleMap';

const Footer = () => {

    const email = "arfanratul46@gmail.com";
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);

            setTimeout(() => setCopied(false), 400);
        } catch (err) {
            alert("Failed to copy email");
        }
    };

    return (
        <div className='py-12 bg-[#F7F7F7]'>
            <DefaultWeight>
                <div className='lg:flex justify-center lg:justify-between items-centerr'>
                    {/* first column */}
                    <div className='mb-10 lg:mb-0'>
                        <img src="/public/image/Icon.png" alt="logo" className='h-14 mb-8' />
                        {/* Google map location  */}
                        <div className='flex gap-3 items-center'>
                            <span><CiLocationArrow1 /></span>
                            <GoogleMap/>
                        </div>

                        {/* After Clicked Email to this device */}
                        <div className='flex gap-3 items-center'>
                            <span><MdOutlineMailOutline /></span>
                            <p className='text-gray-500'>{email}</p>
                            <button onClick={handleCopyEmail} className='cursor-pointer'>
                                {copied ? <IoCopySharp /> : <MdContentCopy />}
                            </button>
                        </div>

                        <h3 className='font-medium mt-2'>+8801643110638</h3>
                    </div>

                    {/* Second Column  */}
                    <div className='flex gap-14'>
                        <div>
                            <h3 className='font-bold text-xl mb-4 uppercase'>Pages</h3>
                            <div className='text-gray-500 space-y-1'>
                                <p>About Us</p>
                                <p>Our Services</p>
                                <p>Our Products</p>
                            </div>
                        </div>

                        <div>
                            <h3 className='font-bold text-xl mb-4 uppercase'>Information</h3>
                            <div className='text-gray-500 space-y-1'>
                                <p>My Account</p>
                                <p>Corporate Enquires</p>
                                <p>FAQs</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Channels  */}
                <div className='mt-8 border-b-3 border-gray-400 pb-8'>
                    <PaymentChannels />
                </div>
                <div className='lg:flex justify-between pt-8 space-y-3 lg:space-y-0'>
                    <p className='text-gray-400'>Copyright <span className='text-primary font-medium'>© 360D Soul Limited 2026.</span> All rights reserved.</p>

                    {/* Social Link icons */}
                    <div className='flex items-center gap-4'>
                        <FaFacebookSquare size={24} className='text-blue-500' />
                        <CiLinkedin size={28} className='text-blue-500' />
                        <FaInstagram size={28} className='text-blue-500' />
                    </div>
                    <div className='text-gray-400 flex gap-5'>
                        <h3>Teams & Condition</h3>
                        <h3>Privacy & Policy</h3>
                        <h3>Refund Policy</h3>
                    </div>
                </div>
            </DefaultWeight>
        </div>
    );
};

export default Footer;