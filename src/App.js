import Attribution from "./components/Attribution";
import Main from "./components/Main";
import { useState, useEffect } from "react";

function App() {
  const [ lightModeOn, setLightModeOn ] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("lightTheme");
  }, [lightModeOn])
  
  function handleChangeTheme() {
    setLightModeOn(!lightModeOn);
  }

  return (
    //<div className={lightModeOn ? "App lightTheme" : "App"}>
    <div className="App">
      <Main 
        lightModeOn={lightModeOn}
        setLightModeOn={setLightModeOn}
        handleChangeTheme={handleChangeTheme}
      />
      <Attribution />
    </div>
  );
}

export default App;
