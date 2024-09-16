import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Header from '../../components/Header';

// Componente funcional principal
const Calc = () => {
  const [number, onChangeText] = React.useState('')
  const [number2, onChangeText2] = React.useState('')
  const [resultado, setResultado] = React.useState('')
  
  const soma = function () {
    setResultado(Number(number) + Number(number2))
    return number
  }
  const sub = function () {
    setResultado(Number(number) - Number(number2))
    return number
  }
  const mult = function () {
    setResultado(Number(number) * Number(number2))
    return number
  }
  const divi = function () {
    setResultado(Number(number) / Number(number2))
    return number
  }

  return (
    <View>
      <Header titulo={'Calculadora 1'}/>
      <View style={styles.container}>
        <Text>Calcula</Text>
        <TextInput
        onChangeText={onChangeText}
        value={number}
        placeholder='insira o numero aqui'
        keyboardType='numeric'
        />
        <TextInput
        onChangeText={onChangeText2}
        value={number2}
        placeholder='insira o numero aqui'
        keyboardType='numeric'
        />
        <Button
          title='+'
          onPress={() => soma()}
        />
        <Button
        title='-'
        onPress={() => sub()}
        />
        <Button
        title='x'
        onPress={() => mult()}
        />
        <Button
        title='/'
        onPress={() => divi()}
        />
        <Text>{resultado}</Text>
      </View>
    </View>
  );
};

// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

// Exportando o componente App como padrão
export default Calc;