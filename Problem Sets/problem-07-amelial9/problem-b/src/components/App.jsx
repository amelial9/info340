import React, { useState } from 'react';

import { AboutNav } from './Navigation';
import { BreedNav } from './Navigation';
import { PetList } from './PetList';

function App({pets:initialPets}) {
  const [pets, setPets] = useState(initialPets);

  const breeds = [...new Set(pets.map(pet => pet.breed))];

  const adoptPet = (petName) => {
    setPets(pets.map(pet =>
      pet.name === petName ? { ...pet, adopted: true} : pet
    ));
  };

  return (
    <div>
      <header className="py-3 mb-4">
        <div className="container">
          <h1>Adopt a Pet</h1>
        </div>
      </header>

      <main className="container">
        <div className="row">
          <div id="navs" className="col-3">
            <BreedNav breeds={breeds}/>
            <AboutNav />
          </div>

          <div className="col-9">
            <PetList pets={pets} adoptPet={adoptPet}/>
          </div>
        </div> 
      </main>

      <footer className="container">
        <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
      </footer>
    </div>
  );
}

export default App;
