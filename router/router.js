const handler = require('../handler/fileDownloadHandler');

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.render('index', {
            indexData : "index page"
        });
        res.end();
    })

    app.get('/download/:fileName', (req, res) => {
        let fileName = req.params.fileName;
        
        handler.fileDownload(res, fileName)
    })
}