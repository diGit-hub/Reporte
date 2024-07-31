import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyokALQDyoQ1T1OYyIcvI6J3LN6GC0ztc",
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
    <View>
      <Text>Meu App Firebase</Text>
    </View>
  );
};

export default App;