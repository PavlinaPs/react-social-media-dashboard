import Attribution from "./components/Attribution";
import Main from "./components/Main";
import { useState, useEffect } from "react";

function App() {
  const getLightModeOn = () => {
    return JSON.parse(localStorage.getItem('lightModeOn')) || false;
  }
  
  const [ lightModeOn, setLightModeOn ] = useState(getLightModeOn());
  
  useEffect(() => {
    localStorage.setItem('lightModeOn', JSON.stringify(lightModeOn));
    lightModeOn ? document.body.classList.add("lightTheme") : document.body.classList.remove("lightTheme");
  }, [lightModeOn]);
  
  function handleChangeTheme() {
    setLightModeOn(!lightModeOn);
  }

  return (
    <div className="App">
      <Main 
        lightModeOn={lightModeOn}
        handleChangeTheme={handleChangeTheme}
      />
      <Attribution />
    </div>
  );
}

export default App;
