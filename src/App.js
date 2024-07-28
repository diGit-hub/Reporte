import React from 'react';
import { MissionProvider } from './src/context/MissionContext';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <MissionProvider>
      <AppNavigator />
    </MissionProvider>
  );
};

export default App;
