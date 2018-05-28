const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const morgan = require('morgan');

app.disable('x-powered-by');

app.get('/', function(req, res, next) {
  res.send('Main route!')
});

app.get('/:id', function(req, res, next) {
  res.send(`Data request for ID: ${req.params.id}`)
});

app.post('/', function(req, res, next) {

});

app.patch('/', function(req, res, next) {

});

app.delete('/', function(req, res, next) {

});

app.use(function(req, res, next) {
  res.status(404).json({ message: '404 Not Found'})
})

app.use(function(err, req, res, next) {
  const status = res.status || 500
  res.status(status).json({error: err})
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`)
})
