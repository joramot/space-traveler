import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets, reserveRocket, reserveCanceled } from '../redux/rockets/rocketsSlice';
import styles from '../styles/Rockets.module.css';

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

  const handleCancelation = (id) => {
    dispatch(reserveCanceled(id));
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
              <span className={`${styles.reservedspan} ${!rocket.reserved && styles.hide}`}>
                Reserved
              </span>
              {rocket.description}
            </p>
            {!rocket.reserved && (
            <button
              onClick={() => handleReserve(rocket.id)}
              className={styles.reserveButton}
              type="button"
            >
              Reserve Rocket
            </button>
            )}
            {rocket.reserved && (
            <button
              onClick={() => handleCancelation(rocket.id)}
              className={styles.cancelButton}
              type="button"
            >
              Cancel Reservation
            </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Rockets;
