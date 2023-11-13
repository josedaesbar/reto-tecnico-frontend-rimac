import {createAction} from '@reduxjs/toolkit'
import {CoverageItemType} from '../../application/core/models/coverage.model'

export const A_ADD_COVERAGES = createAction<CoverageItemType>('user-coverages/add-coverages')
export const A_REMOVE_COVERAGES = createAction<CoverageItemType>('user-coverages/remove-coverages')

export const A_SET_AMOUNT = createAction<number>('user-coverages/set-amount')

export const A_SET_TOTAL_INSURED = createAction<number>('user-coverages/set-total-insured')
