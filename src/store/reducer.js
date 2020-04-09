import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from '../components/Header/store';
import { reducer as loginReducer } from '../pages/login/store';

const reducer = combineReducers({
  header: headerReducer,
  login: loginReducer
})

export default reducer;