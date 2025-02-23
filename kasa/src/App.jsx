import { useState, useEffect } from "react";
import "./App.scss";
import Banner from "./components/Banner";  
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("/data/logements.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
      })
      .then((data) => setLogements(data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <Main />
      <Footer />
      
        {/* <h1>Liste des logements</h1>
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
     */}
    </div>
  );
}

export default App;
