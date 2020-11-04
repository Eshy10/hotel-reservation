import React, { useContext } from 'react';
import Title from '../title/Title';
import { RoomContext } from '../../context';
import Loading from '../Loading';
import Room from '../rooms/Room';
import styles from './featureRooms.module.css';

const FeatureRooms = () => {
  const { loading, featuredRooms } = useContext(RoomContext);
  console.log(featuredRooms);
  return (
    <section className={styles.featuredRooms}>
      <Title title="featured rooms" />
      <div className={styles.featuredRoomsCenter}>
        {
        loading ? <Loading />
          : featuredRooms.map(room => (
            <Room key={room.id} room={room} />
          ))
      }
      </div>
    </section>
  );
};

export default FeatureRooms;
