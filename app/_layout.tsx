import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { styles } from "./login/style";


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'DM-Sans-Regular': require('../assets/fonts/DMSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:true}}/>
      <Stack.Screen name="login" options={{headerShown:true}}/>
    </Stack>
  );
}
