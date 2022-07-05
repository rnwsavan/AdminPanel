import { BASE_URL } from "../../Urls/base_url"
import * as ActionType from '../Action/Action_Type'

export const GetMedicine = () => (dispatch) => {
    try{
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
         }
    
    catch(error){
        console.log(error);
    }
}