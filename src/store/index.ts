import { configureStore } from '@reduxjs/toolkit';
import trainers from './slices/trainersSlice';
import operators from './slices/operatorsSlice';
import scheldue from './slices/scheduleSlice';

const store = configureStore({
  reducer: {
    // persons,
    trainers,
    operators,
    scheldue
  },
  devTools: true
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
