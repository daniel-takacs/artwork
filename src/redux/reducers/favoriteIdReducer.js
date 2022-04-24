import { ActionTypes } from '../constants/action-types'

const initialState = {
    favoritesId: []
}
export const favoritesIdReducer = (state = initialState, action) => {
   switch (action.type) {
       case ActionTypes.SET_FAVORITES_ID:
           return {
               ...state,
               favoritesId: action.payload
           }
        case ActionTypes.DELETE_FAVORITES_ID:
            return {
                ...state,
                favoritesId: state.favoritesId.filter((id) => id !== action.payload)
            }
       default:
           return state
   } 
}