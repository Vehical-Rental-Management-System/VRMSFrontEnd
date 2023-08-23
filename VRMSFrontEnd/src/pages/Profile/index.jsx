
import React, { useState, useEffect } from 'react';

function Profile() {


    return (
        <>


          
            
            
            
        
           <body>
            <form style={{ width: "30%", height:"60%", left: "450px", position: "absolute", boxShadow: "10px 10px 10px 5px grey", padding: "20px", marginTop: "50px"   }}>
                <div class="profile-container">
                    <h1 class="profile-name">My Profile</h1>
                    <br />
                    <div class="profile-field" >
                        <label for="firstname">First Name:</label>
                        <p id="firstname" style={{fontSize:"20px"}}>Rahul</p>
                    </div>
                    <div class="profile-field">
                        <label for="lastname">Last Name:</label>
                        <p id="lastname" style={{fontSize:"20px"}}>Mundada</p>
                    </div>
                    <div class="profile-field">
                        <label for="email">Email:</label>
                        <p id="email" style={{fontSize:"20px"}}>rahulm55@gmail.com</p>
                    </div>
                    <div class="profile-field">
                        <label for="mobile">Mobile Number:</label>
                        <p id="mobile" style={{fontSize:"20px"}}>9042928347</p>
                    </div>
                    <div class="profile-field">
                        <label for="mobile">GST NO.:</label>
                        <p id="mobile" style={{fontSize:"20px"}}>5h2385bh2p</p>
                    </div>
                </div>

            </form>
            </body>
        </>
    );

}
export default Profile;