import React from 'react';
import PropTypes from 'prop-types';
import styles from './hero.module.css';

const Hero = ({ children, hero }) => (
  <header className={hero}>{children}</header>
);

export default Hero;

Hero.propTypes = {
  children: PropTypes.string.isRequired,
  hero: PropTypes.string,
};

Hero.defaultProps = {
  hero: `${styles.defaultHero}`,
};
