// import { handleActions } from 'redux-actions'
// import { INCREMENT, DECREMENT, ADD_NEW_COUNTER } from './constants'




import * as types from './actionTypes'

var initialState = {
  userId: 'temp',
  userdata: {
    name: '',
    followers: '',
    repositories: '',
    location: ''
  },
  currentRepo: ''
}

export default function reducers (state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_USER:
      var url = 'https://api.github.com/users/' + action.user
      var text = fetch(url).then((res)=>res.json()).then((data) => {
        var nextState = state
        nextState.name = data.name
        // var userdata = {}
        // userdata.name = data.name
        // userdata.followers = data.followers
        // userdata.repositories = data.repos_url
        // userdata.location = data.location
        // console.log(data,state)
        console.log(nextState)
        return {
          ...state,
          nextState
        }
      }).catch((err) => {
        console.log('oh no!',err)
        return {
          ...state
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