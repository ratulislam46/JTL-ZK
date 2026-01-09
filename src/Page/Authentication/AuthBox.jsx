import React, { Children } from 'react';
import AuthBg from './AuthBg';

const AuthBox = ({ children, title, subtitle }) => {
    return (
        <div className="min-h-screen relative">
            {/* Background Image with Blur */}
            <AuthBg />

            <div className="relative min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    {/* Card Container */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 sm:p-8">
                            <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
                                {title}
                            </h1>
                            <p className="text-blue-100 text-center mt-2">
                                {subtitle}
                            </p>
                        </div>

                        {/* Form Container */}
                        <div>
                            {children}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AuthBox;