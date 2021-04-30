import React from 'react';
import PropTypes from 'prop-types'

const Encontro = ({encontro, eliminarEncontro}) => (
    <div className='encontro'>
        <p>Mascote: <span>{encontro.mascote}</span></p>
        <p>Dono: <span>{encontro.proprietario}</span></p>
        <p>Data: <span>{encontro.data}</span></p>
        <p>Hora: <span>{encontro.hora}</span></p>
        <p>Sintomas: <span>{encontro.sintomas}</span></p>

        <button 
        className='button eliminar u-full-width'
        onClick={ () => eliminarEncontro(encontro.id) }
        >Eliminar &times;</button>
    </div>
)

Encontro.proptype = {
    encontro: PropTypes.object.isRequired,
    eliminarEncontro: PropTypes.func.isRequired
}

export default Encontro;