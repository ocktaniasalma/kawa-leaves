import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <nav className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <h1 className="text-xl font-bold">Cafe Name</h1>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex">
                            <a href="#menu" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Menu</a>
                            <a href="#testimonials" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
                            <a href="#contact" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;