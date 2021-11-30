import React from 'react'
import { ContainerClient } from './index';
import { useForm } from '../../hooks/useForm';




export const CreateClient = () => {

    
    const [
        values,
        handleInputChange,
        // reset
    ] = useForm({
        name: '',
        lastName: '',
        age: '',
        bornDate: '',
    })

    const {name, lastName, age, bornDate} = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <ContainerClient>
            <div>
                <h1>Crear cliente</h1>
                <hr />
                <form onSubmit={handleSubmit}>
                    <label>Nombre :</label>
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Ingrese su nombre"
                        onChange={handleInputChange}
                    />
                    <label>Apellido :</label>
                    <input 
                        type="text"
                        name="lastName"
                        value={lastName}
                        placeholder="Ingrese su apellido"
                        onChange={handleInputChange}
                        
                    />
                    <label>Edad :</label>
                    <input 
                        type="number"
                        name="age"
                        value={age}
                        placeholder="Ingrese su edad"
                        onChange={handleInputChange}

                    />
                    <label>Fecha de nacimiento :</label>
                    <input 
                        type="date"
                        name="bornDate"
                        value={bornDate}
                        placeholder="Fecha nacimiento"
                        onChange={handleInputChange}
                    />
                    <button type="submit">
                        Crear cliente
                    </button>
                </form>
            </div>
        </ContainerClient>
    )
}
