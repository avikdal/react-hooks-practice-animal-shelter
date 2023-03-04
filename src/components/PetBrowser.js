import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  console.log("pets in broswer", pets)

  return <div className="ui cards">{pets.map((pet) => <Pet  key={pet.id} petInfo={pet} onAdoptPet={onAdoptPet} />)}</div>;
}

export default PetBrowser;
