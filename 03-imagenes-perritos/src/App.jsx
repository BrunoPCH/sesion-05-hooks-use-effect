import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [breedImage, setBreedImage] = useState(null);

  function handleChange(event) {
    // Tomando el valor seleccionado del <select/>
    setSelectedBreed(event.target.value);
  }

  useEffect(() => {
    // Invocar el API de perritos
    // Creando un GET HTTP Request
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => setBreeds(Object.keys(data.message)));
  }, []);

  // selectedBreed es una dependencia del useEffect
  // Si selectedBreed cambia, useEffect se ejecuta
  useEffect(() => {
    if (selectedBreed !== null) {
      fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
        .then(response => response.json())
        .then(data => setBreedImage(data.message));
    }
  }, [selectedBreed])

  return (
    <>      
      <select className="form-control" onChange={handleChange}>
        {breeds.map((breed) => <option value={breed}>{breed}</option>)}
      </select>
      {
        breedImage !== null && <img src={breedImage} />
      }
    </>
  );
}

export default App
