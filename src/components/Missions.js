import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions, reserveMission, cancelMissions } from '../redux/missions/missionsSlice';
import styles from '../styles/Missions.module.css';

function Missions() {
  const {
    missions, isLoading, error, isLoaded,
  } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchMissions());
    }
  }, [dispatch, isLoaded]);

  const handleReserve = (id) => {
    dispatch(reserveMission(id));
  };

  const handleCancelation = (id) => {
    dispatch(cancelMissions(id));
  };

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h1 className={styles.missions}>Mission</h1>
          </td>
          <td>
            <h1 className={styles.description}>Description</h1>
          </td>
          <td>
            <h1 className={styles.status}>Status</h1>
          </td>
          <td>
            <h1 className={styles.status}> </h1>
          </td>

        </tr>
        {isLoading && <tr><td><p>Loading...</p></td></tr>}
        {error && <p>{error}</p>}
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>
              <h1 className={styles.missions}>{mission.mission_name}</h1>
            </td>
            <td>
              <p className={styles.description_p}>{mission.description}</p>
            </td>
            <td>
              <div className={styles.members}>
                <h2 className={`${styles.labelmembers} ${!mission.reserved && styles.labelmembersyes}`}> </h2>
              </div>
            </td>
            <td>
              <div className={styles.members}>

                {!mission.reserved && (
                <button
                  onClick={() => handleReserve(mission.mission_id)}
                  className={styles.joinmission}
                  type="button"
                >
                  Join Mission
                </button>
                )}

                {mission.reserved && (
                <button
                  onClick={() => handleCancelation(mission.mission_id)}
                  className={styles.cancelButton}
                  type="button"
                >
                  Leave Mission
                </button>
                )}

              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Missions;
