// screens/PerfilScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PerfilScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Contenido del Perfil</Text>
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

export default PerfilScreen;
