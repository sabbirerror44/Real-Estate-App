const uploader = require("../../utilities/singleUploader");

function cvAvatarUpload(req, res, next) {
  const upload = uploader(
    "cvAvatars",
    ["application/pdf"],
    2000000,
    "pdf files are allowed only!"
  );

  //call the middleware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
}
module.exports = cvAvatarUpload;
