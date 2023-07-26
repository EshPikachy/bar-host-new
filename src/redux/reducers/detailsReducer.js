import { DETAILS_COCKTAIL, CLEAR_STATE } from "../actions/types"

const initialState = {
    data: {},
}

const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DETAILS_COCKTAIL:
            return { ...state, data: action.payload }
        case CLEAR_STATE:
            return { ...state, data: {} }
        default:
            return state
    }
}
export default detailsReducer



