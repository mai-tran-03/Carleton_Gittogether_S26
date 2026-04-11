import React, { createContext, useState, useContext } from 'react';

const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [selectedPet, setSelectedPet] = useState(null);

  return (
    <PetContext.Provider value={{ selectedPet, setSelectedPet }}>
      {children}
    </PetContext.Provider>
  );
};

export const usePet = () => useContext(PetContext);