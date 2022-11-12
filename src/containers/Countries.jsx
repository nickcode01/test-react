import React, { useEffect, useState } from 'react';
import Country from './Country';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import './Countries.css'
const Countries = () => {
    const [countries , setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[]);
    return (
        <div>
            <h1>Total Country : {countries.length}</h1>
            <Container fluid>
                <Row>
      {/* <Row xs={1} md={2} lg={3} className="g-4"> */}
      {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        {/* <Col> */}
                {
                        countries.map((country)=><Country country = {country}></Country>)
                }
        {/* </Col> */}
                {/* ))} */}
           </Row>
    </Container>
        </div>
    );
};

export default Countries;