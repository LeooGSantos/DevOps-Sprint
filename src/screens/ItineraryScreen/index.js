import * as GoogleGenerativeAI from '@google/generative-ai';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';
import { getAuth } from 'firebase/auth';
import { app } from '../../../firebaseConfig';

import { useItineraries  } from '../../components/ItineraryContext';

import styles from "./style";

// IMport das reviews JSON
import cafeBar from '../../../assets/reviews/Cafe-Restaurante-Bar-.json';
import comprasData from '../../../assets/reviews/Compras-.json';
import culinariaData from '../../../assets/reviews/CulinariaBrasileira-Italiana-Mexicana-Japonesa-.json';
import lugaresNoturnosData from '../../../assets/reviews/LugaresNoturnos-.json';
import museusData from '../../../assets/reviews/Museus-Teatros-.json';
import parquesData from '../../../assets/reviews/Parque-Zoo-Aquario-Trilha-Jardim.json';

const ItineraryScreen = ({ route, navigation }) => {
  const { formData } = route.params;
  const [itinerary, setItinerary] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth(app);

  const { addItinerary } = useItineraries();

  const API_KEY = 'AIzaSyBMrNd8C3B5dCBevyM6kez4UTdH2GaL4o4'; // Replace with your API Key

  useEffect(() => {
    const fetchItinerary = async () => {
      if (!formData) {
        setIsLoading(false);
        return;
      }

      try {
        // Combine all reviews into a single array
        const allReviews = [
          ...parquesData.SheetJS,
          ...lugaresNoturnosData.Página1,
          ...comprasData.Página1,
          ...cafeBar.Página1,
          ...culinariaData.Página1,
          ...museusData.reviews,
        ];

        // Filtra os reviews que possuem a propriedade 'Lugar' e não são nulos
        const validReviews = allReviews.filter(review => review && review.Lugar);

        // Usa o array validReviews no map
        const reviewsSummary = validReviews.map(review => {
          return `Lugar: ${review.Lugar}, Nota: ${review.Nota}/5, Avaliação: ${review.Avaliacao}`;
        }).join('\n');

        // Set up the chat session with the reviews data included in the history
        const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }); // Use a suitable Gemini model

        const chatSession = model.startChat({
          generationConfig: {
            temperature: 1,
            topP: 0.95,
            topK: 64,
            maxOutputTokens: 8192,
            responseMimeType: "text/plain",
          },
          history: [
            {
              role: "user",
              parts: [
                {
                  text: `Analise as seguintes avaliações de lugares em São Paulo para gerar o melhor itinerário para o usuário:
                  ${reviewsSummary}`,
                },
              ],
            },
          ],
        });

        // Send the user's itinerary preferences as the next input
        const userMessage = `
          Crie um itinerário de viagem detalhado para cidade de São Paulo com base nas seguintes informações que o usuário informou:
          - Endereço que estou em São Paulo: ${formData.address} 
          - Duração da viagem: ${formData.days} dias
          - Preferências: ${formData.selectedOptions.join(', ')}
          - Acompanhantes: ${formData.travelCompanion}
          - Quantidade de pessoas: ${formData.peopleCount}
          - Orçamento: R$ ${formData.budget}
          - Exclusões: ${formData.exclusions}
          - Restrições alimentares: ${formData.dietaryRestriction}
          - Acessibilidade: ${formData.accessibilityOption}
          - Culinária: ${formData.selectedCuisines.join(', ')}
          - Evento: ${formData.eventDetails}

          Inclua sugestões de:
          - Horários para cada atividade
          - De informações para o usuário que ele gostaria de saber de cada local e do porque ele gostaria de ir lá
          - Em cada recomendação de lugar adicione uma avaliação positiva tendo a data com ano de publicação e quem escreveu dos arquivos que você analisou sendo do google reviews e trip advisor (não mostre usuário anônimo e sem data) , para mostrar que as recomendações não são inventadas
          - Meios de transporte
          - Custo estimado de cada atividade (se possível)
          - Links para mais informações sobre cada local
          - Dicas adicionais para aproveitar ao máximo a viagem a São Paulo! 
        `;

        const result = await chatSession.sendMessage(userMessage);
        const generatedItinerary = result.response.text();

        setItinerary(generatedItinerary);
      } catch (error) {
        console.error('Erro ao gerar o itinerário:', error);
        alert('Erro ao gerar o itinerário. Tente novamente.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchItinerary();
  }, [formData]);


  const handleSaveItinerary = async () => {
    try {
      const user = auth.currentUser;

      if (!user) {
        alert('Erro', 'Usuário não autenticado. Faça login para salvar o itinerário.');
        return;
      }

      // Use addItinerary do contexto:
      addItinerary(itinerary); 

      alert('Sucesso', 'Itinerário salvo com sucesso!');
      navigation.navigate('Home'); 
    } catch (error) {
      console.error('Erro ao salvar o itinerário:', error);
      alert('Erro', 'Ocorreu um erro ao salvar o itinerário. Tente novamente.');
    }
  };

  // useEffect para salvar o itinerário no MyItinerary (movido para fora)
  useEffect(() => {
    if (route.params?.newItinerary) {
      navigation.getParent()?.getState()?.routes.find(route => route.name === 'MeusItinerarios')
        ?.params?.handleSaveItinerary(route.params.newItinerary);

      // Navegue para 'Home' após salvar o itinerário
      navigation.navigate('Home');
    }
  }, [route.params?.newItinerary]);

  const formatItinerary = (itineraryText) => {
    if (!itineraryText) return null;

    const dayRegex = /Dia (\d+)/g;
    let days = [];
    let match;
    while ((match = dayRegex.exec(itineraryText)) !== null) {
      days.push(match.index);
    }

    if (days.length === 0) {
      days = [0];
    }

    const formattedDays = days.map((startIndex, dayIndex) => {
      const endIndex = dayIndex < days.length - 1 ? days[dayIndex + 1] : itineraryText.length;
      const dayText = itineraryText.substring(startIndex, endIndex);

      const dayNumber = dayIndex + 1;

      const activities = dayText.split('\n')
        .filter(line => line.trim() !== '' && !line.startsWith('Dia '))
        .map(line => line.trim());

      const formattedActivities = activities.map((activity, activityIndex) => {
        activity = activity.replace(/\*\*/g, '');
        activity = activity.replace(/(\d+)\n(\d+)/g, '$1$2');

        if (activity.match(/(Manhã|Tarde|Noite)/)) {
          return (
            <Text key={`${dayIndex}-${activityIndex}`} style={styles.periodTitle}>
              {activity}
            </Text>
          );
        }

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
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <View style={styles.loading} >
            <ActivityIndicator size="large" color="#eca406" />
            <Text>Gerando seu itinerário...</Text>
          </View>

          <View style={styles.footerLoading}>
            <Text style={styles.footerText}>
              &#169; TechPeach Copyright 2024
            </Text>
          </View>
        </View>
      ) : (
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>Seu Itinerário:</Text>
          {formatItinerary(itinerary)}

          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Formulario')}>
              <Text style={styles.buttonText}>Refazer</Text>
            </Pressable>

            <Pressable
              style={styles.button}
              onPress={handleSaveItinerary} 
            >
              <Text style={styles.buttonText}>Salvar Itinerário</Text>
            </Pressable>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              &#169; TechPeach Copyright 2024
            </Text>
          </View>

        </ScrollView>
      )}

      
    </View>
  );
};

export default ItineraryScreen;
