// Action Creators

// To avoid mistakes in the action types
// Import all the types that we will be using

import { SIGN_IN, SIGN_OUT } from './types'

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
}