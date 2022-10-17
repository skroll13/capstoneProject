import './actionTypes';
import axios from 'axios';
import { actionTypes } from './actionTypes';

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
  
export const register = (formData, cb) => async dispatch => {
  try {
    //api call to our backend
    let response = await axios.post('/api/v1/users/register', formData)
    let jwt = response.data.token 
    console.log("data retrieved from the server")
    
    //take response from api call, store token in global storage
    dispatch({
      type: actionTypes.LOAD_USER_TOKEN,
      data: jwt
    })

    //store token in local storage
    localStorage.setItem('token', jwt)

    cb()
  } catch (err) {
    dispatch({
      type: actionTypes.ERROR,
      data: err
    })
  }
}
