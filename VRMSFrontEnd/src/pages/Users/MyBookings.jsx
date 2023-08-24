
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import '../../styles/mybooking.css'
import { getAllMyBookings } from "../../services/user";
import { useNavigate } from "react-router-dom";
function MyBookings() {
    
    const [bookings,setBookings] = useState([])
    const uid = sessionStorage.getItem("uid")
    const navigate = useNavigate();

    useEffect(()=>{
        getMyBookings();
    },[])

    const getMyBookings = async ()=>{

        const response = await getAllMyBookings(uid)

        if(response!=null){
            setBookings(response)
        }

    }

    const handleCancelBooking = (bookingId)=>{
        sessionStorage.setItem('bookingId',bookingId);
        navigate('/cancelBooking');
    }

    return (


     

        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '90%' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                        <table className="table table-hover" >
                    <thead>
                        <tr>
                        <th scope="col">Booking Id</th>
                        <th scope="col">Book Date</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Extra Charge</th>
                        <th scope="col">Total Amount</th>
                        <th scope="col">Booking Status</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking =>
                        <tr key={booking.id}>

                      <td>{booking.id}</td>
                        <td>{booking.bookDate}</td>
                        <td>{booking.startDate}</td>
                        <td>{booking.endDate}</td>
                        <td>{booking.amount}</td>
                        <td>{booking.extraCharge}</td>
                        <td>{booking.totalAmount}</td>
                        <td>{booking.status}</td>
                        <td><button className="btn btn-danger" onClick={()=>{handleCancelBooking(booking.id)}}>Cancel Booking</button></td>
                        </tr>
                        )}
                    </tbody>
                    </table>
                           
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
       


    );
}

export default MyBookings;