import React, { useState } from "react";
import {
  FaUser,
  FaShoppingCart,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";

const NavbarRoutes = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Main navigation items (left)
    const navItems = [
        { id: "home", label: "Home", href: "#" },
        { id: "about", label: "About Us", href: "#" },
        {
            id: "services",
            label: "Our Services",
            href: "#",
            dropdown: true,
            dropdownItems: [
                { label: "Web Development", href: "#" },
                { label: "Mobile Apps", href: "#" },
                { label: "UI/UX Design", href: "#" },
                { label: "Digital Marketing", href: "#" },
            ],
        },
        {
            id: "products",
            label: "Our Products",
            href: "#",
            dropdown: true,
            dropdownItems: [
                { label: "Software Solutions", href: "#" },
                { label: "Hardware Products", href: "#" },
                { label: "Consultation", href: "#" },
                { label: "Support", href: "#" },
            ],
        },
        { id: "blogs", label: "Blogs", href: "#" },
    ];

    // Right side items
    const rightItems = [
        { id: "cart", label: "Cart", icon: <FaShoppingCart />, href: "#" },
        { id: "account", label: "Your Account", icon: <FaUser />, href: "#" },
        { id: "contact", label: "Contact Us", href: "#" },
    ];

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const toggleDropdown = (itemId) => {
        setActiveDropdown((prev) => (prev === itemId ? null : itemId));
    };

    return (
        <div className="container mx-auto px-4 py-2 border">
            <div className="flex justify-between items-center h-16">

                {/* Left side: Logo + Main navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                    {/* Website Icon */}
                    <div className="flex items-center">
                        <img src="../../../public/image/Icon.png" alt="" />
                    </div>

                    {/* Main nav items */}
                    {navItems.map((item) => (
                        <div key={item.id} className="relative group">
                            <button
                                onClick={() => item.dropdown && toggleDropdown(item.id)}
                                className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-500 transition-colors duration-200 gap-1"
                            >
                                {item.icon}
                                {item.label}
                                {item.dropdown && <FaChevronDown className="ml-1 text-xs" />}
                            </button>

                            {/* Dropdown */}
                            {item.dropdown && (
                                <div className="absolute left-0 mt-2 w-56 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                                    <div className="py-2">
                                        {item.dropdownItems.map((dropdownItem, idx) => (
                                            <a
                                                key={idx}
                                                href={dropdownItem.href}
                                                className="block px-4 py-2 text-sm hover:bg-blue-50"
                                            >
                                                {dropdownItem.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right side: Cart, Account, Contact */}
                <div className="hidden lg:flex items-center space-x-4">
                    {rightItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className="flex items-center px-3 py-2 rounded-md hover:bg-blue-500 transition-colors duration-200 gap-1"
                        >
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                        </a>
                    ))}
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={toggleMobileMenu}
                        className="p-2 rounded-md hover:bg-blue-500 transition duration-200"
                    >
                        {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-blue-700 rounded-b-lg shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-2">
                        {/* Logo */}
                        <div className="flex items-center px-3 py-3 gap-2">
                            <AiFillAppstore size={28} />
                            <span className="font-bold text-xl">TechYard</span>
                        </div>

                        {/* Left items: main nav */}
                        {navItems.map((item) => (
                            <div key={item.id}>
                                <div className="flex items-center justify-between">
                                    <a
                                        href={item.href}
                                        className="flex items-center px-3 py-3 text-base font-medium rounded-md hover:bg-blue-600 gap-2"
                                    >
                                        {item.icon}
                                        {item.label}
                                    </a>
                                    {item.dropdown && (
                                        <button
                                            onClick={() => toggleDropdown(item.id)}
                                            className="p-3"
                                        >
                                            <FaChevronDown
                                                className={`transform transition-transform ${activeDropdown === item.id ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                    )}
                                </div>

                                {item.dropdown && activeDropdown === item.id && (
                                    <div className="ml-6 mb-2 bg-blue-800 rounded-md">
                                        {item.dropdownItems.map((dropdownItem, idx) => (
                                            <a
                                                key={idx}
                                                href={dropdownItem.href}
                                                className="block px-4 py-3 text-sm hover:bg-blue-700"
                                            >
                                                {dropdownItem.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Right items: Cart, Account, Contact */}
                        {rightItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                className="flex items-center px-3 py-3 text-base font-medium rounded-md hover:bg-blue-600 gap-2"
                            >
                                {item.icon}
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>


    );
};

export default NavbarRoutes;
