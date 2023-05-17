import React from 'react'
import { setRowColour } from '../utils/helper';
const InstrumentsRow = ({ data }) => {


  return (
    <>
      {data.map((row, index) => {
        const { ticker, assetClass, price } = row;

        return (
          <tr className={setRowColour(assetClass)} key={index}>
            <td>{ticker}</td>
            <td>{assetClass}</td>
            <td className={price < 0 ? "red" : ""}>{price}</td>
          </tr>
        )
      })}
    </>
  )
}

export default InstrumentsRow;