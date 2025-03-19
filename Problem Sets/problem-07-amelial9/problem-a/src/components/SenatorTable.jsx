import React from 'react'; //import React library

const EXAMPLE_SENATORS = [
  { id: 'C000127', name: 'Maria Cantwell', state: 'WA', party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */

import { TableHeader } from './TableHeader';
import { SenatorRow } from './SenatorRow';

export function SenatorTable({senatorsList}) {
  const columnNames = ['Name', 'State', 'Phone'];

  return (
    <table className="table table-bordered">
      <TableHeader columnNames={columnNames}/>
      <tbody>
        {senatorsList.map(senator => (
            <SenatorRow key={senator.id} senatorData={senator}/>
        ))}
      </tbody>
      {/* <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>State</th>
          <th>Party</th>
          <th>Phone</th>
          <th>Twitter</th>
        </tr>
      </thead>
      <tbody>
        {EXAMPLE_SENATORS.map(senator => (
          <tr key={senator.id}>
            <td>{senator.id}</td>
            <td>{senator.name}</td>
            <td>{senator.state}</td>
            <td>{senator.party}</td>
            <td>{senator.phone}</td>
            <td>{senator.twitter}</td>
          </tr>
        ))}
      </tbody> */}
  </table>
  );
}