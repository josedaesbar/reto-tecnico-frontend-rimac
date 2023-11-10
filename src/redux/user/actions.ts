import {createAsyncThunk} from '@reduxjs/toolkit'

import {getUserData} from '../../core/api/user/getUserData'
import {UserGetDataType} from '../../core/models/user.model'

// export const A_SET_RESET_LOADER_GET_ABILITIES = createAction('abilities/reset-loader')

export const A_GET_USER_DATA = createAsyncThunk<UserGetDataType>('user/get-data', async () => {
  const response = await getUserData()

  return response
})
