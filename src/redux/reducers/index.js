import {combineReducers} from 'redux'
import {itemReducer, selectedItemReducer, favouriteReducer} from './itemReducer'

const reducers = combineReducers({
    allItems: itemReducer,
    item: selectedItemReducer,
    allFavourites: favouriteReducer
})

export default reducers