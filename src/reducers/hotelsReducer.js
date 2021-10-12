import { SHOW_ALL_HOTELS, SHOW_HOTEL, SEARCH_HOTEL } from '../actions/types'


const initialState = {
    hotels: [],
    hotel:[{
        "id": 0, 
        "name": "", 
        "img":"",
        "rate": 0,
        "recommended":0,
        "address":"",
        "option":[""],
        "price":0,
        "premium":"",
        "policy":[{
            "title":"",
            "body":[""]
        }]
    }]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_ALL_HOTELS:
            return {
                ...state,
                hotels: action.payload 
            }

        case SHOW_HOTEL:
            return {
                ...state,
                hotel: action.payload
            }
        case SEARCH_HOTEL:
            return {
                ...state,
                hotels: action.payload 
            }
        

        default:
            return state
    }
}