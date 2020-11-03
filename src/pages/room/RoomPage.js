import React from 'react';
import { Link } from 'react-router-dom';
import styles from './roomPage.module.css';
import Hero from '../../components/hero/Hero';
import Banner from '../../components/banner/Banner';

const RoomPage = () => (
  <div>
    <Hero hero={styles.roomsHero}>
      <Banner title="our rooms">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  </div>
);

export default RoomPage;
