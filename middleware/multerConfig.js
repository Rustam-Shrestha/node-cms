const multer = require('multer');

//yeha garyera data haru store hune
//disk destination vanne api use garne facility dinxa
const storage = multer.diskStorage({
    //file haru yesma store hunxa
    //parameters: request, file uploaded and callback function that will indicate error or give destination to file

    destination: function (req, file, cb) {
        // cb is the callback
        // The first argument should be null, indicating no error
        // "./uploads" is the directory where to upload the file
        const allowedFileTypes = ['image/png', 'image/jpg', 'image/jpeg'];
        //mimetype will have filetype of uploaded file
        const comingFileType = file.mimetype;
        //if any of allowed file does not match with array of allowed files
        if (!allowedFileTypes.includes(comingFileType)) {
            cb(new Error("This fileType is not accepted"))
        } else {
            //if it is allowed file then add into uploads directory
            cb(null, "./uploads");
        }
    },
    //while saving file save it with timestamp-filename format
    filename: function (req, file, cb) {
        cb(null, Date.now()+"-"+file.originalname);
    }

})


//sabai vako lai export gareko
module.exports = {
    multer,
    storage
}