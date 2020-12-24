import React from 'react';
import Counter from './components/Counter';

const color = {
  red: 'red',
  green: 'green',
};
export const MyContext = React.createContext(color);

const App = () => {
  return <>
    <MyContext.Provider value={color}>
      <Counter/>
    </MyContext.Provider>
  </>;
};

export default App;