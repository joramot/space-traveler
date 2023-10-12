import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../redux/missions/missionsSlice';
import styles from '../styles/Missions.module.css';

function Missions() {
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <table>
      <tr>
        <h1 className={styles.missions}>Mission</h1>
        <h1 className={styles.description}>Description</h1>
        <h1 className={styles.status}>Status</h1>
        <h1 className={styles.status}> </h1>
      </tr>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {missions.map((mission) => (
        <tr key={mission.mission_id}>
          <h1 className={styles.missions}>{mission.mission_name}</h1>
          <p className={styles.description_p}>{mission.description}</p>
          <div className={styles.members}>
            <h2 className={styles.labelmembers}>NOT A MEMBER</h2>
          </div>
          <div className={styles.members}>
            <button className={styles.joinmission} type="button">Join Mission</button>
          </div>
        </tr>
      ))}
    </table>
  );
}

export default Missions;
