import React, { useState } from 'react';
import { uploadFileToIPFS } from '../utils/ipfsUpload'; // Correct relative path

function UploadButton({ onFileUpload }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    try {
      const ipfsHash = await uploadFileToIPFS(file);  // Upload the file to IPFS
      alert('File uploaded successfully! IPFS Hash: ' + ipfsHash);  // Display the IPFS hash

      // Add the uploaded file to the parent state
      onFileUpload({ name: file.name, ipfsHash });  // Passing file name and IPFS hash
    } catch (error) {
      alert('Error uploading file');
    }
  };

  return (
    <div>
      <h2>Upload File to IPFS</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadButton;

