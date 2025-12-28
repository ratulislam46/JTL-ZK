import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoIosPhonePortrait } from 'react-icons/io';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='container mx-auto flex justify-between text-xs'>

            {/* Location and Number  */}
            <div className='flex gap-4 text-white py-2'>
                <p className='flex items-center'> <CiLocationOn />
                    Kashimput, Gazipur Sadar / Gazipur</p>
                <p className='flex items-center'> <IoIosPhonePortrait />
                    +880 01713027875</p>
            </div>

            {/* Social Icons  */}
            <div className="flex gap-4 text-primary bg-white p-2">
                {/* Facebook */}
                <a
                    href="https://www.facebook.com/yourpage" target="_blank"
                >
                    <FaFacebookF />
                </a>

                {/* Twitter */}
                <a
                    href="https://twitter.com/yourhandle"
                    target="_blank"
                >
                    <FaTwitter />
                </a>

                {/* Instagram */}
                <a
                    href="https://www.instagram.com/yourhandle"
                    target="_blank"
                >
                    <FaInstagram />
                </a>

                {/* YouTube */}
                <a
                    href="https://www.youtube.com/yourchannel"
                    target="_blank"
                >
                    <FaYoutube />
                </a>
            </div>
        </div>
    );
};

export default Contact;