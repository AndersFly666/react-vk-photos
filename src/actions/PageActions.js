import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILED,
} from '../constants/Page'

const VK = window.VK

export function getPhotos(selectedYear) {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: selectedYear,
    })

    VK.api('photos.getAll', { count: 200, extended: 1, v: 5.85 }, r => {
      if (r.error) {
        dispatch({
          type: GET_PHOTOS_FAILED,
          payload: r.error.error_msg,
        })
      } else {
        console.log(r)
        const photos = getPhotosByYear(r.response.items, selectedYear)
        dispatch({
          type: GET_PHOTOS_SUCCESS,
          payload: photos,
        })
      }
    })
  }
}

function getPhotosByYear(photoObjects, selectedYear) {
  return photoObjects
    .filter(obj => {
      const createdYear = new Date(obj.date * 1000).getFullYear()
      return createdYear === selectedYear
    })
    .map(obj => {
      const url = obj.sizes[0].url
      return {
        url,
        likes: obj.likes.count,
        id: obj.id,
      }
    })
    .sort((a, b) => b.likes - a.likes)
}
