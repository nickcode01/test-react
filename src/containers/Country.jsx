import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import './Country.css'
const Country = (props) => {
    console.log(props)
    const {name , capital , languages, flags} = props.country;
    return (
        // <div className='card'>
        //     <h1>Country Name : {name.common}</h1>
        //     <h3>Country Population : {population}</h3>
        //     <img className="card-img-top"  src={flags.png} alt="" />
        // </div>

        <Card style={{ width: '18rem' }} gap={3} >
        <Card.Img variant="top" src={flags.png} />
        <Card.Body>
        <Card.Title>Nombre : {name.common}</Card.Title>
        <Card.Text>Capital : {capital} </Card.Text>
        <Card.Text> Languages :
             </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        
        </Card>
        
    );
};

export default Country;