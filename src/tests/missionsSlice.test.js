import missionsSlice, { fetchMissions } from '../redux/missions/missionsSlice';

test('reducers', () => {
  let state = null;
  state = missionsSlice(undefined, fetchMissions.pending());
  expect(state.isLoading).toBe(true);
});
