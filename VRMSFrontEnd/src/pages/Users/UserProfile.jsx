import { Link } from "react-router-dom";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";


function UserProfile(){
    return (
        <>
        <UncontrolledDropdown>
                <DropdownToggle
                    caret
                    style={{color:"aqua",backgroundColor:"#000d6b"}}>
                    👤
                </DropdownToggle>
            <DropdownMenu style={{backgroundColor:" #000d6b"}}>
                <DropdownItem header>
                My Profile
                </DropdownItem>
                <DropdownItem>
                <Link to="/updateprofile">Edit Profile</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to="/viewProfile">View Profile</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to="/changePassword">Change Password</Link>
                </DropdownItem>
                
                <DropdownItem>
                <Link to="/myBooking">My Booking</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to="/logout">Logout</Link>
                </DropdownItem>
            </DropdownMenu>
            </UncontrolledDropdown>
        
      </>
      );
}

export default UserProfile;