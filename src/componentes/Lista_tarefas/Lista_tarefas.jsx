import React from 'react';
import './Lista_tarefas.css';
import Tarefa from "../Tarefa/Tarefa"

/*Lista Suspensa*/

//import PropTypes from 'prop-types';

function Lista_tarefas({tarefas}) {
    // let tarefas = ["tarefa 1", "tarefa 2", "tarefa 3"];

    return (
        <div className='tarefas-container'>

            <div className='tarefas-completas'>
                <h2> Tarefas Completas!</h2>
                {tarefas.filter(tarefa => tarefa.completed).map((tarefa, index) => (
                    <Tarefa key = {index} texto = {tarefa.usuario + ": " + tarefa.title} />
                ))}
            </div>

            <div className='tarefas-pendentes'>
                <h2> Tarefas Pendentes!</h2>
                {tarefas.filter(tarefa => !tarefa.completed).map((tarefa, index) => (
                    <Tarefa key = {index} texto = {tarefa.usuario + ": " + tarefa.title} completed />
                ))}
            </div>

        </div>
    )

    /*return tarefas.map((tarefas, index) =>
            <Tarefa key = {index} texto = {tarefas} />
    )*/
    

}

export default Lista_tarefas;