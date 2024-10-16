import React from "react";
import "./Tarefa.css";

function TextoTarefas({ onClick, texto, completed }) {
  /*return (
    <div>
      <p>{texto}</p>
    </div>
  );
}*/
  return (
    <div
      onClick={onClick}
      className={completed ? "tarefa-pendente" : "tarefa-completa"}
    >
      {completed ? <span> {texto} </span> : <strike> {texto} </strike>}
    </div>
  );
}

export default TextoTarefas;
