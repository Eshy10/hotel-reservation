import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RoomContext } from '../../context';
import Banner from '../../components/banner/Banner';
import StyledHero from '../../components/StyledHero';
// import styles from './singleRoom.module.css';

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

    images,
  } = uniqueRoom;
  return (
    <div>
      <StyledHero img={images[0]}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
    </div>
  );
};

export default SingleRoom;
