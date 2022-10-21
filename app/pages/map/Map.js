import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { styles } from './styles';
import { Icon } from '@rneui/themed';

import { Colors } from '_theme/Colors';

export default function Map() {
   return (
      <View style={styles.view_container}>
         <MapView
            provider="google"
            style={[styles.map, StyleSheet.absoluteFillObject]}
            showsUserLocation={true}
         />
      </View>
   );
}
