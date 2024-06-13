// Import React and the necessary CSS for styling
import React from 'react';
import '../../../styles/ScorePageStyles/chart.css';

// ChartItem component definition
const ChartItem = ({ percentage, label, image }) => {
  return (
    <div className="chart-item flex flex-col items-center">

      <div className="chart-bar bg-mustard mb-2" style={{ height: `${percentage}%` }}>
        <div className="chart-percentage text-center">{label}</div> 
      </div>
     
      <img src={image} alt={label} className="chart-image mt-2" />
    </div>
  );
};

export default ChartItem; // Export the component to be used in other parts of the app
