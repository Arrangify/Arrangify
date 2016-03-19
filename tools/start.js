/**
 * React Starter Kit (http://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2015 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import webpack from 'webpack';
import path from 'path';
import run from './run';

global.WATCH = true;
const webpackConfig = require('./webpack/prod.config')[0]; // Client-side bundle configuration
const bundler = webpack(webpackConfig);

var WebPackDevServer = require('webpack-dev-server');

/**
 * Launches a development web server with "live reload" functionality -
 * synchronizing URLs, interactions and code changes across multiple devices.
 */
async function start() {
  await run(require('./build'));
  await run(require('./serve'));

  // new WebPackDevServer((webpack(webpackConfig)), {
  //   contentBase: "build/public",
  //   publicPath: webpackConfig.output.publicPath,
  //   hot: true,
  //   historyApiFallback: true
  // }).listen(8080, 'localhost');
}

export default start;
