import React from 'react';
import Banner from './Banner/Banner';
import ServicePage from '../Service/ServicePage';
import Partners from '../Partners/Partners';
import ServiceCards from '../Service/ServiceCards';

const Home = () => {

    return (
        <>
            <section>
                <Banner />
            </section>
            <section>
                <Partners />
            </section>
            <section>
                <ServicePage />
            </section>
            <section>
                <ServiceCards/>
            </section>

        </>
    );
};

export default Home;