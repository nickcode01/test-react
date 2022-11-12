import React, {useState} from "react";
import '../hojas-de-estilo/Formulario.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import { v4 as  uuidv4} from 'uuid';

function Formulario(props){

    const [input, setInput] = useState('');

   

    const manejarCambio = e => {
           setInput(e.target.value);
    }
    const manejarEnvio = e => {
        e.preventDefault(); //Para que no se vuelva a cargar la pagina al enviar el formulario
            const tareaNueva = {
                id:uuidv4(),
                texto: input,
                completada:false
            }
        props.onSubmit(tareaNueva); // cuando se envie el formulario
    }
    
    return(
        <Form 
        className="tarea-formulario"
        onSubmit={manejarEnvio} >
            <Form.Control
            className="tarea-input"
            type='texto'
            placeholder="Escribe una Tarea"
            name="texto"
            onChange={manejarCambio}
            />
            <button className="tarea-boton">Agregar Tarea</button>
        </Form>
    //     <Form onSubmit={manejarEnvio}>
    //     <InputGroup className="mb-3">
    //     <Form.Control
    //       placeholder="Escribe una Tarea"
    //       aria-label="Escribe una Tarea"
    //       aria-describedby="basic-addon2" onChange={manejarCambio}
    //     />
    //     <Button variant="outline-secondary" id="button-addon2">
    //       Agregar Tarea
    //     </Button>
    //   </InputGroup>
    //   </Form>
    );
}
export default Formulario;