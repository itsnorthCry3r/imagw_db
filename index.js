const express = require('express');

const images = require('./images')
const components = require('./components')

exports = port = 1234;
exports = app = express();

exports = files = images();

components()

app.listen(port, () => {
    console.log('listening on port ' + port)
})