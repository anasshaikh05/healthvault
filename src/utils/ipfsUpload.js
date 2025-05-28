import axios from 'axios';

// Replace with your actual Pinata API Key and Secret Key
const PINATA_API_KEY = process.env.REACT_APP_PINATA_API_KEY;
const PINATA_API_SECRET = process.env.REACT_APP_PINATA_API_SECRET;
  

export async function uploadFileToIPFS(file) {
  const formData = new FormData();
  formData.append("file", file);  // Append the file to form data

  try {
    const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'pinata_api_key': PINATA_API_KEY,
        'pinata_secret_api_key': PINATA_API_SECRET
      }
    });

    console.log('File uploaded successfully:', response.data);
    return response.data.IpfsHash;  // Return the IPFS hash (CID) of the file
  } catch (error) {
    console.error('Error uploading file to Pinata:', error);
    throw new Error('File upload failed');
  }
}

