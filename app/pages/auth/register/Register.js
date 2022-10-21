import {
   StyleSheet,
   Text,
   View,
   Image,
   TextInput,
   TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//import { Icon } from '@rneui/themed';
import { useState, useContext } from 'react';
import { Colors } from '_theme/Colors';
import { Contexte } from '_utils';
import styles from './styles';

export default function Register({ navigation }) {
   const { isSigned, setIsSigned } = useContext(Contexte);
   return (
      <KeyboardAwareScrollView>
         <View style={styles.view_container}>
            <Image
               source={require('_images/signup.gif')}
               style={styles.register_image}
            />
            <View style={styles.view_formulaire}>
               <View style={styles.view_head_form}>
                  <Text style={styles.title_form}>Inscription</Text>

                  <Text style={styles.text_formulaire}>
                     Veuillez completer les informations
                  </Text>
               </View>
               <View
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  style={styles.view_input}
               >
                  <TextInput
                     style={styles.input}
                     keyboardType="default"
                     placeholder="Entrer votre nom ..."
                  />

                  <TextInput
                     style={styles.input}
                     keyboardType="default"
                     placeholder="Entrer votre prénom ..."
                  />

                  <TextInput
                     style={styles.input}
                     keyboardType="default"
                     placeholder="Entrer votre adresse ..."
                  />

                  <TextInput
                     style={styles.input}
                     keyboardType="phone-pad"
                     placeholder="Entrer votre numéro mobile ..."
                  />

                  <TextInput
                     style={styles.input}
                     keyboardType="url"
                     placeholder="Url vers votre profil facebook ..."
                  />
                  <TextInput
                     style={styles.input}
                     keyboardType="default"
                     placeholder="Entrer votre mot de passe ..."
                     secureTextEntry={true}
                  />
                  <TouchableOpacity style={styles.bouton_connexion}>
                     <Text
                        style={{
                           textAlign: 'center',
                           fontSize: 16,
                           fontWeight: 'bold',
                           color: Colors.white,
                        }}
                        onPress={() => setIsSigned(true)}
                     >
                        S'inscrire
                     </Text>
                  </TouchableOpacity>
                  <Text style={{ textAlign: 'center' }}>
                     Vous avez déjà un compte?{' '}
                     <Text
                        style={{ color: Colors.blue, fontWeight: 'bold' }}
                        onPress={() => navigation.navigate('Login')}
                     >
                        Se connecter
                     </Text>
                  </Text>
               </View>
            </View>
         </View>
      </KeyboardAwareScrollView>
   );
}
