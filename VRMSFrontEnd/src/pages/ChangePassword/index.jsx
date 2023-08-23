
import React, {useState, useEffect} from 'react';

function ChangePassword(){


    return (
        <>
         <div style={{marginLeft:"300px", marginTop:"20px"}}>
            <h3>Change Password</h3>
            </div>
            <form style={{ width: "30%", left: "450px", position: "absolute", boxShadow: "10px 10px 10px 5px grey", padding: "20px", marginTop: "10px" }}>
            <div class="form-group">
                    <label for="exampleInputEmail">Email</label>
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email"
                    />
                </div>
                <br />
                 <div class="form-group">
                    <label for="exampleInputPassword">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        aria-describedby="emailHelp"
                        placeholder="Enter Password"
                    />
                </div> 
                <br />
                <button type="submit" className="btn btn-info" >Change Password</button>
            
                </form>
                </>
                );

              }
              export default ChangePassword;