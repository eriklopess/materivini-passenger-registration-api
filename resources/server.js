require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
const routes = require('./routes');

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewURlPArser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("DB: Connected");
  app.emit('DB_CONNECTED');
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes)

app.on('DB_CONNECTED', () => {
  app.listen(PORT, () => console.log('listening on port ' + PORT));
});
