import {combineReducers} from 'redux'
import {itemReducer, selectedItemReducer} from './itemReducer'
import {favoritesIdReducer} from './favoriteIdReducer'

const reducers = combineReducers({
    allItems: itemReducer,
    item: selectedItemReducer,
    allFavoritesId: favoritesIdReducer
})

export default reducers