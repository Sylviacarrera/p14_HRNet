import { configureStore } from '@reduxjs/toolkit';
// Importe ici les slices que tu ajouteras plus tard
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    // Ajoute les reducers ici
    user: userReducer,
  },
});
