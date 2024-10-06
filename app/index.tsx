import React, { useEffect } from 'react';
import { View, Text, Button, Touchable, TouchableOpacity } from 'react-native';
import { initializeApp, getApps } from 'firebase/app';
import Footer from '@/components/Footer';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const apiKey = process.env.API_KEY || 'chave-padrão';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Não há nada aqui...</Text>
      <Link href="/login">Login</Link>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
});

export default App;
