/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import items from './data';

export const RoomContext = createContext();

const RoomContextProvider = props => {
  const initialstate = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };
  const [values, setValues] = useState(initialstate);

  const formatData = items => {
    const tempItems = items.map(item => {
      const { id } = item.sys;
      const images = item.fields.images.map(image => image.fields.file.url);

      const room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  const filterRooms = () => {
    let {
      capacity,
      price,
    } = values;
    let tempRooms = [...values.rooms];

    capacity = parseInt(capacity, 10);
    price = parseInt(price, 10);

    if (values.type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === values.type);
    }

    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= values.capacity);
    }

    tempRooms = tempRooms.filter(room => room.price <= price);

    tempRooms = tempRooms.filter(
      room => room.size >= values.minSize && room.size <= values.maxSize,
    );

    if (values.breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }

    if (values.pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }

    setValues(prevState => ({
      ...prevState,
      sortedRooms: tempRooms,
    }));
  };

  useEffect(() => {
    const rooms = formatData(items);
    const featuredRooms = rooms.filter(room => room.featured === true);

    const maxPrice = Math.max(...rooms.map(item => item.price));
    const maxSize = Math.max(...rooms.map(item => item.size));
    const roomData = () => {
      setValues(prevState => ({
        ...prevState,
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,

        price: maxPrice,
        maxPrice,
        maxSize,
      }));
    };
    roomData();
  }, []);

  const getRooms = slug => {
    const room = [...values.rooms].find(room => room.slug === slug);
    return room;
  };

  const handleChange = event => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    setValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (values) filterRooms();
  }, [values.type, values.capacity, values.loading,
    values.maxPrice, values.maxSize, values.minSize,
    values.pets, values.breakfast, values.minPrice]);

  return (
    <RoomContext.Provider value={{
      ...values,
      getRooms,
      handleChange,
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
