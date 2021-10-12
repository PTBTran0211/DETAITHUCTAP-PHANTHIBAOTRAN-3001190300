import { SHOW_FILTER } from '../actions/types'


const initialState = {
    filters: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_FILTER:
            return {
                ...state,
                filters: action.payload 
            }

        default:
            return state
    }
}