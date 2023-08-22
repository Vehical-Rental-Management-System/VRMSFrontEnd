import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import { useEffect } from "react";
import axios from "axios";


const CarListing = () => {

    const [allCars, SetAllCars] = useState([])

    useEffect(() => {

        axios.get("http://localhost:7070/vehicles/all")
            .then(response => {
                // Handle successful response
                console.log('Response data:', response.data);
                SetAllCars(response.data);
            })
            .catch(error => {
                // Handle error
                console.error('An error occurred:', error);
            });

    }, []);


    return (
        <Helmet title="Cars">
            <CommonSection title="Car Listing" />

            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className=" d-flex align-items-center gap-3 mb-5">
                                <span className=" d-flex align-items-center gap-2">
                                    <i class="ri-sort-asc"></i> Sort By
                                </span>

                                <select>
                                    <option>Select</option>
                                    <option value="low">Low to High</option>
                                    <option value="high">High to Low</option>
                                </select>
                            </div>
                        </Col>



                        {allCars.map((item) => (
                            <CarItem item={item} key={item.id} />
                        ))}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default CarListing;
