import React from 'react';
import arrowUp from "../images/icon-up.svg";
import arrowDown from "../images/icon-down.svg";


const DashboardBlock = ({ border, icon, username, followers, today}) => {
  return (
    <div 
        className="Dashboard__block--border"
        style={{ background: border}}
    >
        <div className="Dashboard__block">
            <div className="Dashboard__block--social-container">
                <img 
                    className="Dashboard__block--social-icon" 
                    src={require('../images' + icon)} 
                    alt="facebook icon"  
                />
                <p className="Dashboard__block--username">{username}</p>
                <p className="Dashboard__block--followers">
                    {Number(followers) < 9999 ? followers : Math.floor(Number(followers) / 1000) + "k"}
                </p>
                <p className="Dashboard__block--description">followers</p>
                <div className="Dashboard__block--today-container">
                    <img 
                        className="Dashboard__block--arrow" 
                        src={Number(today) >= 0 ? arrowUp : arrowDown}
                        alt={Number(today) >= 0 ? "green arrow up" : "red arrow down"}
                    />
                    <p className="Dashboard__block--today">{today}</p>
                    <p className="Dashboard__block--today-description">Today</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default DashboardBlock