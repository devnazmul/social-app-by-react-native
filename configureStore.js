import { combineReducers, createStore } from 'redux';
import jwtReducer from './stateManagement/reducers/jwtReducer';

const rootReducer = combineReducers(
    { jwt: jwtReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;