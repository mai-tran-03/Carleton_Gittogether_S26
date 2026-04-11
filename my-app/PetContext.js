import { createContext, useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PetContext = createContext();

const SELECTED_PET_KEY = 'selectedPet';
const PET_NAME_KEY = 'petName';

export const PetProvider = ({ children }) => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [petName, setPetName] = useState("");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const loadSavedPetData = async () => {
      try {
        const [savedPet, savedPetName] = await Promise.all([
          AsyncStorage.getItem(SELECTED_PET_KEY),
          AsyncStorage.getItem(PET_NAME_KEY),
        ]);

        if (savedPet) setSelectedPet(savedPet);
        if (savedPetName) setPetName(savedPetName);
      } catch (error) {
        console.error('Failed to load pet data:', error);
      } finally {
        setIsHydrated(true);
      }
    };

    loadSavedPetData();
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    if (selectedPet) {
      AsyncStorage.setItem(SELECTED_PET_KEY, selectedPet);
    } else {
      AsyncStorage.removeItem(SELECTED_PET_KEY);
    }
  }, [selectedPet, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;
    if (petName) {
      AsyncStorage.setItem(PET_NAME_KEY, petName);
    } else {
      AsyncStorage.removeItem(PET_NAME_KEY);
    }
  }, [petName, isHydrated]);

  return (
    <PetContext.Provider value={{
      selectedPet, setSelectedPet,
      petName, setPetName,
      isHydrated,
    }}>
      {children}
    </PetContext.Provider>
  );
};

export const usePet = () => useContext(PetContext);