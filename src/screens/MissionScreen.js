import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MissionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Missão</Text>
      <Button
        title="Ver Zonas"
        onPress={() => navigation.navigate('Zone')}
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

export default MissionScreen;
