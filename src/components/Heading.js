import React from 'react'

const Heading = ({ lightModeOn, setLightModeOn, handleChangeTheme }) => {

  return (
    <header className="Heading">
        <div className="heading__title-container">
            <h1 className="Heading__title">Social Media Dashboard</h1>
            <p className="Heading__text">Total Followers: 23,004</p>
        </div>
        <div className="Heading__toggle--container">
            <div 
                onClick={handleChangeTheme}
                className="Heading__toggle"
                aria-label="theme toggle"
            >
                <div className={lightModeOn 
                    ? "Heading__toggle--dot-right" 
                    : "Heading__toggle--dot-left"
                }>
                </div>
            </div>
            <div className="Heading__toggle--label">Dark Mode</div>
        </div>
    </header>
  )
}

export default Heading