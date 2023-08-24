import React, { useEffect, useState, useTransition } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import axios from 'axios';

function UpdateProfile() {

  const id = sessionStorage.getItem("uid");
  
  const [ firstName , setFirstName ] = useState('');
  const [ lastName , setLastName ] = useState('');
  const [ email , setEmail ] = useState('');
  const [ age , setAge] = useState(0);
  const [ mobileNo , setMobileNo ] = useState('');
  const [ aadharNo , setAadharNo ] = useState('');
  const [ licenseNo , setLicenseNo ] = useState('');
 


  useEffect(() => {
    axios.get("http://localhost:7070/user/"+id)
      .then(response => {
          // Handle successful response
          console.log('Response data:', response.data);
          setFirstName(response.data.firstName);  
          setLastName(response.data.lastName);  
          setEmail(response.data.email);  
          setAge(response.data.age);  
          setMobileNo(response.data.mobileNo);  
          setAadharNo(response.data.aadharNo);  
          setLicenseNo(response.data.licenseNo)
      })
      .catch(error => {
          // Handle error
          console.error('An error occurred:', error);
      });

  },[]);


  const updateUserProfileHandler = ()=>{

    const user = { id,firstName, lastName,email,age,mobileNo,aadharNo,licenseNo}

    axios.put("http://localhost:7070/user/updateProfile",user)
    .then(response => {
        // Handle successful response
        console.log('Response data:', response.data);
    })
    .catch(error => {
        // Handle error
        console.error('An error occurred:', error);
    });
  }

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Update Profile</h2>
              <p className="text-white-50 mb-3">Please enter your required Information</p>

              <MDBInput wrapperClass='mb-4 w-100' label='First Name' id='formControlLg' type='text' size="lg" value={firstName} onChange={(e) => {
                                        setFirstName(e.target.value)
                                    }}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Last Name' id='formControlLg' type='text' size="lg"  value={lastName} onChange={(e) => {
                                        setLastName(e.target.value)
                                    }}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Email' id='formControlLg' type='email' size="lg"  value={email} onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Mobile Number' id='formControlLg' type='number' size="lg" value={mobileNo} onChange={(e) => {
                                        setMobileNo(e.target.value)
                                    }}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Licence Number' id='formControlLg' type='text' size="lg" value={licenseNo} onChange={(e) => {
                                        setLicenseNo(e.target.value)
                                    }}/>
            
              <button className="LoginRegisterButton text-white btn-lg mb-3" onClick={updateUserProfileHandler}>Update</button>


            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default UpdateProfile;


