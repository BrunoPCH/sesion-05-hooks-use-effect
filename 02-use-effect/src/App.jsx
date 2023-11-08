import { useState, useEffect } from 'react';
import './App.css'

/*
  Ciclo de vida de un componente: Los momentos donde se realizan ciertas fases
  a lo largo de un componente.

  1. creación (constructor)
  2. primer ejecución (willmount)
  3. render
  4. post render (didmount) 
  5. actualización (update)
  6. eliminación (willunmount)
*/

function App() {
  console.log('Renderizando App');

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Por defecto, useEffect se ejecuta inmediantamente después del render

  // Como segundo parametro, useEffect recibe un arreglo de "dependencias",
  // cuando la "dependencia cambie" se vuelve a ejecutar useEffect

  // Si las dependencias son vacías ([]) entonces useEffect se ejecuta una vez.
  useEffect(() => {
    console.log('Ejecutando useEffect');

    setInterval(() => {
      console.log('Ejecutando interval');
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <h1>{time}</h1>
      <h2>Hora actual CDMX</h2>
    </>
  )
}

export default App
