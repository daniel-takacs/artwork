import {ActionTypes} from '../constants/action-types'

export const setItems = (items) => {
    return {
        type: ActionTypes.SET_ITEMS,
        payload: items,
    }
}

export const selectedItem = (item) => {
    return {
        type: ActionTypes.SELECTED_ITEM,
        payload: item,
    }
}

export const removeSelectedItem = (item) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_ITEM
    }
}

