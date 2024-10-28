
import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ItineraryProvider } from './src/components/ItineraryContext';
import MainNavigator from './MainNavigator';

const App = () => {
  return (
    <SafeAreaView style={styles.container} >
      <ItineraryProvider> 
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </ItineraryProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;