import React, { useState } from 'react';
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
import { toast } from 'react-toastify';
import { addVehicle, addVehicle as addVehicleApi } from '../../services/adminService'
import { useNavigate } from 'react-router-dom';
function AddServiceLocation() {


    const [vehicleNo, setVehicleNo] = useState('')
    const [fuelType, setFuelType] = useState('')
    const [passingYear, setPassingYear] = useState('')
    const [type, setType] = useState('')
    const [brand, setBrand] = useState('')
    const [serviceLocation, setServiceLocation] = useState('')
    // get the navigation object
    const navigate = useNavigate()
  
    const addServiceLocation = async () => {
      if (vehicleNo.length == '') {
        toast.error('Please enter vehicle number')
      } else if (fuelType.length == '') {
        toast.error('Please enter fuel type')
      } else if (passingYear.length == '') {
        toast.error('Please enter passing year')
      } else if (type.length == '') {
        toast.error('Please enter vehicle type')
      } else if (brand.length == '') {
        toast.error('Please enter brand name')
      } else if (serviceLocation.length == '') {
        toast.error('Please enter service location')
      } else {
        const response = await addVehicleApi(
          vehicleNo,fuelType,passingYear,type,brand,serviceLocation
        )
  
        console.log(response);
      }
    }


  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Add Vehicle</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              {/* <MDBInput wrapperClass='mb-4 w-100' label='Name' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Email' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Mobile Number' id='formControlLg' type='number' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Address' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Licence Number' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Confirm Password' id='formControlLg' type='password' size="lg"/>
               */}
            
            
            <div className='mb-3'>
              <label htmlFor=''>Vehicle Number</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setVehicleNo(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Fuel Type</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setFuelType(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Passing Year</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setPassingYear(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Vehicle Type</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setType(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Vehicle Brand</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setBrand(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Service Location</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setServiceLocation(e.target.value)
                }}
              />
            </div>
              <button className="LoginRegisterButton text-white btn-lg mb-3" onClick={addVehicle}>Add Vehicle</button>




            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default AddServiceLocation;