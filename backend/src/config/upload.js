
const multer = require('multer')
const path = require('path')

module.exports = {
    storeage: multer.diskStorage({
        destination: path.resolve(__dirname,"..", "..", "uploads"),
        filename: (req,file , cb ) => {
            const ext = path.extname(file.origalname);
            const name = path.basename(file.origalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`)
        }
    })
}
