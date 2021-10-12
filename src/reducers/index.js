import { combineReducers } from 'redux' //to put together reducers we'll use
import hotelReducer from './hotelsReducer'
import filterReducer from './filterReducer'


export default combineReducers({
    hotels: hotelReducer,
    filters: filterReducer
})  