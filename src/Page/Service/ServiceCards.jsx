import React from 'react';
import DefaultWeight from '../../components/Default/DefaultWeight';

const serviceCardData = [
    {
        "_id": 1,
        "title": "Dyeing",
        "description": "Adding color to biodegradable materials",
        "image_url": "assets/images/dyeing.png"
    },
    {
        "_id": 2,
        "title": "Cutting",
        "description": "Eco-friendly clothing items for all shapes and sizes",
        "image_url": "assets/images/cutting.png"
    },
    {
        "_id": 3,
        "title": "Sewing",
        "description": "Vouching for the ultimate sturdiness and durability of the fabric",
        "image_url": "assets/images/sewing.png"
    },
    {
        "_id": 4,
        "title": "Snipping of thread",
        "description": "A neat edge, a soft and smooth finish",
        "image_url": "assets/images/snipping-thread.png"
    },
    {
        "_id": 5,
        "title": "Ironing",
        "description": "Ironing it before shipping",
        "image_url": "assets/images/ironing.png"
    },
    {
        "_id": 6,
        "title": "Checking",
        "description": "Going through each clothing piece to ensure supreme quality standards are met",
        "image_url": "assets/images/checking.png"
    },
    {
        "_id": 7,
        "title": "Package",
        "description": "Folding and packing with the utmost care",
        "image_url": "assets/images/package.png"
    }
];

const ServiceCards = () => {
    return (
        <section>
            <DefaultWeight>
                <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
                    {serviceCardData?.map((card) => (
                        <div
                            key={card.step}
                            className='relative w-full sm:w-[45%] md:w-[22%] px-6 py-10 border border-gray-100 shadow-sm hover:border-secondary transition-all flex flex-col items-center text-center bg-white'
                        >
                            {/* Step Number Circle */}
                            <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border rounded-full flex items-center justify-center text-xs font-bold shadow-sm'>
                                {card?._id}
                            </div>

                            {/* Icon (Assuming you have image_url in your data) */}
                            <img src={card.image_url} alt={card.title} className="w-12 h-12 mb-4 object-contain" />

                            {/* Content */}
                            <h4 className='text-lg font-bold mb-2 text-gray-800'>{card?.title}</h4>
                            <p className='text-sm text-gray-500 leading-relaxed'>{card?.description}</p>
                        </div>
                    ))}
                </div>
            </DefaultWeight>
        </section>
    );
};

export default ServiceCards;