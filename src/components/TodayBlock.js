import React from 'react';
import arrowUp from "../images/icon-up.svg";
import arrowDown from "../images/icon-down.svg";

const TodayBlock = ({ description, icon, social, followers, percent }) => {
  return (
    <div className='Today__block'>
        <div className='Today__block--container1'>
            <p className='Today__block--description'>{description}</p>
            <img 
                className="Today__block--social-icon" 
                src={require('../images' + icon)}
                alt={social}
            />
        </div>

        <div className='Today__block--container2'>
            <p className="Today__block--followers">
                    {Number(followers) < 9999 ? followers : Math.floor(Number(followers) / 1000) + "k"}
            </p>
            <div className="Today__block--percent-container">
                <img 
                    className="Today__block--arrow" 
                    src={Number(percent) >= 0 ? arrowUp : arrowDown}
                    alt={Number(percent) >= 0 ? "green arrow up" : "red arrow down"}
                />
                <p 
                    className="Today__block--percent"
                    style={Number(percent) >= 0 ? {color: "hsl(163, 72%, 41%)"} : {color: "hsl(356, 69%, 56%)"}}
                >{Math.abs(percent)}%</p>
            </div>
        </div>
    </div>
  )
}

export default TodayBlock