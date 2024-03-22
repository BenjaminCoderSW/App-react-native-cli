// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lista" component={ListaScreen} />
      <Tab.Screen name="Mapa" component={MapaScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
};

const ListaScreen = () => (
  <View style={styles.container}>
    <Text>Estás en la Lista</Text>
  </View>
);

const MapaScreen = () => (
  <View style={styles.container}>
    <Text>Estás en el Mapa</Text>
  </View>
);

const PerfilScreen = () => (
  <View style={styles.container}>
    <Text>Estás en el Perfil</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
