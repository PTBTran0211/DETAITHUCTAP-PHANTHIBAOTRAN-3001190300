import { SHOW_ALL_HOTELS, SHOW_HOTEL, SHOW_FILTER, SEARCH_HOTEL } from './types'
import axios from 'axios'


export const showAllHotels = () => async dispatch => {  //RETRIEVE
    
    const result = await axios.get('http://localhost:3000/hotels')


    dispatch({
        type: SHOW_ALL_HOTELS,
        payload: result.data
    })
}

export const showHotel = id => async dispatch => {  //RETRIEVE ONE
    if(typeof(id) !== 'string') throw TypeError('id is not an number')
    
    const result = await axios.get(`http://localhost:3000/hotels/${id}`)

    dispatch({
        type: SHOW_HOTEL,
        payload: result.data
    })
}

export const showFilter = () => async dispatch => {  //RETRIEVE ONE
    
    const result = await axios.get(`http://localhost:3000/filters`)

    dispatch({
        type: SHOW_FILTER,
        payload: result.data
    })
}
export const searchHotel = query => async dispatch => {  //CREATE MORE

    //post method: url and the STUDENT's data we want to add to DB:
    const result = await axios.get('http://localhost:3000/hotels',{
        params: {
          q: query
        }
      })

    dispatch({
        type: SEARCH_HOTEL,
        payload: result.data
    })
}