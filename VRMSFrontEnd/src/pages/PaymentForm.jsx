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
import { addPayment } from '../services/user';

function PaymentForm() {

    const [message,setMessage] = useState("");
    const navigate = useNavigate();
    const [cardNo,setCardNumber] = useState(0)
    const [cardHolderName,setCardHolderName]= useState("")
    const [cvv,setCvv] = useState("")
    const [expiryDate,setExpiryDate]= useState("")
    const paymentAmount = sessionStorage.getItem("bookingAmount")
    const bookingId = sessionStorage.getItem("bookingId")

    var paymentSuccesfull = ()=>{
        

        payForBooking()

        
    }

    const payForBooking = async()=>{

        const response = await addPayment(cardNo,cardHolderName,cvv,expiryDate,paymentAmount,bookingId)

        if(response!= null){
            if(response.message=="payment failed..")
            setMessage("Your transaction failed...");
            else setMessage("Your transaction is succesfull!!!");
            
        }
        else {
            setMessage("Your transaction failed...");
            
        }

        setTimeout(()=>{
            sessionStorage.removeItem("bookingId")
            sessionStorage.removeItem("bookingAmount")
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

              <MDBInput wrapperClass='mb-4 w-100' label='Card Number' id='formControlLg' type='number' size="lg" onChange={(e) => {
                                        setCardNumber(e.target.value)
                                    }}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Card Holder Name' id='formControlLg' type='text' size="lg"
              onChange={(e) => {
                setCardHolderName(e.target.value)
            }}
              />
              <MDBInput wrapperClass='mb-4 w-100' label='Amount' id='formControlLg' type='number' size="lg" value={paymentAmount} readOnly/>

              <div class="row mb-3">
                <div class="col-6">
                  <div class="form-outline">
                    <input type="text" id="formControlLgExpk8" class="form-control"

                      placeholder="MM/YYYY"
                      onChange={(e) => {
                        setExpiryDate(e.target.value)
                    }}
                      />
                    
                    <label class="form-label" for="formControlLgExpk8">Expiry</label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-outline">
                    <input type="password" id="formControlLgcvv8" class="form-control" placeholder="" 
                    onChange={(e) => {
                        setCvv(e.target.value)
                    }}
                    />
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