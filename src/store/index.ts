import {configureStore} from '@reduxjs/toolkit';

import userSlice from './user/userSlice';
import {githubApi} from './services/githubApi';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer: {
        user: userSlice,
        [githubApi.reducerPath]: githubApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
