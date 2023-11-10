import axios from 'axios'

export const getUserData = async (): Promise<any> => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/1', {})

  return data
}
