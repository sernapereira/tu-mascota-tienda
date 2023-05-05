const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const postImagen = (image) => {
  cloudinary.uploader.upload(image, function (error, result) {
    if (error) {
      console.log(error);
    } else {
      const imageUrl = result.secure_url;
      console.log(imageUrl);
      return imageUrl;
    }
  });
};

module.exports = postImagen;
