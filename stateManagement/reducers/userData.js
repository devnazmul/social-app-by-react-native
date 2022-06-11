import { JWT_CHANGE } from '../constants';
const initialState = {
    jwt: ''
};
const jwtReducer = (state = initialState, action) => {
    switch (action.type) {
        case JWT_CHANGE:
            return {
                ...state,
                jwt: action.payload
            };
        default:
            return state;
    }
}
export default jwtReducer;