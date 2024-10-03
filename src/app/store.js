import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';  // Chemin à adapter si nécessaire

export const store = configureStore({
  reducer: {
    user: userReducer,  // Gère l'état de l'utilisateur (employé)
  },
});
