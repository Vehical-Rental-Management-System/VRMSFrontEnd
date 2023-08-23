import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BookingForm = () => {

    const { id } = useParams();
    console.log(id);
   const [bookingState, setBookingState] = useState({Amount: 0.0,startdate: new Date(),enddate: new Date()});

   const handleChange = (e) => {
    const value = e.target.value;
    setBookingState({
      ...bookingState,
      [e.target.name]: value
    });
  };
    const navigate = useNavigate();
    const userId = sessionStorage.getItem("uid");
    
    const addBookingHandler = (e)=>{
      e.preventDefault();

      const bookingData = {
        amount: bookingState.Amount,
        startDate: bookingState.startdate,
        endDate: bookingState.enddate,
        extraCharge: 0.0,
        totalAmount: bookingState.Amount,
        vehicleId : id
      };

      axios.post("http://localhost:7070/booking/addbooking/1",bookingData)
      .then(response => {
          // Handle successful response
          console.log('Response data:', response.data);
          console.log(response.data)
          navigate("/payment");
          
      })
      .catch(error => {
          // Handle error
          console.error('An error occurred:', error);
      });
    }

 
  return (
    <Form onSubmit={addBookingHandler}>
      {/* <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" />
      </FormGroup> */}

      {/* <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup> */}
      <div className="row">
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Amount" value={100} readOnly onChange={handleChange}/>
      </FormGroup>
      </div>

      {/* <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="From Address" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="To Address" />
      </FormGroup> */}

      {/* <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup> */}
      
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" onChange={handleChange}/> 
      </FormGroup>
      {/* <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
        />
      </FormGroup> */}

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="date" placeholder="Journey Date" onChange={handleChange}/>
      </FormGroup>

      {/* <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
        />
      </FormGroup> */}

      {/* <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
        ></textarea>
      </FormGroup> */}

        <FormGroup>
        <button className="booking-button text-white btn-lg mb-3" onClick={addBookingHandler}>Pay Now</button>
        </FormGroup>
      

    </Form>

    
  );
};

export default BookingForm;
