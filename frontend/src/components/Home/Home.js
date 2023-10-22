import { AuthUser } from '../AuthRouter'
import Navbar from '../Navbar/Navbar'
import React, { useEffect, useState } from 'react';

export default function Home() {

  const [file, setFile] = useState(null); 
  const auth = AuthUser()
  useEffect(() => {
    auth.checkUser()
  }, [])

  function handleFileUpload(e) {
    setFile(e.target.files[0]);
  }

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', 'justifyContent': 'center' }}>
        <h1 >User Name : {(auth.user) ? (auth.user.data.name) : "No User!"}</h1>
      </div>
      <input type="file" onChange={handleFileUpload}/>

      <button>Upload File</button>
    </div>
  )
}
