import React from 'react';

const PetCard = ({petData, adoptPet}) => {
    return (
       <div className="card"
        onClick={() => adoptPet(petData.name)}>
            <img className="card-img-top" src={`../../${petData.img}`} alt={petData.name} />
            <div className="card-body">
                <h3 className="card-title">{petData.name}{petData.adopted && " (Adopted)"}</h3>
                <p className="card-text">{petData.sex} {petData.breed}</p>
            </div>
        </div> 
    ); 
}  

export function PetList({pets, adoptPet}) {
    return (
        <div id="petList">
          <h2>Dogs for Adoption</h2>
          <div className="card-deck">
            {pets.map(pet => (
                <PetCard key={pet.name} petData={pet} adoptPet={adoptPet}/>
            ))}
          </div>
        </div> 
    );
}