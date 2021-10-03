import { createStore, combineReducers } from '@reduxjs/toolkit';
import billsReducer from '../reducers/billsReducer';
import peopleReducer from '../reducers/peopleReducer';



const store = createStore(combineReducers({
  bills: billsReducer,
  people: peopleReducer,
}));
export default store;
