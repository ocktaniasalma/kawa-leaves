import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <h1 className="text-5xl font-bold">Welcome to Our Cafe</h1>
                <p className="mt-4 text-lg">Experience the best coffee and pastries in town.</p>
                <button className="mt-6 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400">
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default Hero;