
import cloudinary from 'cloudinary'; 

cloudinary.config({
    cloud_name: `${process.env.CLOUDNINARY_NAME}`,
    api_key:`${process.env.CLOUDNINARY_API_KEY}`,
    api_secret:`${process.env.CLOUDNINARY_API_SECRET}`
});

export default cloudinary;

