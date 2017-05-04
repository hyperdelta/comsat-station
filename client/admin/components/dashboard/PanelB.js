import React from 'react';

import { Chart } from 'react-google-charts';

////////////////////////////////////////////////////////////////////////////////
// SCATTER CHART
export default function PanelB(props) {
  return (
      <div className="card">
        <div className="card-header">
          Header
        </div>
        <div className="card-block">
          <Chart
            chartType="ScatterChart"
            data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
            options={{}}
            graph_id="panelb"
            width="100%"
            height="400px"
            legend_toggle
          />
        </div>
        <div className="card-footer">
          Footer
        </div>
      </div>
    )
}