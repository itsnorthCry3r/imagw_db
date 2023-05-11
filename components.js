const path = require('path');

module.exports = () => {

    app.get('/image/:file', (req, res) => {
        const file = req.params['file']

        console.log(files)

        if (file < files.length + 1  && file > 0 && !isNaN(file)) {
            res.sendFile(path.join(__dirname, '/images/files/' + files[file - 1]))
        } else {
            res.sendFile(path.join(__dirname, '/404.jpg'))
        }
    })

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'))
    })
    
}