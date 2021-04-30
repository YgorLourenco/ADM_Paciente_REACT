import React, {Fragment, useState } from 'react'
import  uuid  from 'uuid/dist/v4'
// PropTypes serve pra validar o que esta sendo digitado nos campos
import PropTypes from 'prop-types'

const Formulario = ({criarEncontro}) => {

    // Criar State de Encontro
    const [encontro, atualizarEncontro] = useState({
        mascote:'',
        proprietario:'',
        data:'',
        hora:'',
        sintomas:'',
    })
    const [error, atualizarError] = useState(false)

    // Função que e executada quando o usuário digita algo no imput
    const atualizarState = e => {
        atualizarEncontro({
        //vai guardar uma copia com o "spread operator" que são os '...', enquanto o próximo guarda o dado
            ...encontro,
            [e.target.name]: e.target.value
        })
    }

    // Extrair valores com Object destructuring(Transforma Arrays em objetos)
    const { mascote, proprietario, data, hora, sintomas } = encontro;

    // Quando o usuário pressiona o botão no final "criar encontro"
    const submitEncontro = e => {
        e.preventDefault() // Cancela um evento que pode ser cancelado

        // Validar
        if(mascote.trim() === '' || proprietario.trim() === '' || data.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){ // Trim tira espaços vazio de uma string
            atualizarError(true) // Se for verdadeiro vai ativar os useState
            return; // return vai servir que pare de executar o codigo
        }
        // Eliminar a mensagem previa
        atualizarError(false) // tira a mensagem de preencher os campos obrigatóriamente deopis de enviar os dados

        // Atribuir um ID - Instalar o uuid no terminal
        encontro.id = uuid(); // uuid e uma função que gera um id unico universal

        // Criar um encontro
        criarEncontro(encontro)
    
        // Reiniciar o formulario
        atualizarEncontro({
            mascote:'',
            proprietario:'',
            data:'',
            hora:'',
            sintomas:'',
        })

    }
    // condição se Error for verdadeiro vai imprimir a mensagem, se não vai retornar nada. (OBS: Isso e um Operator Ternary)
    return ( 
        <Fragment>
            <h2>Criar Encontro</h2>
            {error 
            ? <p className='alerta-error'>Todos os campos são obrigatórios</p>
            : null}

            <form
                onSubmit={submitEncontro} // Evento para capturar um dado ao apertar um botão
            >
                <label>Nome do animal de estimação</label>
                <input 
                    type='text'
                    name='mascote'
                    className='u-full-width'
                    placeholder='Nome do Mascote'
                    onChange={atualizarState} //onChange e um evento de React que detecta quando o valor muda
                    value={mascote}
                />

                <label>Nome do proprietário</label>
                <input 
                    type='text'
                    name='proprietario'
                    className='u-full-width'
                    placeholder='Nome do dono do Mascote'
                    onChange={atualizarState}
                    value={proprietario}
                />

                <label>Data</label>
                <input 
                    type='date'
                    name='data'
                    className='u-full-width'
                    onChange={atualizarState}
                    value={data}
                />

                <label>Horas</label>
                <input 
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={atualizarState}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea 
                    className='u-full-width'
                    name='sintomas'
                    onChange={atualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type='submit'
                    className='u-full-width button-primary'
                >Criar Encontro</button>
            </form>
        </Fragment>
     );
}
// PropTypes serve pra validar o que esta sendo digitado nos campos
Formulario.propTypes = {
    criarEncontro: PropTypes.func.isRequired
}

export default Formulario;