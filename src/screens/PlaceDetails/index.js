import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import styles from "./style";

const PlaceDetails = ({ route, navigation }) => {
  const { place } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={place.image} style={styles.image} />

        {/* Botão de voltar para a Home */}
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Voltar para Home</Text>
        </Pressable>

        <Text style={styles.title}>{place.name}</Text>

        {/* Exibir a descrição real */}
        <Text style={styles.description}>
          {place.description ? place.description : `Descrição detalhada sobre ${place.name}...`}
        </Text>

        <View style={styles.footer}>
        <Text style={styles.footerText}>
          &#169; TechPeach Copyright 2024
        </Text>
      </View>
      
      </ScrollView>

    </View>
  );
};

export default PlaceDetails;
