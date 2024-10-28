import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from "./style";

const DetalhesItinerario = ({ route }) => {
  const { itinerary } = route.params;

  const navigation = useNavigation();

  // Função para formatar a resposta da IA
  const formatItinerary = (itineraryText) => {
    if (!itineraryText) return null;

    // Divide o texto em dias usando um regex para encontrar "Dia X"
    const dayRegex = /Dia (\d+)/g;
    let days = [];
    let match;
    while ((match = dayRegex.exec(itineraryText)) !== null) {
      days.push(match.index);
    }

    // Se não encontrar nenhum "Dia X", assume um único dia
    if (days.length === 0) {
      days = [0];
    }

    const formattedDays = days.map((startIndex, dayIndex) => {
      const endIndex = dayIndex < days.length - 1 ? days[dayIndex + 1] : itineraryText.length;
      const dayText = itineraryText.substring(startIndex, endIndex);

      // Extrai o número do dia
      const dayNumber = dayIndex + 1;

      // Divide as atividades, removendo linhas vazias e o título "Dia X"
      const activities = dayText.split('\n')
        .filter(line => line.trim() !== '' && !line.startsWith('Dia '))
        .map(line => line.trim()); // Remove espaços extras no início e fim

      const formattedActivities = activities.map((activity, activityIndex) => {
        // Remove os asteriscos extras
        activity = activity.replace(/\*\*/g, '');

        // Junta o horário quebrado
        activity = activity.replace(/(\d+)\n(\d+)/g, '$1$2');

        // Verifica se a linha é um título de período (Manhã, Tarde, Noite)
        if (activity.match(/(Manhã|Tarde|Noite)/)) {
          return (
            <Text key={`${dayIndex}-${activityIndex}`} style={styles.periodTitle}>
              {activity}
            </Text>
          );
        }

        // Divide a atividade em descrição e detalhes (custo, link)
        let [description, ...details] = activity.split(':');
        details = details.join(':').trim();

        return (
          <View key={`${dayIndex}-${activityIndex}`} style={styles.activityContainer}>
            <Text style={styles.activityDescription}>{description.trim()}</Text>
            {details ? <Text style={styles.activityDetails}>{details}</Text> : null}
          </View>
        );
      });

      return (
        <View key={dayIndex} style={styles.dayContainer}>
          <Text style={styles.dayTitle}>Dia {dayNumber}</Text>
          {formattedActivities}
        </View>
      );
    });

    return formattedDays;
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              style={styles.tinyLogo}
              source={require('../../../assets/left-arrow.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Detalhes do Itinerário</Text>
        </View>

        {formatItinerary(itinerary)}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          &#169; TechPeach Copyright 2024
        </Text>
      </View>
    </View>
  );
};

export default DetalhesItinerario;
