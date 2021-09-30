import { createStore, combineReducers } from '@reduxjs/toolkit';
import expensesReducer from '../reducers/expensesReducer';
import peopleReducer from '../reducers/peopleReducer';



const store = createStore(combineReducers({
  expenses: expensesReducer,
  people: peopleReducer,
}));
export default store;
