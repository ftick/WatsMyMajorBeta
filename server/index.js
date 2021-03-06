const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Connect all our routes to our application
app.use('/', routes);

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
