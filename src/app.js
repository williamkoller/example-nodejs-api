const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

app.get('/', (_, response) => {
  response.send('Hello World!');
});

app.get('/name', (_, response) => {
  response.send({ name: 'William'});
});

app.listen(port, () => { console.log('Our App Is Up and running!') });

module.exports = app;