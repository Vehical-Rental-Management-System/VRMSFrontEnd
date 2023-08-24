
import axios from 'axios';
import React, {useState, useEffect} from 'react';


function AdminChangePassword(){

  const id = sessionStorage.getItem("uid");
    
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const changePasswordHandler = (e)=>{
    e.preventDefault();
    const passwordObj = { id, oldPassword, newPassword}
    console.log(passwordObj);
    // validation remaining
    axios.post("http://localhost:7070/admin/updatePassword",passwordObj)
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
        <>
         <div style={{marginLeft:"300px", marginTop:"20px"}}>
            <h3>Change Password</h3>
            </div>
            <form style={{ width: "30%", left: "450px", position: "absolute", boxShadow: "10px 10px 10px 5px grey", padding: "20px", marginTop: "10px" }}>
            
            <div class="form-group">
                    <label for="exampleInputPassword">Enter Old Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="oldPassword"
                        aria-describedby="emailHelp"
                        placeholder="Enter Old Password"
                        onChange={(e) =>{
                            setOldPassword(e.target.value)
                        }}
                    />
                </div> 
                <br />
                 <div class="form-group">
                    <label for="exampleInputPassword">Enter New Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="newPassword"
                        aria-describedby="emailHelp"
                        placeholder="Enter New Password"
                        onChange={(e) =>{
                            setNewPassword(e.target.value)
                        }}
                    />
                </div> 
                <br />
                <button type="submit" className="btn btn-primary" onClick={changePasswordHandler}>Change Password</button>
            
                    
                </form>

                
                </>
                );

              }
              export default AdminChangePassword;