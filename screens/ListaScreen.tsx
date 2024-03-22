// screens/ListaScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListaScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Contenido de la Lista</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListaScreen;
