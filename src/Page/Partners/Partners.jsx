import React from 'react';
import DefaultWeight from '../../components/Default/DefaultWeight';

const Partners = () => {

  return (
    <DefaultWeight>
      <marquee behavior="" direction="">
        <div className="flex gap-2 md:gap-4 lg:gap-10 py-12">
          <img src="/image/Vector.svg" className="h-4 md:h-6 lg:h-10 mx-5" />
          <img src="/image/Vector (1).svg" className="h-4 md:h-6 lg:h-10 mx-5" />
          <img src="/image/Vector (2).svg" className="h-4 md:h-6 lg:h-10 mx-5" />
          <img src="/image/Vector (3).svg" className="h-4 md:h-6 lg:h-10 mx-5" />
          <img src="/image/Vector.svg" className="h-4 md:h-6 lg:h-10 mx-5" />
          <img src="/image/Vector (1).svg" className="h-4 md:h-6 lg:h-10 mx-5" />
        </div>
      </marquee>
    </DefaultWeight>
  );
};

export default Partners