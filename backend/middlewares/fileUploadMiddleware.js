const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Define the directory where files will be stored
  },
  filename: function (req, file, cb) {
    const fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  // Implement file type filtering if needed
  // For example, you can check the file's MIME type here
  cb(null, true); // Accept all file types
};

const upload = multer({ storage, fileFilter });

module.exports = upload;


