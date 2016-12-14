import * as types from './actionTypes'

export const searchUser = (user) => {
  var projects = {}
  var url = `https://api.github.com/users/${user}`
  return (dispatch) => { 
    fetch(url).then((res) => {
      if (!res.ok) { throw Error(res.statusText) }
      return res.json()
    }).then((data) =>
     fetch(data.repos_url).then((res) => res.json()).then((list) => {
       for (var i = 0; i < list.length; i++) {
         console.log(list[i].name)
         projects[i] = list[i].name
       }
       data.projects = projects
       dispatch(userFound(data))
     }))
  .catch((err) => console.log(err))
    dispatch(isLoaded(true))
  }
}

export const userFound = (userData) => {
  console.log(userData)
  return {
    type: types.USER_FOUND,
    userData
  }
}

export const isLoaded = (status) => {
  return {
    type: types.IS_LOADED,
    status
  }
}
