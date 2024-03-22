// screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useColorScheme, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner'; // Importación corregida

const LoginScreen = ({ navigation }: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [scanning, setScanning] = useState(false);

  const validUsernames = ["Benjamin", "Eliud"];
  const validPassword = "Hola123123";

  const handleLogin = () => {
    if (validUsernames.includes(username) && password === validPassword) {
      // Autenticación exitosa, puedes navegar a otra pantalla o mostrar un mensaje de bienvenida
      navigation.navigate('Home');
    } else {
      // Autenticación fallida, muestra un mensaje de error
      Alert.alert("Error", "Usuario o contraseña incorrectos");
    }
  };

  const handleQRLogin = () => {
    // Lógica para iniciar sesión con código QR
    console.log('Iniciar sesión con código QR');
    setScanning(true); // Comienza el escaneo cuando se presiona el botón de inicio de sesión por QR
  };

  const handleQRScan = (e: any) => {
    // Lógica para manejar el escaneo del código QR
    const { data } = e;
    // Aquí deberías verificar si los datos del QR son válidos y actualizar los estados de usuario y contraseña
    const [scannedUsername, scannedPassword] = data.split(':');
    setUsername(scannedUsername);
    setPassword(scannedPassword);
    setScanning(false); // Detiene el escaneo después de leer el código QR
    handleLogin(); // Intenta iniciar sesión automáticamente con los datos del código QR escaneado
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkBackground]}>
      <Text style={[styles.titleText, { color: isDarkMode ? 'white' : 'black' }]}>Inicio de sesión</Text>
      <TextInput
        style={[styles.input, { color: isDarkMode ? 'white' : 'black' }]}
        placeholder="Usuario"
        placeholderTextColor={isDarkMode ? 'gray' : 'lightgray'}
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={[styles.input, { color: isDarkMode ? 'white' : 'black' }]}
        placeholder="Contraseña"
        placeholderTextColor={isDarkMode ? 'gray' : 'lightgray'}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={[styles.buttonText, { color: 'white' }]}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleQRLogin} style={styles.qrLoginButton}>
        <Text style={[styles.buttonText, { color: 'blue' }]}>Iniciar Sesión con QR</Text>
      </TouchableOpacity>
      {scanning && ( // Muestra el escáner QR si la variable de estado scanning es true
        <View style={styles.scannerContainer}>
          <QRCodeScanner
            onRead={handleQRScan}
            cameraStyle={StyleSheet.absoluteFill} // Estilo corregido
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkBackground: {
    backgroundColor: 'black',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 10,
    marginBottom: 20,
  },
  loginButton: {
    width: '80%',
    backgroundColor: 'blue',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  qrLoginButton: {
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scannerContainer: { // Agregado el estilo para el contenedor del escáner QR
    flex: 1,
    width: '100%',
  },
});

export default LoginScreen;
