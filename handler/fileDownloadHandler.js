const fs = require('fs');
const mime = require('mime');

module.exports = {
    fileDownload : async (res, fileName) => {
        let file = './fileRepository/' + fileName;
        let mimetype = mime.getType(fileName);

        res.setHeader('Content--disposition','attachment; filename=' + fileName);
        res.setHeader('Content-type',mimetype)
        
        let fileStream = fs.createReadStream(file);
        fileStream.pipe(res);
    }
}