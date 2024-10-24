import React from 'react';
import { useParams } from 'react-router-dom';

function TodoDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Dettagli del Todo</h1>
      <p>Stai visualizzando i dettagli del todo con ID: {id}</p>
    </div>
  );
}

export default TodoDetails;
