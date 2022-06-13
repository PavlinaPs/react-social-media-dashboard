import React from 'react';
import Heading from './Heading';
import Dashboard from './Dashboard';
import Today from './Today';

const Main = ({ lightModeOn, setLightModeOn, handleChangeTheme }) => {
  return (
    <main>
        <Heading 
          lightModeOn={lightModeOn}
          setLightModeOn={setLightModeOn}
          handleChangeTheme={handleChangeTheme}
        />
        <Dashboard />
        <Today />
    </main>
  )
}

export default Main