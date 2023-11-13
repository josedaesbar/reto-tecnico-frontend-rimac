import axios from 'axios'
import {UserGetDataType} from '../../models/user.model'
import {ErrorResponseType, ResponseRequest} from '../../models/app.model'

export const getUserData = async (): Promise<ResponseRequest<UserGetDataType>> => {
  try {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users/1', {})

    return {
      payload: data.data,
    }
  } catch (error) {
    const errorData = error as ErrorResponseType
    return errorData
  }
}
