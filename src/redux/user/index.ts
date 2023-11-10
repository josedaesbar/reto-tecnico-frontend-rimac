import {createReducer} from '@reduxjs/toolkit'
import {A_GET_USER_DATA} from './actions'
import {UserStore} from '../../core/models/user.model'

const initialState: UserStore = {
  user: null,
  stateLoadingFetch: {
    getUserState: 'initialize',
  },
}

// Reducer

const reducer = createReducer(initialState, (builder) => {
  builder
    // ACTIONS
    // .addCase(A_SET_RESET_LOADER_GET_ABILITIES, (state, action) => {
    //   state.stateLoadingFetch.getData = 'initialize'
    // })

    // ACTIONS THUNKS
    .addCase(A_GET_USER_DATA.pending, (state, action) => {
      state.stateLoadingFetch.getUserState = 'loading'
    })
    .addCase(A_GET_USER_DATA.fulfilled, (state, action) => {
      state.user = {
        dni: '123',
        email: 'qwe@qwe',
        plate: '123123',
        name: action.payload.name,
        phone: action.payload.phone,
      }
    })
    .addCase(A_GET_USER_DATA.rejected, (state, action) => {
      console.log(state)
      state.stateLoadingFetch.getUserState = 'error'
    })
})

export default reducer
