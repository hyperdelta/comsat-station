import React from 'react';

import MapGL from 'react-map-gl';
import DeckGL, {LineLayer} from 'deck.gl';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZ2V1bmhvIiwiYSI6ImNqMjFnNGhxdjAwMGczNG11aWV4eHlyeTAifQ.FGLCPrGrPIixpDu2tF1NyA';

const viewport = {
  width: 500,
  height: 500,
  longitude: -100,
  latitude: 40.7,
  zoom: 3,
  pitch: 0,
  bearing: 0
}

// Data to be used by the LineLayer
const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];


export default function PanelA(props) {
  return (
    <div className="card">
      <div className="card-header">
        Header
      </div>
      <div className="card-block">
        <MapGL {...viewport} mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}>
          <DeckGL {...viewport} layers={[
            new LineLayer({id: 'line-layer', data})
          ]} />
        </MapGL>
      </div>
      <div className="card-footer">
        Footer
      </div>
    </div>
  )
}