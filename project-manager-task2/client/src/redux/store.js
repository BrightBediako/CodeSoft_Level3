import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import projectReducer from './projectSlice';
import taskReducer from './taskSlice';

export const store = configureStore({
    reducer: { auth: authReducer, task: taskReducer, project: projectReducer },
});
