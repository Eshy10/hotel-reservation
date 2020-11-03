import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/hero/Hero';
import Banner from '../components/banner/Banner';
import Services from '../components/services/Services';
import FeatureRooms from '../components/featureRooms/FeatureRooms';

const HomePage = () => (
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
    <Services />
    <FeatureRooms />
  </div>
);

export default HomePage;
