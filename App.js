import './ignoreWarning';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Colors } from '_theme/Colors';

import Navigation from '_components/navigation/navigation';

export default function App() {
   return (
      <SafeAreaProvider>
         <StatusBar backgroundColor={Colors.white} />
         <Navigation />
      </SafeAreaProvider>
   );
}
