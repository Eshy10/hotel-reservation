import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import styles from './navbar.module.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <nav className={styles.navbar}>
        <div className= {styles.navCenter}>
        <div className={styles.navHeader}>
        <Link to="/">
          <img src={logo} alt="Beach Resort" />
        </Link>
        <button
          type="button"
          className={styles.navBtn}
          onClick={handleToggle}
        >
          <FaAlignRight className={styles.navIcon} />
        </button>
      </div>
      <ul
        className={toggle ? `${styles.navLinks} ${styles.showNav}` : styles.navLinks }
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rooms">Rooms</Link>
        </li>
      </ul>  
        </div>
        </nav>
    )
}

export default Navbar
