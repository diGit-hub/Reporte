import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DistrictScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Distritos</Text>
      <Button
        title="Ver Missionários"
        onPress={() => navigation.navigate('Missionary')}
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

export default DistrictScreen;
