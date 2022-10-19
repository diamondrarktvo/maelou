import './ignoreWarning';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Profil } from '_pages';
import { Colors } from '_theme/Colors';

export default function App() {
   return (
      <SafeAreaProvider>
         <StatusBar backgroundColor={Colors.white} />

         <Profil />
      </SafeAreaProvider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});
