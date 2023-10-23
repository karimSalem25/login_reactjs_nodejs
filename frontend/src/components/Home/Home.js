import { AuthUser } from '../AuthRouter';
import Navbar from '../Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'; // Import your CSS file

export default function Home() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const auth = AuthUser();

  useEffect(() => {
    auth.checkUser();
  }, []);

  function handleFileUpload(e) {
    setFile(e.target.files[0]);
  }

  async function uploadCV() {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('cv', file);

      await axios.post(`http://127.0.0.1:8080/uploadCv`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${auth.user.token}`,
        },
      });

      setUploadStatus('CV uploaded successfully');
    } catch (error) {
      console.error('CV upload failed:', error);
      setUploadStatus('CV upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Welcome, {auth.user ? auth.user.data.name : 'Guest'}!</h1>
        <p>Upload your CV:</p>
        <input type="file" onChange={handleFileUpload} />
        <button
          onClick={uploadCV}
          className={`blue-button ${uploading ? 'disabled' : ''}`} // Apply the blue-button class
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload File'}
        </button>
        {uploadStatus && <p>{uploadStatus}</p>}
      </div>
    </div>
  );
}
