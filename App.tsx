// App.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Navigation from './Navigation';

const App = () => {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 6000); // Duración del splash en milisegundos

    return () => clearTimeout(timer); // Limpia el timer en la desmontura del componente
  }, []);

  return (
    <>
      {splashVisible && (
        <View style={styles.splashContainer}>
          <Image
            source={require('./img/imagen-splash.webp')} // Ruta de la imagen de splash
            style={styles.splashImage}
          />
        </View>
      )}
      {!splashVisible && <Navigation />}
    </>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default App;
