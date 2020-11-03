import React from 'react';
import PropTypes from 'prop-types';
import styles from './banner.module.css';

const Banner = ({ children, title, subtitle }) => (
  <div className={styles.banner}>
    <h1>{title}</h1>
    <div />
    <p>{subtitle}</p>
    {children}
  </div>
);

Banner.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Banner;
