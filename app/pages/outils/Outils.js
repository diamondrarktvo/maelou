import { View, Text, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Icon } from '@rneui/themed';

import HeaderGlobal from '_components/header/HeaderGlobal';
import { Colors } from '_theme/Colors';

export default function Outils({ navigation }) {
   return (
      <KeyboardAwareScrollView style={{ backgroundColor: Colors.background }}>
         <View style={styles.view_container}>
            <View style={styles.head_content}>
               <HeaderGlobal navigation={navigation} />
            </View>
            <View style={styles.body_content}>
               <View style={styles.banniere}>
                  <Text style={styles.texte_banniere}>
                     Vous trouvez ici des outils dont vous aurez besoin.....
                  </Text>
                  <Image
                     style={styles.image_banniere}
                     source={require('_images/banniere_3d.png')}
                  />
               </View>
               <View style={styles.link_to_other_view}>
                  <TouchableOpacity activeOpacity={0.7}>
                     <View style={styles.one_link_item}>
                        <Text style={styles.text_item}>
                           Map (position des postes d'urgences)
                        </Text>
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={0.7}>
                     <View style={styles.one_link_item}>
                        <Text style={styles.text_item}>Numéro police</Text>
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={0.7}>
                     <View style={styles.one_link_item}>
                        <Text style={styles.text_item}>Offline</Text>
                     </View>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      </KeyboardAwareScrollView>
   );
}
