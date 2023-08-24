
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
  MDBCheckbox,
  MDBTextArea
}
from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BookingFeedback() {

  const bookingId = sessionStorage.getItem("bookingId");

  const [bookingFeedback, setBookingFeedback] = useState('');
  const [rating , setRating] = useState(0);

  const navigate = useNavigate()

  const addFeedBackHandler = ()=>{

    const addFeedbackObj = { bookingId, bookingFeedback, rating}
    console.log(addFeedbackObj);
    // validation remaining
    axios.put("http://localhost:7070/booking/addfeedbacktobooking",addFeedbackObj)
    .then(response => {
        // Handle successful response
        console.log('Response data:', response.data);
        navigate('/myBooking')
    })
    .catch(error => {
        // Handle error
        console.error('An error occurred:', error);
    });
    sessionStorage.removeItem('bookingId');
  }

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Reason For Cancellation</h2>
              <p className="text-white-50 mb-3">Please enter your required Information</p>

            
              <MDBTextArea wrapperClass='mb-4 w-100' label='Enter Feedback' id='formControlLg' type='text-area' size="lg" onChange={(e) => {
                                        setBookingFeedback(e.target.value)
                                    }}/>
            <MDBInput wrapperClass='mb-4 w-100' label='Enter Rating' id='formControlLg' type='number' size="lg" onChange={(e) => {
                                        setRating(e.target.value)
                                    }}/>


              <button className="LoginRegisterButton text-white btn-lg mb-3" onClick={addFeedBackHandler}>Give Feedback</button>


            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default BookingFeedback;


