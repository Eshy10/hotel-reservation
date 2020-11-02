import React from 'react';
import styles from './banner.module.css';

const Banner = ({ children, title, subtitle }) => {
    return (
        <div className={styles.banner}>
        <h1>{title}</h1>
        <div />
        <p>{subtitle}</p>
        {children}
        </div>
    )
}

export default Banner
