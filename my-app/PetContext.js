import { createContext, useState, useContext, useEffect } from 'react';

const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [petName, setPetName] = useState("");
  const [hunger, setHunger] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setHunger((prev) => Math.max(prev - 1, 0));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PetContext.Provider value={{
      selectedPet, setSelectedPet,
      petName, setPetName,
      hunger, setHunger
    }}>
      {children}
    </PetContext.Provider>
  );
};

export const usePet = () => useContext(PetContext);