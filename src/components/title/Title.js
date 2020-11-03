import React from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.css';

const Title = ({ title }) => (
  <div className={styles.sectionTitle}>
    <h4>{title}</h4>
    <div />
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
