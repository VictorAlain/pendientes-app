import React from 'react';
import './EmptyTodos.css';

function EmptyTodos() {
  return (
    <div>
      <div className='EmptyTodosDiv'></div>
      <p className='EmptyTodosMessage'>¡No se encontro ningun pendiente! 😥</p>
    </div>
  );
}

export { EmptyTodos };
