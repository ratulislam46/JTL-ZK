import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const HomeLayout = () => {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main className='min-h-[calc(100vh-200px)]'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default HomeLayout;