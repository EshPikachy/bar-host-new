import { GET_BY_ALPHABET_ACTION} from "../actions/types"

const initialState = {
    data: [],
}

const alphabetReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BY_ALPHABET_ACTION:
            return { ...state, data: action.payload }
        default:
            return state
    }
}
export default alphabetReducer
