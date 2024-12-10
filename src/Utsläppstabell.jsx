import React from 'react';
import emissionsData from './data/CO2_emissions.json';

const Utsläppstabell = () => {
   
    return (
      <div>
        <h2>Globala CO2 Utsläpp</h2>
        <table border="1">
          <thead>
            <tr>
              <th>År</th>
              <th>Totalt</th>
              <th>Cement</th>
              <th>Gas Fackling</th>
              <th>Gas Bränsle</th>
              <th>Flytande Bränsle</th>
              <th>Fast Bränsle</th>
              <th>Per Capita</th>
            </tr>
          </thead>
          <tbody>
            {emissionsData.slice(0, 10).map((item, index) => (
              <tr key={index}>
                <td>{item.Year}</td>
                <td>{item.Total}</td>
                <td>{item.Cement}</td>
                <td>{item["Gas Flaring"]}</td>
                <td>{item["Gas Fuel"]}</td>
                <td>{item["Liquid Fuel"]}</td>
                <td>{item["Solid Fuel"]}</td>
                <td>{item["Per Capita"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Utsläppstabell;
  