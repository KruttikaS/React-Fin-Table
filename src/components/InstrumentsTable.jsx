import React, { useEffect, useState } from 'react'
import { apiData } from '../utils/apiData';
import InstrumentsRow from './InstrumentsRow';
import { sortData } from '../utils/helper';

const InstrumentsTable = ({ selectedValue }) => {
  const instrumentDataClone = [...apiData];
  const [sortedData, setSortedData] = useState(apiData);

  // To add sorted data
  useEffect(() => {
    if (selectedValue.value === 'assetClass') {
      setSortedData(sortData(instrumentDataClone, 'assetSort'));
    } else if (selectedValue.value === 'ticker') {
      setSortedData(sortData(instrumentDataClone, "alphabeticalSort"));
    } else if (selectedValue.value === 'price') {
      setSortedData(sortData(instrumentDataClone, "numericalSort"));
    } else {
      setSortedData(apiData);
    }
  }, [selectedValue])

  return (
    <div className='tableContainer'>
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Asset Class</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <InstrumentsRow data={sortedData} />
        </tbody>
      </table>
    </div>
  )
}

export default InstrumentsTable