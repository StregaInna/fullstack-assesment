import axios from 'axios'

//ACTION TYPES

const SET_RESULTS = 'SET_RESULTS'


//ACTION CREATORS

export const setRestaurants = (restaurants) => {
  return {
    type: SET_RESULTS,
    restaurants
  }
}

//THUNK CREATORS

export const fetchRestaurants = (specs, numberOfResults) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/restaurants', specs, numberOfResults)
      dispatch(setRestaurants(data))
    }
    catch (error){
      console.error(error)
    }
  }
}

// REDUCER
export default function Reducer(state = {}, action) {
  switch (action.type) {
    case SET_RESULTS:
      return {...state, restaurants: action.restaurants}
    default:
      return state
  }
}
