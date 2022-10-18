import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Colors } from '_theme/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';

export default function Profil() {
   return (
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
         <View style={styles.view_container}>
            <View style={styles.head_profil}>
               <Image
                  style={styles.profil_image}
                  source={require('_images/profil.png')}
               />
               <Text style={styles.user_name}>Diamondra</Text>
            </View>
            <View style={styles.information_profil}>
               <Text style={styles.label_information_profil}>Prénom : </Text>
               <Text style={styles.value_information_profil}>Diamondra</Text>

               <Text style={styles.label_information_profil}>
                  Lien vers compte facebook :{' '}
               </Text>
               <Text style={styles.value_information_profil}>/dama.rktvo</Text>

               <Text style={styles.label_information_profil}>
                  Numéro télephone :{' '}
               </Text>
               <Text style={styles.value_information_profil}>
                  034 92 956 84
               </Text>
               <Text style={styles.label_information_profil}>Adresse : </Text>
               <Text style={styles.value_information_profil}>Amboditsiry</Text>
               <Text style={styles.label_information_profil}>
                  Mot de passe :{' '}
               </Text>
               <Text style={styles.value_information_profil}>MotDePasse</Text>
            </View>
            <View style={styles.footer_profil}>
               <View style={styles.action_bouton}>
                  <TouchableOpacity
                     style={[styles.bouton, { backgroundColor: Colors.blue }]}
                  >
                     <Text style={[styles.action, { color: Colors.white }]}>
                        Edit
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     style={[styles.bouton, { backgroundColor: Colors.orange }]}
                  >
                     <Text style={[styles.action, { color: Colors.white }]}>
                        Déconnexion
                     </Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      </KeyboardAwareScrollView>
   );
}
