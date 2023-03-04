import React from "react";

function Pet({ petInfo, onAdoptPet }) {

  function handleClick(){
    onAdoptPet(petInfo.id)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {petInfo.gender === "female" ? "♀" : "♂"}
          {petInfo.name}
        </span>
        <div className="meta">
          <span className="date">{petInfo.type}</span>
        </div>
        <div className="description">
          <p>Age: {petInfo.age}</p>
          <p>Weight: {petInfo.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {petInfo.isAdopted ?
        <button className="ui disabled button">Already adopted</button>
        :
        <button className="ui primary button" onClick={handleClick}>Adopt pet</button>
        }
      </div>
    </div>
  );
}

export default Pet;
