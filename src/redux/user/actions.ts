import {createAction, createAsyncThunk} from '@reduxjs/toolkit'

import {getUserData} from '../../application/core/api/user/getUserData'
import {UserEntity, UserGetDataType} from '../../application/core/models/user.model'
import {ResponseRequest} from '../../application/core/models/app.model'

export const A_SET_USER = createAction<UserEntity | null>('user/set-data')

export const A_GET_USER_DATA = createAsyncThunk<ResponseRequest<UserGetDataType>>(
  'user/get-data',
  async () => {
    const response = await getUserData()

    return response
  }
)
