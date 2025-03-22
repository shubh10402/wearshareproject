const cloudinary = require('cloudinary').v2;

const uploadFileCloudinary = async(file)=>{

    cloudinary.config({
        cloud_name:"dyvce23fs",
        api_key:"729268142847999",
        api_secret:"7tZRfoKK2EwTpkFh6PeHmGCDfDw"
    })

    const cloudinaryRsponse = await cloudinary.uploader.upload(file.path);
    return cloudinaryRsponse
}

module.exports={
    uploadFileCloudinary
}