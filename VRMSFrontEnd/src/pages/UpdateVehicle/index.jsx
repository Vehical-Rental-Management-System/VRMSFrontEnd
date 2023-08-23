
import React, {useState, useEffect} from 'react';

function UpdateVehicle(){

   

    const fuelType=sessionStorage.getItem("fuelType")
    const location=sessionStorage.getItem("location")
    const locationId=sessionStorage.getItem("locationId")

    // const [fuel, setFuel] = useState(fuelType)
    // const [loc, setLocation] = useState(location)
    
    return (
        <>
        <div style={{marginLeft:"300px", marginTop:"20px"}}>
            <h3>Update Vehicle</h3>
            </div>


            <form style={{ width: "30%", left: "450px", position: "absolute", boxShadow: "10px 10px 10px 5px grey", padding: "20px", marginTop: "10px" }}>
           

                <div class="form-group">
                <label for="exampleInputEmail1">Fuel Type</label>
                    <input
                        type="text"
                        class="form-control"
                        id="fuelType"
                        aria-describedby="emailHelp"
                        placeholder="Enter Fuel Type"
                        value={fuelType}
                        // onChange={(e) => {
                        //     setFuel(e.target.value)
                        //   }}
                    />
                </div>

        
                <br />
               <div class="form-group">
               <label for="exampleInputEmail1">Service Location</label>
                   <input
                       type="number"
                       class="form-control"
                       id="serviceLocationadrLine1"
                       aria-describedby="emailHelp"
                       placeholder="Enter Service Location"
                       value={location}
                    //    onChange={(e) => {
                    //     setLocation(e.target.value)
                    //   }}
                   />
               </div>
         
            
                <br />
                <button type="submit" className="btn btn-info" >Update Vehicle</button>
            
                </form>
                </>
                );

              }
              export default UpdateVehicle;