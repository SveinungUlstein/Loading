import React from 'react';
import ChartItem from './ChartItem';
import '../../../styles/chart.css';

const Chart = ({ data, images }) => {
  return (
    <div className="chart flex justify-around items-end w-full">
      {data.map((item, index) => (
        <ChartItem key={index} percentage={item.percentage} label={item.label} image={images[index]} />
      ))}
    </div>
  );
};

export default Chart;
