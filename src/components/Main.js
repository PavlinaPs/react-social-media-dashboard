import React from 'react';
import Heading from './Heading';
import Dashboard from './Dashboard';
import Today from './Today';

const Main = ({ lightModeOn, handleChangeTheme }) => {
  return (
    <main>
        <Heading 
          lightModeOn={lightModeOn}
          handleChangeTheme={handleChangeTheme}
        />
        <Dashboard />
        <Today />
    </main>
  )
}

export default Main