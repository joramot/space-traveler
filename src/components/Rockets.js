import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets, reserveRocket } from '../redux/rockets/rocketsSlice';
import styles from '../styles/Navbar.module.css';

function Rockets() {
  const {
    rockets, isLoading, error, isLoaded,
  } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchRockets());
    }
  }, [dispatch, isLoaded]);

  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  return (
    <ul className={styles.rocketsMain}>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {rockets.map((rocket) => (
        <li className={styles.Containerli} key={rocket.id}>
          <div className={styles.imgContainer}>
            <img
              src={rocket.flickr_images[0]}
              alt={rocket.name}
              className={styles.rocketImg}
            />
          </div>
          <div className={styles.mainRocket}>
            <h1 className={styles.rocketTitle}>{rocket.name}</h1>
            <p>
              {rocket.description}
            </p>
            <button
              onClick={() => handleReserve(rocket.id)}
              className=""
              type="button"
            >
              Reserve Rocket
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Rockets;
