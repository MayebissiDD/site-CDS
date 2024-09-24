import React from 'react';
import Logo from './../assets/images/logo/logo.png';

function Loader() {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className="text-center">
                <img src={Logo} alt="Congo Digital Services" className="w-24 h-24 mx-auto mb-4 animate-pulse" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Congo Digital Services</h2>
                <div className="flex justify-center">
                    <div className="w-4 h-4 mx-1 bg-first-color rounded-full animate-bounce"></div>
                    <div className="w-4 h-4 mx-1 bg-second-color rounded-full animate-bounce delay-200"></div>
                    <div className="w-4 h-4 mx-1 bg-first-color-2 rounded-full animate-bounce delay-400"></div>
                </div>
            </div>
        </div>
    );
}

export default Loader;
