import {createAction, createAsyncThunk} from '@reduxjs/toolkit'

import {getUserData} from '../../core/api/user/getUserData'
import {UserEntity, UserGetDataType} from '../../core/models/user.model'
import {ResponseRequest} from '../../core/models/app.model'

export const A_SET_USER = createAction<UserEntity>('abilities/reset-loader')

export const A_GET_USER_DATA = createAsyncThunk<ResponseRequest<UserGetDataType>>(
  'user/get-data',
  async () => {
    const response = await getUserData()

    return response
  }
)
