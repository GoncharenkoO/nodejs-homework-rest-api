const multer = require("multer");
const path = require("path");
// const Jimp = require("jimp");

const tempDir = path.join(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 1000,
  },
});

const upload = multer({
  storage: multerConfig,
});

// Jimp.read("./avatar.jpg")
//   .then((avatar) => {
//     return avatar
//       .resize(250, 250)
//       .quality(60)
//       .write(__dirname + "avatar-bw.jpg");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

module.exports = upload;
