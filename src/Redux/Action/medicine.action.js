import { BASE_URL } from "../../Urls/base_url"
import * as ActionType from '../Action/Action_Type'

export const getMedicine = () => (dispatch) => {

  try {
    dispatch(loadingMedicine());
    setTimeout(function () {
      return fetch(BASE_URL + 'medicines')
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
          error => {
            var errmess = new Error(error.message);
            throw errmess;
          })
        .then(response => response.json())
        .then(medicines => dispatch(({ type: ActionType.GET_MEDICINES, payload: medicines })))
        .catch(error => dispatch(errorMedicine(error.message)))
    }, 2000)

  }
  catch (error) {
    // console.log(error);
    dispatch(errorMedicine(error))
  }
}

export const loadingMedicine = () => (dispatch) => {
  dispatch({ type: ActionType.LOADING_MEDICINE })
}

export const errorMedicine = (error) => (dispatch) => {
  dispatch({ type: ActionType.ERROR_MEDICINE, payload: error })
}

export const addMedicineData = (data) => (dispatch) => {
  try {
    dispatch(loadingMedicine());

    setTimeout(function () {
      return fetch(BASE_URL + 'medicines', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
          error => {
            var errmess = new Error(error.message);
            throw errmess;
          })
        .then(response => response.json())
        .then(addmedicine => dispatch(({ type: ActionType.ADD_MEDICINE, payload: addmedicine })))
        .catch(error => dispatch(errorMedicine(error.message)))
    }, 2000);

  }
  catch (error) {
    dispatch(errorMedicine(error))
  }
}
