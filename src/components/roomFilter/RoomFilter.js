/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { v4 as uuid_v4 } from 'uuid';
import PropTypes from 'prop-types';
import { RoomContext } from '../../context';
import Title from '../title/Title';
import styles from './roomFilter.module.css';

const getUnique = (items, value) => [...new Set(items.map(item => item[value]))];

const RoomFilter = ({ rooms }) => {
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = useContext(RoomContext);

  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  types = types.map(item => (
    <option key={uuid_v4()} value={item}>
      {item}
    </option>
  ));

  let people = getUnique(rooms, 'capacity');
  people = people.map(item => (
    <option key={uuid_v4()} value={item}>
      {item}
    </option>
  ));
  return (
    <section className={styles.filterContainer}>
      <Title title="search rooms" />
      <form className={styles.filterForm}>
        <div className={styles.formGroup}>
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className={styles.formControl}
            value={type}
          >
            {types}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className={styles.formControl}
            value={capacity}
          >
            {people}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">
            room price $
            {price}
          </label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className={styles.formControl}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">room size </label>
          <div className={styles.sizeInputs}>
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className={styles.sizeInput}
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className={styles.sizeInput}
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.singleExtra}>
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className={styles.singleExtra}>
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

RoomFilter.propTypes = {
  rooms: PropTypes.instanceOf(Array).isRequired,
};

export default RoomFilter;
