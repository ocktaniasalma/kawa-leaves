import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import MainLayout from '../layouts/MainLayout';

const HomePage: React.FC = () => {
    return (
        <MainLayout>
            <Header />
            <Hero />
            <Menu />
            <Testimonials />
            <Footer />
        </MainLayout>
    );
};

export default HomePage;