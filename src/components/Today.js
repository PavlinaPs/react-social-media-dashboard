import React from 'react';
import dataToday from '../dataToday.json';
import TodayBlock from './TodayBlock';

const Today = () => {
  return (
    <div className="Today__container">
      <h2 className="Today__title">Overview - Today</h2>
      <div className='Today__blocks-container'>
        {dataToday.dataToday.map(item => (
          <TodayBlock
            key={item.id}
            description={item.description}
            icon={item.icon}
            social={item.social}
            followers={item.followers}
            percent={item.percent}
          />
        ))}
      </div>
    </div>
  )
}

export default Today