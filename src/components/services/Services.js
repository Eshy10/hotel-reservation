import React, { useState } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from '../title/Title';
import styles from './services.module.css';

const Services = () => {
    const initialState = [
        {
          icon: <FaCocktail />,
          title: "Free Cocktails",
          info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
          icon: <FaHiking />,
          title: "Endless Hiking",
          info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
          icon: <FaShuttleVan />,
          title: "Free Shuttle",
          info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
          icon: <FaBeer />,
          title: "Strongest Beer",
          info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        }
      ]
    const [services] = useState(initialState)
    return (
        <div>
        <section className={styles.services}>
        <Title title="services" />
        <div className={styles.servicesCenter}>
          {services.map((item, index)=> {
            return (
              <article key={index} className={styles.service}>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section> 
        </div>
    )
}

export default Services
