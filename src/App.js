import React, { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import InstrumentsTable from './components/InstrumentsTable';
import 'remixicon/fonts/remixicon.css'
import { dropdownOptions } from './utils/helper';

function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <div>
      <h2 className='heading'>Financial instruments</h2>
      <div className='dropdown-wrapper'>
        <h4>Sort By</h4>
        <Dropdown
          placeHolder="Select Asset Class"
          options={dropdownOptions}
          onChange={(value) => setSelectedValue(value)}
        />
      </div>
      <div style={{ display: 'grid' }}>
        <InstrumentsTable selectedValue={selectedValue} />
      </div>
    </div>
  );
}


export default App;
