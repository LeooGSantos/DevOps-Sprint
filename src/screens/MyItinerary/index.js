import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import { getAuth } from 'firebase/auth'; 
import { getFirestore, doc, getDoc } from 'firebase/firestore'; 
import { app } from '../../../firebaseConfig'; 
import { useItineraries } from '../../components/ItineraryContext'; 

import styles from "./style";

const MyItinerary = ({ navigation }) => {
  const { deleteItinerary, updateCounter } = useItineraries();
  const [itineraries, setItineraries] = useState([]); 
  const auth = getAuth(app);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setItineraries(userData.itinerarios || []); 
          } else {
            console.log("Documento do usuário não encontrado!");
          }
        } else {
          console.log('Usuário não está logado!');
        }
      } catch (error) {
        console.error("Erro ao buscar itinerários:", error);
      }
    };

    fetchItineraries(); 
  }, [updateCounter]); 


  const handleItineraryPress = (itinerary) => {
    navigation.navigate('DetalhesItinerario', { itinerary: itinerary.data });
  };

  const handleDeleteItinerary = async (itineraryId) => {
    try {
      // Chame a função deleteItinerary do contexto:
      await deleteItinerary(itineraryId); 
      
      alert('Sucesso', 'Itinerário excluído com sucesso!'); 
    } catch (error) {
      console.error('Erro ao excluir o itinerário:', error);
      alert('Erro', 'Ocorreu um erro ao excluir o itinerário.');
    }
  };


  const renderItineraryItem = ({ item }) => (
    <View style={styles.itineraryItem} key={item.id}>
      <TouchableOpacity
        onPress={() => handleItineraryPress(item)}
        style={styles.itineraryContent}
      >
        <Text style={styles.itineraryTitle}>Itinerário</Text> 
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleDeleteItinerary(item.id)} 
        style={styles.deleteButton}
      >
        <Image
          style={styles.tinyLogo}
          source={require('../../../assets/delete.png')}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.arrow}>
          <Image
              style={styles.tinyLogo}
              source={require('../../../assets/left-arrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Meus Itinerários</Text>
      </View>

      {itineraries && itineraries.length === 0 ? ( 
        <Text style={styles.emptyText}>Nenhum itinerário encontrado.</Text>
      ) : (
        <FlatList
          data={itineraries}
          renderItem={renderItineraryItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          &#169; TechPeach Copyright 2024
        </Text>
      </View>
    </View>
  );
};

export default MyItinerary;
