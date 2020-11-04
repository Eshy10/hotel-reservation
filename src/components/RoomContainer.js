import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import RoomFilter from './roomFilter/RoomFilter';
import RoomList from './roomList/RoomList';

const RoomContainer = () => {
  const { loading, rooms, sortedRooms } = useContext(RoomContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
};

export default RoomContainer;
