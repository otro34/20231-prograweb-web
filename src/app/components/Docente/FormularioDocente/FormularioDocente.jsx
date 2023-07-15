import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const FormularioDocente = ({ docente, onClick, onCancelar }) => {

    const [datosDocente, setDatosDocente ] =  useState(docente)

    const handleOnClick = async () => {
        await onClick(datosDocente);
    }

    const handleOnCancelar = () => {
        onCancelar();
    }

    return (
        <>
            <h2>Agregar Docente</h2>
            <br />
            <Form.Control
                size="lg" type="text"
                placeholder="Nombre"
                value={datosDocente.nombre}
                onChange={e => setDatosDocente({...datosDocente, nombre: e.target.value})} 
            />
            <br />
            <Form.Control
                size="lg" type="text"
                placeholder="Apellido"
                value={datosDocente.apellido}
                onChange={e => setDatosDocente({...datosDocente, apellido: e.target.value})}  
            />
            <br />
            <Button variant="primary"
                style={{ marginRight: '10px'}}
                onClick={() => handleOnClick() }>GUARDAR</Button>
            <Button variant="secondary"
                style={{ marginRight: '10px'}}
                onClick={() => handleOnCancelar() }>Cancelar</Button>
        </>
    )
}

export default FormularioDocente