//import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarefa from './componentes/Tarefa/Tarefa';
import Lista_tarefas from './componentes/Lista_tarefas/Lista_tarefas';
import useFetch from "react-fetch-hook";
//import { useEffect, useState } from 'react';

/*decidi simplificar utilizando uma biblioteca personalizada do hook que vi aqui:
https://www.freecodecamp.org/portuguese/news/como-fazer-o-fetch-dos-dados-em-react/]*/


function App() {
  //let tarefas=["tarefa 1", "tarefa 2", "tarefa 3"]
  //const [tarefas, setTarefas] = useState([]);
  /* useEffect (() => {
    const fetch
  })*/

  const{isLoading: isLoadingTarefas, data: tarefas, error: errorTarefas} = useFetch("https://jsonplaceholder.typicode.com/todos");
  const{isLoading: isLoadingUsuarios, data: usuarios, error: errorUsuarios}= useFetch("https://jsonplaceholder.typicode.com/users");


  if (isLoadingTarefas || isLoadingUsuarios) return <p>Carregando...</p>;
  if (errorTarefas || errorUsuarios) return <p>Ocorreu um erro!</p>;

  const tarefas_usuarios = tarefas.map(tarefa => {
    const usuario = usuarios.find(user => user.id === tarefa.userId);
    return{...tarefa, usuario: usuario.name ? usuario.name : "Usuario desconhedico"};
  });



  
  return (
    /*<ol>
      {tarefas.map((tarefas)=>
      <li>{tarefas}</li>
      )}
    </ol>*/
    <div>
       <h1> Lista tarefas </h1>
    <Lista_tarefas tarefas={tarefas_usuarios}/>
    </div>
     
  );
}

export default App;
