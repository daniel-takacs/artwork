import {ActionTypes} from '../constants/action-types'

export const setFavoritesId = (favoritesId) => {
    return {
        type: ActionTypes.SET_FAVORITES_ID,
        payload: favoritesId
    }
}

export const deleteFavoritesId = (id) => {
    return {
        type: ActionTypes.DELETE_FAVORITES_ID,
        payload: id
    }
}