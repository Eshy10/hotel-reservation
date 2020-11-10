import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImg from '../../images/room-1.jpeg';
import styles from './room.module.css';

const Room = ({ room }) => {
  const {
    name, slug, images, price,
  } = room;
  return (
    <article className={styles.room}>
      <div className={styles.imgContainer}>
        <img src={images[0] || defaultImg} alt="single room" />
        <div className={styles.priceTop}>
          <h6>
            $
            {price}
          </h6>
          <p>per night</p>
        </div>
        <Link
          to={`/singlerooms/${slug}`}
          className={`btn-primary ${styles.roomLink}`}
        >
          features
        </Link>
      </div>
      <p className={styles.roomInfo}>{name}</p>
    </article>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Room;
