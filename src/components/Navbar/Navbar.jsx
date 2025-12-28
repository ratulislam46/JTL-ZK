import React from 'react';
import Contact from './Contact';
import NavbarRoutes from './NavbarRoutes';

const Navbar = () => {

    return (
        <div>
            {/* Location and social icons */}
            <Contact/>

            <NavbarRoutes/>
        </div>
    );
};

export default Navbar;