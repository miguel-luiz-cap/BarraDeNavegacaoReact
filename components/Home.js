import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Home() {
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Página Principal </Text>
      
      
    </View>

  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddee66',
  },
  titulo: {
    fontSize: 20,
    color: '#445500',
  },


})