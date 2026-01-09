import React from 'react';

const AuthBg = () => {
    return (
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")'
            }}
        >
            {/* Blur Overlay */}
            <div className="absolute inset-0 bg-opacity-40 backdrop-blur-sm"></div>
        </div>
    );
};

export default AuthBg;