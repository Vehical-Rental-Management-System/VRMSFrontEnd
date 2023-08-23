import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";

function MyBookings() {
    const bookings = [
        { id: 1, bookDate: "123", startDate: "123", endDate: "123" ,amount:"100",extraCharge:"17",totalAmount:1500,status:"Successful"},
        { id: 3, bookDate: "123", startDate: "123", endDate: "123" ,amount:"100",extraCharge:"18",totalAmount:1700,status:"Cancelled"},
    ];

    return (

   
        //   <div className="col">
        //      <div className='mb-9'>
        //         <div style={{width:"70%",height:"100%",marginLeft:"180px",marginTop:"20px",marginBottom:"20px"}}>
        //             <h3 style={{justifyContent:"center",alignItems:"center",display:"flex"}}>My Bookings</h3>
        //             <table className="table table-hover" >
        //                 <thead>
        //                     <tr>
        //                         <th>Booking Id</th>
        //                         <th>Book Date</th>
        //                         <th>Start Date</th>
        //                         <th>End Date</th>
        //                         <th>Amount</th>
        //                         <th>Extra Charge</th>
        //                         <th>Total Amount</th>
        //                         <th>Booking Status</th>
        //                         <th></th>

        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {bookings.map(booking => (
        //                         <tr key={booking.id}>
        //                             <td>{booking.id}</td>
        //                             <td>{booking.bookDate}</td>
        //                             <td>{booking.startDate}</td>
        //                             <td>{booking.endDate}</td>
        //                             <td>{booking.amount}</td>
        //                             <td>{booking.extraCharge}</td>
        //                             <td>{booking.totalAmount}</td>
        //                             <td>{booking.status}</td>
        //                             <td><button className="btn btn-danger" style={{padding:"20px"}}>Cancel Booking</button></td>

        //                         </tr>
        //                     ))}
        //                 </tbody>
        //             </table>
        //         </div>
        //         </div>
        //         </div>
        <div style={{width:"70%",height:"100%",marginLeft:"180px",marginTop:"20px",marginBottom:"20px"}}>
                    <h3 style={{justifyContent:"center",alignItems:"center",display:"flex"}}>My Bookings</h3>
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
                        
                        <th scope="row">{booking.id}</th>
                        <td>{booking.bookDate}</td>
                        <td>{booking.startDate}</td>
                        <td>{booking.endDate}</td>
                        <td>{booking.amount}</td>
                        <td>{booking.extraCharge}</td>
                        <td>{booking.totalAmount}</td>
                        <td>{booking.status}</td>
                        <td><button className="btn btn-danger" style={{padding:"20px"}}>Cancel Booking</button></td>
                        </tr>
                        )}
                    </tbody>
                    </table>

                    </div>
      

   
    );
}

export default MyBookings;