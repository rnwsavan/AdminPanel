import * as ActionType from '../Action/Action_Type'
const initialstate = {
    isLoading : false,
    medicines : [],
    error: ''
}




export const medicineReducer = (state=initialstate, action) => {
    console.log(action.type, action.payload);
    switch(action.type){
        
        case ActionType.GET_MEDICINES:
            return{
                ...state,
                isLoading: false,
                medicines: action.payload,
                error: ''
            }

        default : return state    

    }

}