const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.get('/shopping', function (req, res) {
  res.send('shopping')
})
app.get('/success', function (req, res) {
    res.send('success')
  })
app.listen(process.env.PORT || 8080);
