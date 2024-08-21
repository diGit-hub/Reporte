import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import Footer from '@/components/Footer';
import {StyleSheet} from 'react-native';
require('dotenv').config();

const apiKey = process.env.API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "reporte-ms.firebaseapp.com",
  projectId: "reporte-ms",
  storageBucket: "reporte-ms.appspot.com",
  messagingSenderId: "617090202237",
  appId: "1:617090202237:web:31061baa7db55b9ca80f14",
  measurementId: "G-GWMEXLB2YC"
};

// Initialize Firebase if it hasn't been initialized yet
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const App = () => {
  useEffect(() => {
    // Initialize Firestore
    const db = getFirestore();

    // Add a document
    addDoc(collection(db, 'users'), {
      first: 'Ada',
      last: 'Lovelace',
      born: 1815
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });

    // Conditionally initialize Firebase Analytics
    if (typeof window !== 'undefined') {
      getAnalytics();
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>Não há nada aqui...</Text>
      <Footer/>
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