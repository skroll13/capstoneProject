import React from 'react'

const reducer = (state, action) => {

   if (state === undefined)  {
      state = {
         following: [],
         alreadyListened: [],
      }

   }return state
  
}

export default reducer