import {createReducer} from '@reduxjs/toolkit'

import {UserCoveragesEntity} from '../../application/core/models/user-coverages.model'
import {A_ADD_COVERAGES, A_REMOVE_COVERAGES, A_SET_AMOUNT, A_SET_TOTAL_INSURED} from './actions'
import {BASE_AMOUNT, BASE_INSURED} from '../../application/utils/constants'

const initialState: UserCoveragesEntity = {
  coveragesSelected: [],
  amount: BASE_AMOUNT,
  totalInsured: BASE_INSURED,
}

// Reducer

const reducer = createReducer(initialState, (builder) => {
  builder
    // ACTIONS
    .addCase(A_ADD_COVERAGES, (state, action) => {
      const tempData = [...state.coveragesSelected]
      tempData.push(action.payload._id)

      state.coveragesSelected = tempData
      state.amount = state.amount + action.payload.cost
    })
    .addCase(A_REMOVE_COVERAGES, (state, action) => {
      const tempData = [...state.coveragesSelected].filter((v) => v !== action.payload._id)

      state.coveragesSelected = tempData
      state.amount = state.amount - action.payload.cost
    })
    .addCase(A_SET_AMOUNT, (state, action) => {
      state.amount = action.payload
    })
    .addCase(A_SET_TOTAL_INSURED, (state, action) => {
      state.totalInsured = action.payload
    })
})

export default reducer
