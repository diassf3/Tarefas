//import { useState } from 'react'
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tarefa from "./componentes/Tarefa/Tarefa";
import Lista_tarefas from "./componentes/Lista_tarefas/Lista_tarefas";
import useFetch from "react-fetch-hook";
import { useEffect, useState } from "react";

/*decidi simplificar utilizando uma biblioteca personalizada do hook que vi aqui:
https://www.freecodecamp.org/portuguese/news/como-fazer-o-fetch-dos-dados-em-react/*/

function App() {
  //let tarefas=["tarefa 1", "tarefa 2", "tarefa 3"]
  /* useEffect (() => {
    const fetch
    })*/

  const [tarefasEstado, setTarefasEstado] = useState([]);

  const {
    isLoading: isLoadingTarefas,
    data: tarefas,
    error: errorTarefas,
  } = useFetch("https://jsonplaceholder.typicode.com/todos");

  const {
    isLoading: isLoadingUsuarios,
    data: usuarios,
    error: errorUsuarios,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  useEffect(() => {
    if (tarefas && usuarios) {
      const tarefas_usuarios = tarefas.map((tarefa) => {
        const usuario = usuarios.find((user) => user.id === tarefa.userId);
        return {
          ...tarefa,
          usuario: usuario ? usuario.name : "Usuario desconhecido",
        };
      });
      setTarefasEstado(tarefas_usuarios);
    }
  }, [tarefas, usuarios]);

  if (isLoadingTarefas || isLoadingUsuarios) return <p>Carregando...</p>;
  if (errorTarefas || errorUsuarios) return <p>Ocorreu um erro!</p>;

  const alterarTarefa = (id) => {
    setTarefasEstado((testTarefas) =>
      testTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, completed: !tarefa.completed } : tarefa
      )
    );
  };

  return (
    /*<ol>
      {tarefas.map((tarefas)=>
      <li>{tarefas}</li>
      )}
    </ol>*/
    <div>
      <h1> Lista tarefas </h1>
      <Lista_tarefas tarefas={tarefasEstado} alterarTarefa={alterarTarefa} />
    </div>
  );
}

export default App;
