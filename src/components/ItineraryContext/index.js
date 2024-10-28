import React, { createContext, useState, useContext, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { app } from '../../../firebaseConfig';

const ItineraryContext = createContext();

export const ItineraryProvider = ({ children }) => {
  const [updateCounter, setUpdateCounter] = useState(0);
  const [itineraries, setItineraries] = useState([]);
  const auth = getAuth(app);
  const db = getFirestore(app);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setItineraries(userData.itinerarios || []);
          } else {
            console.log("Documento do usuário não encontrado!");
          }
        } catch (error) {
          console.error("Erro ao buscar itinerários:", error);
        }
      } else {
        setItineraries([]);
      }
    });

    return () => unsubscribe(); 
  }, []); 


  const addItinerary = async (newItinerary) => {
    try {
      const user = auth.currentUser;
      if (user) {
        await updateDoc(doc(db, 'users', user.uid), {
          itinerarios: arrayUnion({
            id: Date.now(),
            data: newItinerary,
          }),
        });
        setUpdateCounter(prevCounter => prevCounter + 1);
      } else {
        console.error('Usuário não está logado!');
      }
    } catch (error) {
      console.error('Erro ao adicionar itinerário:', error);
    }
  };

  const deleteItinerary = async (itineraryId) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        const currentItinerarios = userDoc.data()?.itinerarios || [];

        const updatedItinerarios = currentItinerarios.filter((it) => it.id !== itineraryId);

        await updateDoc(userDocRef, { itinerarios: updatedItinerarios });
        setUpdateCounter(prevCounter => prevCounter + 1); 
      } else {
        console.error('Usuário não está logado!');
      }
    } catch (error) {
      console.error('Erro ao remover itinerário:', error);
    }
  };

  return (
    <ItineraryContext.Provider value={{ itineraries, addItinerary, deleteItinerary, updateCounter }}>
      {children}
    </ItineraryContext.Provider>
  );
};

export const useItineraries = () => {
  return useContext(ItineraryContext);
};