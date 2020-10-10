import React from 'react';
import List from './List';

// Data which copied from URL where i wasn't able to get from fetch because of CORS Problem
import data from './data';

function App() {

  return (
    <div className="App">
      <List data={data} />
    </div>
  );
}

export default App;
