import UsersReducer from './users.reducer';
import FoodsReducer from './foods.reducer';


// Gap noi, ket noi cac Reducer lai voi nhau
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  users: UsersReducer,
  foods: FoodsReducer,
});

export default allReducers;
