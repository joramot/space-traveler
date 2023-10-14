import rocketsSlice, { fetchRockets } from '../redux/rockets/rocketsSlice';

test('reducers', () => {
  let state = null;
  state = rocketsSlice(undefined, fetchRockets.pending());
  expect(state.isLoading).toBe(true);
});
