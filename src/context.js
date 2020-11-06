/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import items from './data';

export const RoomContext = createContext();

const initialFormState = {
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

const [values, setValues] = useState(initialFormState);

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
    const maxPrice = Math.max(...rooms.map(item => item.price));
    const maxSize = Math.max(...rooms.map(item => item.size));
    const roomData = () => {
      setRooms(roomsArray);
      setFeaturedRooms(roomsArray.filter(room => room.featured === true));
      setSortedRooms(roomsArray);
      setLoading(false);
      setValues(initialFormState.price = maxPrice);
      setValues(initialFormState.maxPrice = maxPrice);
      setValues(initialFormState.maxSize = maxSize);
    };
    roomData();
  }, []);

  const getRooms = slug => {
    const room = [...rooms].find(room => room.slug === slug);
    return room;
  };

  const filterRooms = () => {
    let {
      capacity,
      price,
    } = values;
    const {
      type, minSize, maxSize, breakfast, pets,
    } = values;
    let tempRooms = [...rooms];

    capacity = parseInt(capacity, 10);
    price = parseInt(price, 10);

    if (values.type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }

    tempRooms = tempRooms.filter(room => room.price <= price);

    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize,
    );

    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }

    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    setSortedRooms(tempRooms);
  };

  const handleChange = event => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    setValues(
      {
        [name]: value,
      },
      filterRooms,
    );
  };

  return (
    <RoomContext.Provider value={{
      rooms, featuredRooms, sortedRooms, loading, getRooms, handleChange,
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
