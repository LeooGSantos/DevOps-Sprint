import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';

const AddressInput = ({ address, setAddress, isRequired = true }) => {
  const handleAddressChange = (input) => {
    setAddress(input); 
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.login}>Onde você ficará hospedado em São Paulo? (Digite o Endereço) {isRequired && <Text style={styles.required}>*</Text>}</Text> 
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={handleAddressChange}
        placeholder="Digite o endereço"
        multiline 
      />
    </View>
  );
};

export default AddressInput;