import { View, Text, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Icon } from '@rneui/themed';

import HeaderGlobal from '_components/header/HeaderGlobal';
import { Colors } from '_theme/Colors';

export default function Home() {
   return (
      <KeyboardAwareScrollView style={{ backgroundColor: Colors.background }}>
         <View style={styles.view_container}>
            <View style={styles.head_content}>
               <HeaderGlobal />
            </View>

            <View style={styles.body_content}>
               <View>
                  <Text style={styles.big_titre_information}>
                     Êtes-vous en danger en ce moment ?
                  </Text>
                  <Text style={styles.text_information}>
                     Si vous vous sentez que vous êtes en danger, n'attendez
                     plus fait nous savoir et on sera là pour vous aider.
                  </Text>
               </View>
               <TouchableOpacity activeOpacity={0.8}>
                  <View style={styles.shadow_3}>
                     <View style={styles.shadow_2}>
                        <View style={styles.shadow_1}>
                           <View style={styles.section_bouton}>
                              <Text style={styles.bouton_sos}>SOS</Text>
                           </View>
                        </View>
                     </View>
                  </View>
               </TouchableOpacity>
            </View>
         </View>
      </KeyboardAwareScrollView>
   );
}
