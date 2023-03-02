import { configureStore } from '@reduxjs/toolkit'
import styleMenuReducer from '../features/styleMenu/styleMenuSlice'
import styleDesignReducer from '../features/styleDesignSlice/styleDesignSlice'
import styleTextSlice from '../features/styleTextSlice/styleTextSlice'

export const store = configureStore({
  reducer: {
    styleMenu: styleMenuReducer,
    designMenu: styleDesignReducer,
    typoMenu: styleTextSlice
    
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch