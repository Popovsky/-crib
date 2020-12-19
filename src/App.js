import React from 'react';
import RenderProps from './components/RenderProps';
import Summa from './components/Summa';
import Vicht from './components/Vicht';

const App = () => {

  return (
    <>
      <RenderProps render={data => <Summa sum={data}/>}/>
      <RenderProps render={data => <Vicht vic={data}/>}/>
    </>
  );
};

export default App;