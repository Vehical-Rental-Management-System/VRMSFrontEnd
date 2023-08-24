import React, { useState } from 'react';
import axios from 'axios';
import { uploadImageApi } from '../../services/adminService';

function FileUploadForm(props) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const imageFile = new FormData();
    console.log(selectedFile);
    imageFile.append('imageFile', selectedFile);
    
    for (var key of imageFile.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
    const response = await uploadImageApi(props.vehicleId,imageFile)

    if(response.status == 200) console.log("File Uploaded");
    else console.log("File Not Uploaded");

};

  return (
    
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button className='btn btn-primary' type="submit">Upload</button>
      </form>
   
  );
}

export default FileUploadForm;