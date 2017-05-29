import React from 'react';

import { Chart } from 'react-google-charts';

////////////////////////////////////////////////////////////////////////////////
// SCATTER CHART
export default function PanelB(props) {
  return (
      <Chart
          chartType="ScatterChart"
          data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
          options={{}}
          graph_id="panelb"
          width="100%"
          height="400px"
          legend_toggle
      />
    )
}