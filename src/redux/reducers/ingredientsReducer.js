
import { GET_INGREDIENTS,CLEAR_STATE } from "../actions/types"

const initialState = {
    data: {},
}

const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS:
            return { ...state, data: action.payload }
            case CLEAR_STATE:
                return{
                    ...state,data:{}
                }
        default:
            return state
    }
}
export default ingredientsReducer