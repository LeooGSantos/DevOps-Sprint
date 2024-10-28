import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  login: {
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#eca406',
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    width: '40%',
    alignItems: 'center',
  },
  optionButtonSelected: {
    backgroundColor: '#eca406',
  },
  optionText: {
    fontSize: 16,
  },
  optionTextSelected: {
    fontWeight: 'bold',
  },
});

export default styles;