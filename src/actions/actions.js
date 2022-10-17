import './actionTypes'

export const addToFollowing = (podcastObj) => {
  console.log(podcastObj)
  return {
  type: "ADD_TO_FOLLOWING",
  data: podcastObj
  }
}

export const loginSuccess  = (second) => {} 

export const loginFailed = (second) => {}

export const fetchProfileFail = (second) => {}

export const fetchProfileSuccess = (second) => {}

export const logout = (second) => {}

export const registerSuccess = (second) => {}

export const registerFail = (second) => {}
  

