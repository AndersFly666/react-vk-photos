import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILED,
} from '../constants/Page'

const initialState = {
  year: 2018,
  photos: [],
  isFetching: false,
  error: null,
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload, isFetching: true, error: null }
    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, isFetching: false }
    case GET_PHOTOS_FAILED:
      return { ...state, error: action.payload, isFetching: false }
    default:
      return state
  }
}
