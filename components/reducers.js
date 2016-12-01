// import { handleActions } from 'redux-actions'
// import { INCREMENT, DECREMENT, ADD_NEW_COUNTER } from './constants'




import * as types from './actionTypes'

var initialState = {
  userdata: {
    userId: '',
    name: '',
    followers: '',
    repositories: '',
    location: '',
    found: 0,
    url: '',
    projects: {}
  },
  currentRepo: ''
}

export default function gitBookReducer (state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_USER:
      var url = `https://api.github.com/users/${action.user}`
      var text = fetch(url).then((res)=> res.json()).then((data) => {
        console.log(data)
        var nextState = state.userdata
        nextState.userId = data.login
        nextState.name = data.name
        nextState.followers = data.followers
        nextState.repositories = data.repos_url
        nextState.location = data.location
        nextState.url = data.html_url
        nextState.found = 1
        fetch(nextState.repositories).then((res) => res.json()).then((data) => {
          console.log(data)
        for (var i = 0; i < data.length; i++) {console.log(data[i].name)
        nextState.projects[i] = data[i].name
        }
        })
         return {...state.userdata,nextState}
      }).then((data)=>  {
        console.log(data,state)
        return {data}
        }).catch((err) => {
        console.log('oh no!',err)
        return {
          ...state, found: 2
        }
      })
      
    case types.FETCH_DATA:
      return {
        ...state
      };
    default:
      return state;
  }
}