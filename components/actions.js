import * as types from './actionTypes'

export const searchUser = (user) => {
  return {
    type: types.SEARCH_USER,
    user
  }
}

export const fetchData = () => {
  return {
    type: types.FETCH_DATA
  }
}