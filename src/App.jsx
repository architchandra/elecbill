import React from 'react';
import BillDetails from './components/BillDetails';
import SplitConfig from './components/SplitConfig';
import Result from './components/Result';



const App = () => (
  <div>
    <h1>
      Electricity Bill Splitter
    </h1>
    <BillDetails amount={100} />
    <SplitConfig peopleCount={4} />
    <Result amount={100} peopleCount={4} />
  </div>
);
export default App;
