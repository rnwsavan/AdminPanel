import { getdoctorData } from "../../common/apis/doctor.api";
import { BASE_URL } from "../../Urls/base_url"
import * as ActionType from '../Action/Action_Type'

export const getDoctor = () => (dispatch) => {

  try {
    dispatch(loadingDoctor());
    // setTimeout(function () {
    //   return fetch(BASE_URL + 'doctors')
    //     .then(response => {
    //       if (response.ok) {
    //         return response;
    //       } else {
    //         var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //         error.response = response;
    //         throw error;
    //       }
    //     },
    //       error => {
    //         var errmess = new Error(error.message);
    //         throw errmess;
    //       })
    //     .then(response => response.json())
    //     .then(doctors => dispatch(({ type: ActionType.GET_DOCTORS, payload: doctors })))
    //     .catch(error => dispatch(errorDoctor(error.message)))
    // }, 2000)
    getdoctorData()
    .then((data) => dispatch(({ type: ActionType.GET_DOCTORS, payload: data.data })));
    

  }
  catch (error) {
    // console.log(error);
    dispatch(errorDoctor(error))
  }
}

export const loadingDoctor = () => (dispatch) => {
  dispatch({ type: ActionType.LOADING_DOCTOR })
}

export const errorDoctor = (error) => (dispatch) => {
  dispatch({ type: ActionType.ERROR_DOCTOR, payload: error })
}

export const addDoctorData = (data) => (dispatch) => {
  try {
    dispatch(loadingDoctor());

    setTimeout(function () {
      return fetch(BASE_URL + 'doctors', {
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
        .then(adddoctor => dispatch(({ type: ActionType.ADD_DOCTOR, payload: adddoctor })))
        .catch(error => dispatch(errorDoctor(error.message)))
    }, 2000);

  }
  catch (error) {
    dispatch(errorDoctor(error))
  }
}

export const deleteDoctor = (id) => (dispatch) => {
  try {
    return fetch(BASE_URL + 'doctors/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
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
      .then(deletedoctor => dispatch(({ type: ActionType.DELETE_DOCTOR, payload: id })))
      .catch(error => dispatch(errorDoctor(error.message)))
  }
  catch (error) {
    dispatch(errorDoctor(error))
  }
}

export const upadateDoctor = (data) => (dispatch) => {
  try {
    return fetch(BASE_URL + 'doctors/' + data.id, {
      method: 'PUT',
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
      .then(doctor => dispatch(({ type: ActionType.UPDATE_DOCTOR, payload: doctor })))
      .catch(error => dispatch(errorDoctor(error.message)))
  }
  catch (error) {
    dispatch(errorDoctor(error))
  }
}
