import React from 'react';
import DefaultWeight from '../Default/DefaultWeight';
import PaymentChannels from './PaymentChannels';

const Footer = () => {
    return (
        <div className='py-10 bg-[#F7F7F7]'>
            <DefaultWeight>
                <div className='lg:flex justify-center lg:justify-between items-centerr'>
                    {/* first column */}
                    <div className='mb-10 lg:mb-0'>
                        <img src="/public/image/Icon.png" alt="logo" className='h-14 mb-8' />
                        {/* Google map location  */}
                        <div>
                            <p className='text-gray-500 mb-1'>29 SE 2nd Ave, Miami Florida 33131, United States</p>
                        </div>
                        {/* After Clicked Email to this device */}
                        <div>
                            <p className='text-gray-500'>info@zaheen.com</p>
                        </div>
                        <h3 className='font-bold text-xl mt-2'>+8801643110638</h3>
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
                <div className='mt-8'>
                    <PaymentChannels />
                </div>
            </DefaultWeight>
        </div>
    );
};

export default Footer;