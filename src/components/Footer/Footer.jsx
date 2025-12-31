import React from 'react';
import DefaultWeight from '../Default/DefaultWeight';

const Footer = () => {
    return (
        <div className='py-10 border'>
            <DefaultWeight>
                <div className='lg:flex justify-center lg:justify-between items-center border'>
                    {/* first column */}
                    <div className='mb-10 lg:mb-0'>
                        <img src="/public/image/Icon.png" alt="logo" className='h-12 mb-8' />
                        {/* Google map location  */}
                        <div></div>
                        {/* After Clicked Email to this device */}
                        <div></div>
                        <h3 className='font-bold text-xl'>+8801643110638</h3>
                    </div>

                    {/* Second Column  */}
                    <div className='flex gap-14'>

                        <div>
                            <h3 className='font-bold text-xl mb-4'>Pages</h3>
                            <div className='text-gray-500 space-y-1'>
                                <p>About Us</p>
                                <p>Our Services</p>
                                <p>Our Products</p>
                            </div>
                        </div>

                        <div>
                            <h3 className='font-bold text-xl mb-4'>Information</h3>
                            <div className='text-gray-500 space-y-1'>
                                <p>My Account</p>
                                <p>Corporate Enquires</p>
                                <p>FAQs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultWeight>
        </div>
    );
};

export default Footer;