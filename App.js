import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import React, { useState } from 'react';

export default function MyComponent() {
  const [valorprimario, setValorPrimario] = useState('');
  const [valorJuros, setValorJuros] = useState('');
  const [numeroParcelas, setNumeroParcelas] = useState('');
  const [resultado, setResultado] = useState(0);

  const calcularFinanciamento = () => {
    const principal = parseFloat(valorprimario);
    const juros = parseFloat(valorJuros) / 100; 
    const parcelas = parseFloat(numeroParcelas);
    const resultado = principal + ((principal * juros) * parcelas);
    setResultado(resultado); 
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./img/sicredi.jpg')} // Substitua pelo caminho real da sua imagem
        style={styles.imagem} // Estilo da imagem (opcional)
      />
    
      <Text style={styles.texto}>Valor do financiamento</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValorPrimario(text)}
        keyboardType='numeric'
      />
      <Text style={styles.texto}>Porcentagem de juros</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValorJuros(text)}
        keyboardType='numeric'
      />
      <Text style={styles.texto}>Número de parcelas</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNumeroParcelas(text)}
        keyboardType='numeric'
      />
      <Button 
        color= '#386641'
        title="Calcular"
        onPress={calcularFinanciamento}
      />
      <Text style={styles.texto}>Valor total do financiamento:  {resultado}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#45b653',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    fontVariant: 'bold',
    fontSize: 26,
    marginVertical: 10,
  },
  input: {
    fontSize: 20,
    color: 'white',
    width: 200,
    height: 40,
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 10,
    padding: 5 ,

  },
  titulo: {
    color: 'white',
    fontSize: 100,
  },
  imagem: {
    width: 400, // Largura da imagem
    height: 230, // Altura da imagem
  },
});
