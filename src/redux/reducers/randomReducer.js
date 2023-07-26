import {  GET_RANDOM_ACTION} from "../actions/types"

const initialState = {
    data: [],
}

const randomReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RANDOM_ACTION:
            return { ...state, data: action.payload }
        default:
            return state
    }
}
export default randomReducer
