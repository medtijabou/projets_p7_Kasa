import { useState, useEffect } from "react";

function App() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("/data/logements.json")
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error("Erreur lors du chargement :", error));
  }, []);

  return (
    <div>
      <h1>Liste des logements</h1>
      <ul>
        {logements.map((logement) => (
          <li key={logement.id}>
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
            <img src={logement.cover} alt={logement.title} width="200" />
            <p>Note : {logement.rating} ⭐</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
