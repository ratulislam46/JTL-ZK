import React from 'react';
import { FaPlay, FaPause, FaArrowRight } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineMail } from 'react-icons/md';

const Banner = () => {


    return (
        <div className="w-full mb-40">
  <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] xl:h-[70vh] lg:h-[75vh] overflow-hidden">
    
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source
        src="/image/banner-vedio.mp4"
        type="video/mp4"
      />
    </video>

    {/* Overlay Gradients */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

  </div>
</div>

    );
};

export default Banner;