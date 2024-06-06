import React from 'react';
import '../../../styles/ScorePageStyles/chart.css';

const Chart = ({ data }) => {
  return (
    <div className="chart-container">
      {data.map((item, index) => (
        <div key={index} className="chart-bar">
          <div
            className="chart-value"
            style={{
              height: `${item.percentage * 0.5}vh`, // Scale height based on percentage
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

export default Chart;
