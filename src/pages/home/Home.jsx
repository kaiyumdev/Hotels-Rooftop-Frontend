import React from 'react';
import Hero from './Hero';
import Categories from './Categories';
import FeaturedPosts from './FeaturedPosts';
import NewsletterSignup from './Newsletter';
import Blogs from '../blogs/Blogs';

const Home = () => {
    return (
        <div className="bg-white text-primary container mx-auto mt-8 p-8">
            <Hero />
            <FeaturedPosts />
            <Categories />
            <Blogs></Blogs>
            <NewsletterSignup />
        </div>
    );
};

export default Home;