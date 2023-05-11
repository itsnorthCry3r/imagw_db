const fs = require('fs');

const components = require('../components')

module.exports = () => {

    const path = __dirname + '/files'

    return fs.readdirSync(path).filter(function (file) {
        return file
    }).sort((a, b) => Number(a.replace(/\..+$/, '')) - Number(b.replace(/\..+$/, '')));

}
