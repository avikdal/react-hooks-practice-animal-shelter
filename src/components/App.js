import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  // const [isAdopted, setIsAdopted] = useState(false)

  function onChangeType(type){
    setFilters({ type: type})
  }

  function onFindPetsClick(){
    let url = "http://localhost:3001/pets";

    if (filters.type !== "all") {
      url += `?type=${filters.type}`;
    }

    fetch(url)
      .then((r) => r.json())
      .then((petsArray) => {
        setPets(petsArray);
      });
  }


  function onAdoptPet(id){
    console.log("pet id", id)
    const updatedPets = pets.map((pet) => pet.id === id ? { ...pet, isAdopted: true} : pet) 
    // if statement ? truthy : falsey
    setPets(updatedPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
