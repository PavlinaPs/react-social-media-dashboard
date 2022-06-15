import React from 'react';
import arrowUp from "../images/icon-up.svg";
import arrowDown from "../images/icon-down.svg";


const DashboardBlock = ({ border, icon, social, username, followers, description, today}) => {
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
                    alt={social} 
                />
                <p className="Dashboard__block--username">{username}</p>
            </div>

            <p className="Dashboard__block--followers">
                {Number(followers) < 9999 ? followers : Math.floor(Number(followers) / 1000) + "k"}
            </p>
            <p className="Dashboard__block--description">{description}</p>

            <div className="Dashboard__block--today-container">
                <img 
                    className="Dashboard__block--arrow" 
                    src={Number(today) >= 0 ? arrowUp : arrowDown}
                    alt={Number(today) >= 0 ? "green arrow up" : "red arrow down"}
                />
                <p 
                    className="Dashboard__block--today"
                    style={Number(today) >= 0 ? {color: "hsl(163, 72%, 41%)"} : {color: "hsl(356, 69%, 56%)"}}
                >{Math.abs(today)} Today</p>
            </div>     
        </div>
    </div>
  )
}

export default DashboardBlock