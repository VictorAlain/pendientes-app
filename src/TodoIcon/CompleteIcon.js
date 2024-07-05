import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? '#003c00' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
