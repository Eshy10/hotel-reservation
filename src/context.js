/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import items from './data';

export const RoomContext = createContext();

const RoomContextProvider = props => {
  const [rooms, setRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatData = items => {
    const tempItems = items.map(item => {
      const { id } = item.sys;
      const images = item.fields.images.map(image => image.fields.file.url);

      const room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  useEffect(() => {
    const roomsArray = formatData(items);
    const roomData = () => {
      setRooms(roomsArray);
      setFeaturedRooms(roomsArray.filter(room => room.featured === true));
      setSortedRooms(roomsArray);
      setLoading(false);
    };
    roomData();
  }, []);

  const getRooms = slug => {
    const room = [...rooms].find(room => room.slug === slug);
    return room;
  };

  return (
    <RoomContext.Provider value={{
      rooms, featuredRooms, sortedRooms, loading, getRooms,
    }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};

RoomContextProvider.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default RoomContextProvider;
