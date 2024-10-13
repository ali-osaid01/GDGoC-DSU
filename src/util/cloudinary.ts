import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({ 
  cloud_name: 'dgjvt9oa9', 
  api_key: '674622387414444', 
  api_secret: 'bLwQSkWWcS25VZTZYqNeEvJ9v0I'
});

// Function to upload image to Cloudinary
const uploadToCloudinary = async (file:File) => {
  try {
    
    // Convert file to array buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload stream to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({}, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }).end(buffer);
    });

    return result;
  } catch (error) {
    // console.error('Error uploading image to Cloudinary:', error);
    throw new Error('Error uploading image to Cloudinary');
  }
};

export default uploadToCloudinary;
