// import { handleActions } from 'redux-actions'
// import { INCREMENT, DECREMENT, ADD_NEW_COUNTER } from './constants'




import * as types from './actionTypes'


export function userData (state = false, action) {
  switch (action.type) {
    case types.USER_FOUND:
      return action.userData
    default:
      return state
  }
}

export function isLoaded (state = false, action) {
  switch (action.type) {
    case types.IS_LOADED:
      return action.status
    default:
      return state
  }
}

// export default function userData (state = initialState, action) {
//   switch (action.type) {

//     case types.USER_FOUND:
//       var nextState = state.userdata
//       nextState.userId = action.userData.login
//       nextState.name = action.userData.name
//       nextState.followers = action.userData.followers
//       nextState.repositories = action.userData.repos_url
//       nextState.location = action.userData.location
//       nextState.url = action.userData.html_url
//       fetch(nextState.repositories).then((res) => res.json()).then((data) => {
//           console.log(data)
//         for (var i = 0; i < data.length; i++) {console.log(data[i].name)
//         nextState.projects[i] = data[i].name
//         }
//         })
//       nextState.found = 1
//       return {
//         ...state.userdata, ...nextState
//       }

//       case types:IS_LOADED:
//         return true

//      default:
//       return state
//   }
// }


//  case types.SEARCH_USER:
//       var url = `https://api.github.com/users/${action.user}`
//       var text = fetch(url).then((res)=> res.json()).then((data) => {
//         console.log(data)
//         var nextState = state.userdata
//         nextState.userId = data.login
//         nextState.name = data.name
//         nextState.followers = data.followers
//         nextState.repositories = data.repos_url
//         nextState.location = data.location
//         nextState.url = data.html_url
//         nextState.found = 1
//         fetch(nextState.repositories).then((res) => res.json()).then((data) => {
//           console.log(data)
//         for (var i = 0; i < data.length; i++) {console.log(data[i].name)
//         nextState.projects[i] = data[i].name
//         }
//         })
//          return {...state.userdata,nextState}
//       }).then((data)=>  {
//         console.log(data,state)
//         return {data}
//         }).catch((err) => {
//         console.log('oh no!',err)
//         return {
//           ...state, found: 2
//         }
//       })