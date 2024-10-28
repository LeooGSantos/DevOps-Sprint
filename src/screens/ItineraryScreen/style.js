import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    paddingTop: '65%'
  },
  footerLoading: {
    paddingTop: '70%',
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    padding: 20, 
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#1a1a1a', 
    textAlign: 'left',
  },
  periodTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
    color: '#444', // Cinza escuro para contraste
    flexDirection: 'row',
    alignItems: 'center', // Para alinhar ícones e texto
  },
  periodIcon: {
    marginRight: 8, // Espaço entre o ícone e o título
  },
  activityDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  dayContainer: {
    marginBottom: 30,
    backgroundColor: '#fff', // Card branco para os dias
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  dayTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: '#eca406', // Azul mais vibrante para destacar os dias
    flexDirection: 'row',
    alignItems: 'center', // Alinhando ícones e textos nos títulos dos dias
  },
  activityContainer: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: '#f9f9f9', // Fundo suave
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  activityTime: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  activityDescription: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    backgroundColor: '#eca406',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 50, // Bordas arredondadas para suavidade
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centralizando o texto e o ícone
  },
  buttonIcon: {
    marginRight: 10, // Espaço entre ícone e texto
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  footer: {
    paddingTop: 22,
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
