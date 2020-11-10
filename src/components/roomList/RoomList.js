import React from 'react';
import PropTypes from 'prop-types';
import Room from '../rooms/Room';
import styles from './roomList.module.css';

const RoomList = ({ rooms }) => {
  if (!rooms) {
    return (
      <div className="empty-search">
        <h3>sorry no rooms matched your search parameters..</h3>
      </div>
    );
  }
  return (
    <section className={styles.roomslist}>
      <div className={styles.roomslistCenter}>
        {rooms.map(item => <Room key={item.id} room={item} />)}
      </div>
    </section>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.instanceOf(Array).isRequired,
};

export default RoomList;
