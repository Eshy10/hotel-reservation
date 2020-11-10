import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/hero/Hero';
import Banner from '../components/banner/Banner';

const ErrorPage = () => (
  <div>
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  </div>
);

export default ErrorPage;
