import React, { useEffect, useState } from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { getAllServiceLocation } from "../../services/user";

const FindCarForm = () => {
    const navigate = useNavigate();

    const [locations,setLocations] = useState([]);
    const [startDate,setStartDate] = useState("")
    const [endDate,setEndDate] = useState("")
    const [locationId,setLocationId] = useState("")
    
    var searchCar = () => {

        sessionStorage.setItem("locationId",locationId)
        sessionStorage.setItem("startDate",startDate)
        sessionStorage.setItem("endDate",endDate)
        

        navigate('/cars');
    }

    useEffect(()=>{

        getLocations()

    },[])

    const getLocations = async()=>{

        const response = await getAllServiceLocation()
        console.log(response);
        if(response !== null){
        setLocations(response)
        setLocationId(response[0].id)
    }
        
    }

  

    return (
        <Form className="form">
            <div className=" d-flex align-items-center justify-content-between flex-wrap">

                <FormGroup className="select__group">
                    <div className='mb-3'>
                        <label htmlFor=''>Area</label>
                        <select onChange={(e) => {
                                        setLocationId(e.target.value)
                                    }}>
                        
                        {locations.map((l)=>{
                            return <option value={l.id} >{l.adrLine1}</option> 
                        })}
                        </select>
                    </div>
                </FormGroup>

                <FormGroup className="form__group">
                    <div className='mb-3'>
                        <label htmlFor=''>Start Date</label>
                        <input type="date" placeholder="start date" onChange={(e) => {
                                        setStartDate(e.target.value)
                                    }} required />
                    </div>
                </FormGroup>

                <FormGroup className="form__group">
                    <div className='mb-3'>
                        <label htmlFor=''>End Date</label>
                        <input type="date" placeholder="end date"
                        onChange={(e) => {
                            setEndDate(e.target.value)
                        }}
                        required />
                    </div>
                </FormGroup>

                

                <FormGroup className="form__group">
                    <button className="btn find__car-btn" onClick={searchCar}>Find Car</button>
                </FormGroup>
            </div>
        </Form>
    );
};

export default FindCarForm;
