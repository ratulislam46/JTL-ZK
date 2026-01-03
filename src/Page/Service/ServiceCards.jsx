import React from 'react';
import DefaultWeight from '../../components/Default/DefaultWeight';

const serviceCardData = [
    {
        "_id": 1,
        "title": "Dyeing",
        "description": "Adding color to biodegradable materials",
        "image_url": "../../../public/image/1.png"
    },
    {
        "_id": 2,
        "title": "Cutting",
        "description": "Eco-friendly clothing items for all shapes and sizes",
        "image_url": "../../../public/image/2.png"
    },
    {
        "_id": 3,
        "title": "Sewing",
        "description": "Vouching for the ultimate sturdiness and durability of the fabric",
        "image_url": "../../../public/image/3.png"
    },
    {
        "_id": 4,
        "title": "Snipping of thread",
        "description": "A neat edge, a soft and smooth finish",
        "image_url": "../../../public/image/4.png"
    },
    {
        "_id": 5,
        "title": "Ironing",
        "description": "Ironing it before shipping",
        "image_url": "../../../public/image/5.png"
    },
    {
        "_id": 6,
        "title": "Checking",
        "description": "Going through each clothing piece to ensure supreme quality standards are met",
        "image_url": "../../../public/image/6.png"
    },
    {
        "_id": 7,
        "title": "Package",
        "description": "Folding and packing with the utmost care",
        "image_url": "../../../public/image/7.png"
    }
];

const ServiceCards = () => {

    return (
        <section className='py-24'>
            <DefaultWeight>
                <div className='flex flex-wrap justify-center gap-6 md:gap-8 pt-10'>
                    {serviceCardData?.map((card) => (
                        <div
                            key={card?._id}
                            className='group relative w-full sm:w-[45%] md:w-[22%] px-6 py-10 border border-gray-100 shadow-sm flex flex-col items-center text-center bg-white cursor-pointer overflow-visible'
                        >

                            <div className='absolute inset-0 overflow-hidden z-0 pointer-events-none'>
                                <div className='absolute bottom-0 left-0 w-full h-0 bg-secondary transition-all duration-1000 ease-in-out group-hover:h-full'></div>
                            </div>

                            {/* Card id  */}
                            <div className='absolute -top-4 left-1/2 -translate-x-1/2 z-20 w-8 h-8 bg-white border border-gray-100 rounded-full flex items-center justify-center text-xs font-bold shadow-md transition-all duration-500 
                            group-hover:bg-primary group-hover:text-white group-hover:border-primary'>
                                {card?._id}
                            </div>

                            {/* Image */}
                            <div className="relative z-10 mt-4">
                                <img
                                    src={card.image_url}
                                    alt={card.title}
                                    className="w-12 h-12 mb-4"
                                />
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h4 className='text-lg font-bold mb-2 text-gray-800 transition-all duration-700 group-hover:text-white'>
                                    {card?.title}
                                </h4>
                                <p className='text-sm text-gray-500 leading-relaxed transition-all duration-700 group-hover:text-white/90'>
                                    {card?.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </DefaultWeight>
        </section>
    );
};

export default ServiceCards;