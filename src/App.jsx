import React from 'react';
import AddBillForm from './components/AddBillForm';
import BillDetails from './components/BillDetails';
import SplitConfig from './components/SplitConfig';
import Result from './components/Result';



const App = () => (
  <div>
    <h1>
      Electricity Bill Splitter
    </h1>
    <AddBillForm />
  </div>
);
export default App;
