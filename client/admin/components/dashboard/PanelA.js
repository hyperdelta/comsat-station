import React, { Component } from 'react'

import MapGL from 'react-map-gl';
import DeckGL, {LineLayer, GridLayer, ScatterplotLayer} from 'deck.gl';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZ2V1bmhvIiwiYSI6ImNqMjFnNGhxdjAwMGczNG11aWV4eHlyeTAifQ.FGLCPrGrPIixpDu2tF1NyA';

let initialViewport = {
  width: 400,
  height: 400,
  longitude: 127.024612,
  latitude: 37.532600,
  zoom: 6,
  pitch: 0,
  bearing: 0
};

const sampleData = [
    {"ADDRESS":"939 ELLIS ST","RACKS":2,"SPACES":4,"COORDINATES":[127.024612,37.532600]},
    {"ADDRESS":"1380 HOWARD ST","RACKS":1,"SPACES":2,"COORDINATES":[-122.414411,37.774458]},
    {"ADDRESS":"1195 OAK ST","RACKS":1,"SPACES":2,"COORDINATES":[-122.438887,37.772737]},
    {"ADDRESS":"1387 VALENCIA ST","RACKS":1,"SPACES":2,"COORDINATES":[-122.42019976,37.75087429]},
    {"ADDRESS":"180 TOWNSEND ST","RACKS":1,"SPACES":2,"COORDINATES":[-122.392606,37.779369]},
    {"ADDRESS":"247 FILLMORE ST","RACKS":1,"SPACES":2,"COORDINATES":[-122.43065953,37.77185018]},
    {"ADDRESS":"247 FILLMORE ST","RACKS":1,"SPACES":2,"COORDINATES":[-122.43065953,37.77185018]},
    {"ADDRESS":"2690 MISSION ST","RACKS":2,"SPACES":4,"COORDINATES":[-122.418974,37.754029]},
    {"ADDRESS":"400 MCALLISTER ST","RACKS":7,"SPACES":14,"COORDINATES":[-122.419014,37.780519]},
    {"ADDRESS":"680 08TH ST","RACKS":1,"SPACES":2,"COORDINATES":[-122.404719,37.770128]},
    {"ADDRESS":"101 TOWNSEND ST","RACKS":1,"SPACES":2,"COORDINATES":[-122.390466,37.780226]},
    {"ADDRESS":"1186 FOLSOM ST","RACKS":1,"SPACES":2,"COORDINATES":[-122.409866,37.77547]},
    {"ADDRESS":"1301 SANSOME ST","RACKS":1,"SPACES":2,"COORDINATES":[-122.403298,37.802327]},
    {"ADDRESS":"1304 VALENCIA ST","RACKS":1,"SPACES":2,"COORDINATES":[-122.420935,37.751851]},
    {"ADDRESS":"1380 VALENCIA ST","RACKS":1,"SPACES":2,"COORDINATES":[-122.420834,37.750802]},
    {"ADDRESS":"1601 HOWARD ST","RACKS":2,"SPACES":4,"COORDINATES":[-122.416789,37.771394]},
    {"ADDRESS":"1700 FILBERT ST","RACKS":1,"SPACES":2,"COORDINATES":[-122.427674,37.799281]},
];




// Data to be used by the LineLayer
const data = [
  {sourcePosition: [127.024612, 37.532600], targetPosition: [139.753372, 35.685360]}
];

const scatteredData = [
    {position: [127.024612, 37.532600], radius: 5, color: [255, 0, 0]}
];

const initialLayers = [
    // new GridLayer({
    //     id: 'grid-layer',
    //     sampleData,
    //     cellSize: 500
    // }),
    // new LineLayer({id: 'line-layer', data}),
    new ScatterplotLayer({
        id: 'scatterplot-layer',
        scatteredData,
        radiusScale: 100,
        outline: false
    })
];

class PanelA extends Component {
    constructor(props) {
        super(props);
        this.state={
            'layers': initialLayers,
            'viewport': initialViewport
        };
    }

    render() {

        let {viewport, layers} = this.state;

        return (
            <div className="card">
                <div className="card-header">
                    Header
                </div>
                <div className="card-block">
                    <MapGL {...viewport}
                           onChangeViewport={viewport => this.setState({viewport})}
                           mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}>
                        <DeckGL {...viewport} layers={layers} />
                    </MapGL>
                </div>
                <div className="card-footer">
                    Footer
                </div>
            </div>
        )
    }
}


export default PanelA;