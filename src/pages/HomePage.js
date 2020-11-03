import React from 'react';
import { Link } from "react-router-dom";
import Hero from '../components/hero/Hero';
import Banner from '../components/banner/Banner';
import Services from '../components/services/Services';

const HomePage = () => {
    return (
        <div>
            <Hero>
            <Banner
            title="luxurious rooms"
            subtitle="deluxe rooms starting at $299"
          >
            <Link to="/rooms" className="btn-primary">
              our rooms
            </Link>
          </Banner>
            </Hero>
            <Services/>
        </div>
    )
}

export default HomePage
