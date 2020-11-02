import React from 'react';
import styles from './hero.module.css';

const Hero = ({children, hero}) => {
    return (
        <header className={hero}>{children}</header>
    )
}

export default Hero

Hero.defaultProps = {
    hero: `${styles.defaultHero}`
  };
