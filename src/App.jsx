import React from 'react';
import AddExpenseForm from './components/AddExpenseForm';
import BillDetails from './components/BillDetails';
import SplitConfig from './components/SplitConfig';
import Result from './components/Result';



const App = () => (
  <div>
    <h1>
      Electricity Bill Splitter
    </h1>
    <AddExpenseForm />
  </div>
);
export default App;
