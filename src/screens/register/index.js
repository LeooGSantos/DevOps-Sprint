import React, { useState } from 'react';
import { View, Text, Pressable, ImageBackground, ScrollView, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { app } from '../../../firebaseConfig';
import DatePicker from 'react-datepicker'; // Importe o DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Importe os estilos
import InputText from '../../components/InputText/index';
import styles from './style';

const Register = ({ navigation }) => {
  const [nome, setNome] = useState('');

  const [dataNascimento, setDataNascimento] = useState(new Date()); // Use Date para data de nascimento

  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const auth = getAuth(app);
  const db = getFirestore(app);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dataNascimento;
    setShowDatePicker(false);
    setDataNascimento(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const calculateAge = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleCadastro = async () => {
    const age = calculateAge(dataNascimento);

    if (age < 12) {
      alert('Você precisa ter uma idade válida.');
      return;
    }

    if (!email.includes('@')) { 
      alert('Por favor, insira um endereço de email válido.');
      return;
    }

    if (senha.length < 6) { 
      alert('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: nome,
      });

      const mesAnoNascimento = `${dataNascimento.toLocaleString('default', { month: 'long' })} ${dataNascimento.getFullYear()}`;

      alert('Sucesso na criação de login!');

      await setDoc(doc(db, 'users', user.uid), {
        nome: nome,
        dataNascimento: mesAnoNascimento, // Salva apenas mês e ano
        endereco: endereco,
        email: email,
      });

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
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>TechPeach</Text>
            <Text style={styles.title}>Cadastro</Text>
          </View>

          {error && <Text style={styles.errorText}>{error}</Text>}

          <InputText
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />

          <View style={styles.datePickerContainer}> 
            <Text style={styles.datePickerLabel}>Data de Nascimento:</Text>
            
            <DatePicker
              selected={dataNascimento}
              onChange={(date) => setDataNascimento(date)}
              dateFormat="MMMM yyyy" 
              showMonthYearPicker 
              locale="pt-BR"
              style={styles.datePicker}
            />
          </View>

          <InputText
            style={styles.input}
            placeholder="Endereço"
            value={endereco}
            onChangeText={setEndereco}
          />

          <InputText
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <InputText
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          {/* Botão Cadastrar */}
          <Pressable
            onPress={handleCadastro}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#D49203FF' : '#FFBE31FF' }
            ]}
          >
            <Text style={styles.text}>Cadastrar</Text>
          </Pressable>

          {/* Botão Voltar */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#D49203FF' : '#FFBE31FF' }
            ]}
            onPress={() => navigation.navigate('Login')} 
          >
            <Text style={styles.text}>Voltar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Register;