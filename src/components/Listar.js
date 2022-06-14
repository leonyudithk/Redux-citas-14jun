import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Listar = () => {
    // el que va entre {es el nonbre del estado que viene desl reducers}
    //el que esta (es el nombre del estado que se manaja en la store dentro del combineRredcers)
  const { agendaCitas} = useSelector(store => store.agendarCitaStore)
console.log(agendaCitas)
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Telefono</th>
                        <th>Síntoma</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                {
                    agendaCitas.map((cita, index)=>(
                        <tr key={index}>
                        <td>{cita.nombre}</td>
                        <td>{cita.email}</td>
                        <td>{cita.fecha}</td>
                        <td>{cita.hora}</td>
                        <td>{cita.telefono}</td>
                        <td>{cita.sintomas}</td>
                        <td>
                            <Button type="button" className="btn btn-danger">X</Button>
                        </td>
                    </tr>
                    ))
                }
                    
                </tbody>
            </Table>
        </div>
    );
};

export default Listar;