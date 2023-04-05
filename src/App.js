import { useState } from 'react';
import './App.css';

export function App() {
  function Contador() {
    return (
      <div className='centrado'>
        <h1>Contador</h1>
        <p>{contador}</p>
        <button onClick={() => setContador((contador) => contador + 1)}>
          +1
        </button>
        <button onClick={() => setContador((contador) => contador - 1)}>
          -1
        </button>
      </div>
    );
  }
  const [contador, setContador] = useState(0);

  return (
    <>
      <div className="contenedor">
        <Contador />
      </div>
    </>
  );
}

