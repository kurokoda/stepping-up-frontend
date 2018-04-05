import React from 'react';
import {VictoryLabel, VictoryPie} from 'victory';

const PieChart = (props) => {

  return (
    <svg viewBox={`0 0 ${props.width} ${props.height}`}>
      <VictoryPie
        colorScale={props.theme}
        standalone={false}
        width={400} height={400}
        data={props.data}
        innerRadius={68} labelRadius={100}
        style={{labels: {fontSize: 20, fill: "white"}}}
      />
      <VictoryLabel
        textAnchor="middle"
        style={{fontSize: 20}}
        x={200} y={200}
        text="Pie!"
      />
    </svg>
  )
};

PieChart.propTypes = {};

PieChart.defaultProps = {};

export default PieChart;
