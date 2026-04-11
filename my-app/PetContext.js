import { createContext, useState, useContext } from 'react';

const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [petName, setPetName] = useState("");

  return (
    <PetContext.Provider value={{
      selectedPet, setSelectedPet,
      petName, setPetName
    }}>
      {children}
    </PetContext.Provider>
  );
};

export const usePet = () => useContext(PetContext);