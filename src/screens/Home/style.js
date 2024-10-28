import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 45,
    fontWeight: '700',
    color: '#000',
  },
  logoutButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  divText: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 10,
  },
  textOverlay: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
    padding: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.85)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  containerButtons: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginVertical: 10,
    borderRadius: 6,
    width: '45%', // Ajuste para que os botões fiquem lado a lado
  },
  text: {
    fontSize: 16,
    fontWeight: '800',
    color: '#000',
  },
  recommendedSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  recommendedTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  recommendedItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  recommendedImage: {
    width: 120,
    height: 80,
    borderRadius: 8,
    marginBottom: 5,
  },
  recommendedText: {
    fontSize: 14,
    fontWeight: '500',
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
