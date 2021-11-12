import axios from 'axios'

//ACTION TYPES

const SET_RESULTS = 'SET_RESULTS'


//ACTION CREATORS

export const updateStudent = (restaurants) => {
  return {
    type: SET_RESULTS,
    restaurants
  }
}

//THUNK CREATORS

export const fetchStudents = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/restaurants', )
      dispatch((data))
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
