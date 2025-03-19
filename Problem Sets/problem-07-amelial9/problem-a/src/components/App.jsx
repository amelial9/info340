import React from 'react'; //import React library

/* Your code goes here */

import { SenatorTable } from './SenatorTable';

function App({senatorsList}) {
    return (
        <div className="container">
            <h1>US Senators (Aug 2024)</h1>
            <SenatorTable senatorsList={senatorsList}/>
        </div>
    );
}
  
export default App;