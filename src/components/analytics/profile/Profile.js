import React from 'react'
import { ContainerProfile } from './index';

export const Profile = () => {
    return (
        <ContainerProfile>
            <h3>Perfil: </h3>
            <hr />
            <div>
                <span>Nombre: <strong>Juan</strong> </span> 
                <span>Apellido: <strong>Sandoval</strong> </span> 
                <span>Edad: <strong>38</strong> </span> 
                <span>DNI: <strong>72604398</strong> </span> 
            </div>
        </ContainerProfile>
    )
}
