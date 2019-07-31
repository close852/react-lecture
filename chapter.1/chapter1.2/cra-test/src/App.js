import React from 'react';
import TodoList from './TodoList';
import './App.css'
function App() {
  const value = '123'.padStart(5,'0');//00123

  /*
    [process.env.NODE_ENV]

    npm start : development
    npm test : test
    npm run build : production
  */
  console.log(`NODE_ENV= ${process.env.NODE_ENV}`,`${process.env.REACT_APP_DATA_API}`)
  return (
    <div className="App flexExample" >
    {/* autoprefier 왜 안되냐... */}
      <TodoList/>
      {value}
    </div>
  );
}

export default App;
