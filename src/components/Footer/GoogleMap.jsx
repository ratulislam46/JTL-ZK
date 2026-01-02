import React from 'react';

const GoogleMap = () => {

    const lati = 22.7081;
    const long = 90.3662;

    return (
        <a
            href={`https://www.google.com/maps?q=${lati},${long}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
        >
           Govt. Barisal College, Barisal sadar Baisal, Bangladesh
        </a>
    );
};

export default GoogleMap;