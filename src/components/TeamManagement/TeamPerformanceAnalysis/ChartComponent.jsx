import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = ({ data, options, title }) => {
  return (
    <div className="chart-container">
      <div className="chart-item">
        <h3 className="text-center font-semibold text-xl mb-4">{title}</h3>
        <Line data={data} options={options} />
      </div>


    </div>
  );
};

export default ChartComponent;
