import React from 'react';
import "./Tarefa.css";

function TextoTarefas({texto, completed}) {
  /*return (
    <div>
      <p>{texto}</p>
    </div>
  );
}*/

  return (
    <div className={completed ? "tarefa-pendente" :  "tarefa-completa" }>
        {completed ? <span> {texto} </span> : <strike> {texto} </strike>}
    </div>
  
  );
}

export default TextoTarefas;
