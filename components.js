const express = require('express');

const path = require('path');

module.exports = () => {

    app.get('/image/:file', (req, res) => {
        const file = req.params['file']

        if (file < files.length + 1  && file > 0 && !isNaN(file)) {
            res.sendFile(path.join(__dirname, '/images/files/' + files[file - 1]))
        } else {
            res.sendFile(path.join(__dirname, '/public/404.jpg'))
        }
    })
    
    app.use(express.static(path.join(__dirname, 'public')));
    
    app.set('views', path.join(__dirname, 'public'));
    
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');

    app.get('/*', (req, res) => {
        if (req.params['0'] != 'image/') {
            res.render('index')
        } else {
            res.sendFile(path.join(__dirname, '/public/404.jpg'))
        }
    })
    
}