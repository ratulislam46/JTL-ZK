import React from 'react';
import Banner from './Banner/Banner';
import ServicePage from '../Service/ServicePage';

const Home = () => {
    return (
        <>
            <section>
                <Banner />
            </section>
            <section>
                <ServicePage />
            </section>
        </>
    );
};

export default Home;