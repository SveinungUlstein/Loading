// Import React and the necessary CSS for styling
import React from 'react';
import '../../../styles/ScorePageStyles/chart.css';

// Chart component definition
const Chart = ({ data }) => {
  return (
    <div className="chart-container">
      {data.map((item, index) => (

        // Create a chart bar for each data item
        <div key={index} className="chart-bar">
          <div
            className="chart-value"
            style={{
              height: `${item.percentage * 0.5}vh`, 
            }}
          >
            {item.label} 
          </div>
          <div className="chart-label">{item.choiceTxt}</div> 
        </div>
      ))}
    </div>
  );
};

export default Chart; // Export the component to be used in other parts of the app
