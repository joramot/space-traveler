import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import styles from '../styles/Navbar.module.css';

function Rockets() {
  const {
    rockets, isLoading, error,
  } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

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
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Rockets;
