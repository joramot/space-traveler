import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const { rockets, isLoading, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {rockets.map((rocket) => (
        <article key={rocket.id}>
          <h1>{rocket.name}</h1>
          <img src={rocket.flickr_images[0]} alt={rocket.name} />
          <p>{rocket.description}</p>
        </article>
      ))}
    </main>
  );
}

export default Rockets;
