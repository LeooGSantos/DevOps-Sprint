import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center', // Centraliza verticalmente o conteúdo
    padding: 20, 
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    margin: 20,
    paddingBottom: '30%',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '700',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.95)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 4,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 100,
  },
  text: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000',
  },
  datePickerContainer: {
    marginBottom: 10,
  },
  datePickerLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
    fontWeight: 700
  },
  datePicker: {
    width: '100%',
    height: '40px', 
    border: '1px solid #eca406', 
    borderRadius: '6px', 
    padding: '10px',
    color: '#000', 
    backgroundColor: '#fff',  
  },
});

export default styles;