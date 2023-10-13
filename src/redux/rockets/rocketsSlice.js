import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: false,
  error: '',
  isLoaded: false,
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://api.spacexdata.com/v4/rockets');
      const rockets = await response.json();
      console.log(rockets);
      return rockets;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocket = state.rockets.find((r) => r.id === action.payload);
      rocket.reserved = !rocket.reserved;
    },
    cancelRockets: (state, action) => {
      const id = action.payload;
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: false };
      });
      return {
        ...state,
        rockets: newState,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        isLoaded: true,
        rockets: action.payload,
      }))
      .addCase(fetchRockets.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const { reserveRocket, cancelRockets } = rocketsSlice.actions;

export default rocketsSlice.reducer;
