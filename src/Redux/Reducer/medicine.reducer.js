import * as ActionType from '../Action/Action_Type'
const initialstate = {
    isLoading : false,
    medicines : [],
    error: ''
}




export const medicineReducer = (state=initialstate, action) => {
    console.log( action.payload);
    switch(action.type){

        case ActionType.LOADING_MEDICINE:
            return{
                ...state,
                isLoading: true,
                medicines: [],
                error: ''
            }
        
        case ActionType.GET_MEDICINES:
            return{
                ...state,
                isLoading: false,
                medicines: action.payload,
                error: ''
            }

            case ActionType.ERROR_MEDICINE:
            return{
                ...state,
                isLoading: false,
                medicines: [],
                error: action.payload
            }

        default : return state    

    }

}