/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { v4 as uuid_v4 } from 'uuid';
import { RoomContext } from '../../context';
import Banner from '../../components/banner/Banner';
import StyledHero from '../../components/StyledHero';
import styles from './singleRoom.module.css';

const SingleRoom = () => {
  const { getRooms } = useContext(RoomContext);
  const { room } = useParams();
  const uniqueRoom = getRooms(room);

  if (!uniqueRoom) {
    return (
      <div className="error">
        <h3> Room does not exit...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = uniqueRoom;
  const [main, ...defaultImages] = images;
  return (
    <div>
      <StyledHero img={main}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className={styles.singleRoom}>
        <div className={styles.singleRoomImages}>
          {defaultImages.map(item => (
            <img key={uuid_v4()} src={item} alt={name} />
          ))}
        </div>
        <div className={styles.singleRoomInfo}>
          <article className={StyleSheet.desc}>
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className={styles.info}>
            <h3>info</h3>
            <h6>
              price : $
              {price}
            </h6>
            <h6>
              size :
              {size}
              {' '}
              SQFT
            </h6>
            <h6>
              max capacity :
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
            <h6>{breakfast && 'free breakfast included'}</h6>
          </article>
        </div>
      </section>
      <section className={styles.roomExtras}>
        <h6>extras </h6>
        <ul className={styles.extras}>
          {extras.map(item => (
            <li key={uuid_v4()}>
              -
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SingleRoom;
