var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, ''),
  entry: {
    admin: './client/admin/admin'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    noParse: /node_modules\/mapbox-gl\/dist\/mapbox-gl.js/,
    preLoaders: [
      { test: /\.json$/, exclude: /node_modules/, loader: 'json'},
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query:
        {
          presets:['es2015','react', 'stage-1', 'stage-2']
        }
      },
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
    alias: {
      'crossfilter': 'crossfilter2',
      'mapbox-gl/js/geo/transform': path.join(__dirname, "/node_modules/mapbox-gl/js/geo/transform"),
      'mapbox-gl': path.join(__dirname, "/node_modules/mapbox-gl/dist/mapbox-gl.js")
    }
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    // 압축하는 겁니다.
    // new webpack.optimize.UglifyJsPlugin({minimize: true})
    // new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'})
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
};
