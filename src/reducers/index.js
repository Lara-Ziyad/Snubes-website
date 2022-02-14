import { combineReducers } from 'redux';
import customeraReducer from './formReducer'
import appReducer from './appReducer'
import alertReducer from './appReducer'
export default combineReducers({
    form: customeraReducer,
    appData: appReducer,
    alert: alertReducer
});
