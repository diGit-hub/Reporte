import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ZoneScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zonas</Text>
      <Button
        title="Ver Distritos"
        onPress={() => navigation.navigate('District')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ZoneScreen;
