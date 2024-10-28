import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Fundo claro
  },
  arrow: {
    marginRight: 90,
    padding: 5, // Adiciona um pouco de espaço ao redor do ícone
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
    borderBottomWidth: 2,
    borderBottomColor: '#eca406', // Cor laranja para a borda inferior
    paddingBottom: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinha o botão de voltar à esquerda
    padding: 20,
    marginBottom: 20,
  },
  description: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#666', // Cor do texto da descrição
  },
  submitButton: {
    backgroundColor: '#eca406', // Cor laranja para o botão
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: '#fff', // Fundo branco para o formulário
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eca406', // Borda laranja para o formulário
    padding: 16,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#eca406', // Borda laranja para campos de entrada
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
    fontSize: 16,
    color: '#333', // Cor do texto para boa legibilidade
  },
  button: {
    backgroundColor: '#eca406', // Cor laranja para botões
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectButton: {
    borderWidth: 1,
    borderColor: '#eca406', // Borda laranja para botões de seleção
    backgroundColor: '#fff', // Fundo branco para contraste
    borderRadius: 4,
    padding: 10,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectButtonText: {
    color: '#eca406', // Texto laranja para botões de seleção
    fontSize: 16,
  },
  focusOption: {
    borderWidth: 1,
    borderColor: '##eca406', // Borda laranja para opções de foco
    borderRadius: 4,
    padding: 10,
    marginBottom: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusOptionText: {
    color: '#eca406',
    fontSize: 16,
  },
  required: {
    color: 'red', 
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
