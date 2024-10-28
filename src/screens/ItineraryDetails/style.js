import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eef1f5', // Fundo suave, moderno
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  arrow: {
    marginRight: 20,
    padding: 5, // Adiciona um pouco de espaço ao redor do ícone para torná-lo mais fácil de tocar
    backgroundColor: '#fff', // Fundo branco para o ícone
    borderRadius: 50, // Ícone redondo
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tinyLogo: {
    height: 30,
    width: 30,
    marginRight: 15,
  },
  title: {
    fontSize: 26, // Título maior para dar mais presença
    fontWeight: 'bold',
    color: '#333', // Cor escura
  },
  dayContainer: {
    marginBottom: 25,
    padding: 20,
    borderRadius: 12, // Bordas suaves para os cards dos dias
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  dayTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#eca406', // Azul moderno para o título dos dias
    marginBottom: 15,
  },
  periodTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 8,
    color: '#666', // Cinza suave
    flexDirection: 'row',
    alignItems: 'center', // Alinhando com ícones
  },
  periodIcon: {
    marginRight: 8, // Espaço para ícones (se adicionados)
  },
  activityContainer: {
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f9f9f9', // Fundo leve para as atividades
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  activityDescription: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  activityDetails: {
    fontSize: 14,
    color: '#555', // Detalhes em cinza claro
    marginTop: 5,
  },
  footer: {
    padding: 15,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
});

export default styles;
