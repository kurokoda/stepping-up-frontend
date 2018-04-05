import React from 'react';
import {VictoryArea, VictoryStack} from 'victory';

const StackChart = (props) => {

  return (
    <VictoryStack
      colorScale={props.theme}
    >
      <VictoryArea
        data={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}]}
      />
      <VictoryArea
        data={[{x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}]}
      />
      <VictoryArea
        data={[{x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}]}
      />
    </VictoryStack>
  )
};

StackChart.propTypes = {};

StackChart.defaultProps = {};

export default StackChart;

