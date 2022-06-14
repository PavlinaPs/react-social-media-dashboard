import React from 'react';
import dataAll from '../dataAll.json';
import DashboardBlock from './DashboardBlock';

const Dashboard = () => {
  return (
    <div className="Dashboard__container">
      {dataAll.dataAll.map(item => (
        <DashboardBlock 
          key={item.id} 
          border={item.border}           
          icon={item.icon}
          username={item.username}
          followers={item.followers}
          description={item.description}
          today={item.today}
        />
      ))}
    </div>
  )
}

export default Dashboard