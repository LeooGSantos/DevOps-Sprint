import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import { app } from '../../../firebaseConfig';
import InputText from '../../components/InputText/index';
import styles from "./style";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);

  const auth = getAuth(app);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.navigate('Home'); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/login.jpg')}
      style={styles.image}
      blurRadius={1}
    >
      <View style={styles.container}>
        <Text style={styles.title}>TechPeach</Text>

        {error && <Text style={styles.errorText}>{error}</Text>}

        <InputText
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder='email'
        />

        <InputText
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          placeholder='senha'
          secureTextEntry // Para esconder a senha
        />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#D49203FF' : '#FFBE31FF' }
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.text}>Login</Text>
        </Pressable>

        {/* Adicione um botão para navegar ao cadastro */}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#D49203FF' : '#FFBE31FF' }
          ]}
          onPress={() => navigation.navigate('Register')} // Navega para a tela de Cadastro
        >
          <Text style={styles.text}>Cadastrar</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

export default LoginScreen;