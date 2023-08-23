import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow
} from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentForm() {

    const [message,setMessage] = useState("");
    const navigate = useNavigate();

    var paymentSuccesfull = ()=>{
        setMessage("Your transaction is succesfull!!!");

        setTimeout(()=>{
            setMessage("");
            navigate("/");
        },3000);
    }

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Payment Details</h2>
              <p className="text-white-50 mb-3">Please enter your required Information</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Card Number' id='formControlLg' type='number' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Card Holder Name' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Amount' id='formControlLg' type='number' size="lg" readOnly/>

              <div class="row mb-3">
                <div class="col-6">
                  <div class="form-outline">
                    <input type="text" id="formControlLgExpk8" class="form-control"
                      placeholder="MM/YYYY" />
                    <label class="form-label" for="formControlLgExpk8">Expiry</label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-outline">
                    <input type="password" id="formControlLgcvv8" class="form-control" placeholder="" />
                    <label class="form-label" for="formControlLgcvv8">CVV</label>
                  </div>
                </div>
              </div>
            
              <button className="LoginRegisterButton text-white btn-lg mb-3" onClick={paymentSuccesfull}>Pay</button>
            
                <div>

                    <h4 className='alert alert-success'>
                        {message}
                    </h4>

                </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default PaymentForm;