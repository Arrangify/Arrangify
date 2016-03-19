import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from './routes';
import stats from './public/stats.json';

var server = express();

server.use(express.static('build/public'));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
server.get('*', function(req, res) {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      let content = renderToString(<RoutingContext {...renderProps} />);

      //const config = require("../tools/webpack/prod.config")[1];
      //const stats = require("public/stats.json");

      //console.log(stats);

      let statsjson = JSON.stringify(stats);
      let html = (
        `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <title></title>
            <link rel="stylesheet" type="text/css" href="${stats.css}" />
          </head>
          <body>
            <div id="container">
              ${content}
            </div>
            <script src="${stats.main}"></script>
          </body>
        </html>`
      );

      res.status(200).send(html);
    } else {
      res.status(404).send('Not found');
    }
  });
});

server.listen(3000, () => {
   console.log("The server is running at http://localhost:3000");
});
