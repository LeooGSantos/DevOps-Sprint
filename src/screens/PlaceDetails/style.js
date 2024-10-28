import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#eca406',
    padding: 10,
    marginTop: 10, // Espaçamento para não colar no título
    marginBottom: 20, // Espaçamento para não colar na descrição
    borderRadius: 5,
    alignSelf: 'flex-start', // Alinha o botão à esquerda
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
});

export default styles;
