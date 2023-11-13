import {configureStore} from '@reduxjs/toolkit'
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'

import userReducer from './user/index'
import userCoveragesReducer from './userCoverages/index'

export const store = configureStore({
  reducer: {
    user: userReducer,
    userCoverages: userCoveragesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
