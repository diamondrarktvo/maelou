import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { Colors } from '_theme/Colors';

export default function Login() {
   return (
      //utile pour regler le probleme de vue quand le clavier virtuelle s'ouvre
      <KeyboardAwareScrollView>
         <View style={styles.view_container}>
            <Image
               style={styles.login_image}
               source={require('_images/login.gif')}
            />
            <View style={styles.view_formulaire}>
               <View style={styles.view_head_form}>
                  <Text style={styles.title_form}>Connexion</Text>

                  <Text style={styles.text_formulaire}>
                     Entrer vos informations pour continuer
                  </Text>
               </View>
               <View
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  style={styles.view_input}
               >
                  <TextInput
                     style={styles.input}
                     keyboardType="email-address"
                     placeholder="Entrer votre numéro ..."
                  />
                  <TextInput
                     style={styles.input}
                     keyboardType="default"
                     placeholder="Entrer votre mot de passe ..."
                     secureTextEntry={true}
                  />
                  <Text style={styles.forgotText}>Mot de passe oublié?</Text>
                  <TouchableOpacity style={styles.bouton_connexion}>
                     <Text
                        style={{
                           textAlign: 'center',
                           fontSize: 16,
                           fontWeight: 'bold',
                           color: '#fff',
                        }}
                     >
                        Se connecter
                     </Text>
                  </TouchableOpacity>
                  <Text style={{ textAlign: 'center' }}>
                     Vous êtes nouveau ?{' '}
                     <Text style={{ color: Colors.blue, fontWeight: 'bold' }}>
                        S'inscrire
                     </Text>
                  </Text>
               </View>
            </View>
         </View>
      </KeyboardAwareScrollView>
   );
}
