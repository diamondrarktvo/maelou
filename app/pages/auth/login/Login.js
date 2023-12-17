import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { Contexte } from '_utils';
import { useState, useContext, useCallback } from 'react';
import { Colors } from '_theme/Colors';
import { AuthService } from '_utils/services/authService';
import AsyncStorage from '@react-native-community/async-storage';

export default function Login({ navigation }) {
   const { isSigned, setIsSigned } = useContext(Contexte);
   const [erreur, setErreur] = useState(false);
   const [loading, setLoading] = useState(false);
   const [errormessage, setErrorMessage] = useState('');
   const [valueInput, setValueInput] = useState({
      numero_telephone: null,
      mot_de_passe: null,
   });

   const onSubmit = () => {
      setLoading(true);
      /*/try {
         AuthService.login(
            valueInput.numero_telephone,
            valueInput.mot_de_passe
         ).then((response) => {
            if (response.data) {
               AsyncStorage.setItem('@compte', JSON.stringify(response.data));
               setIsSigned(true);
               setErreur(false);
               setLoading(false);
               navigation.navigate('Accueil');
            } else {
               setErreur(true);
               setLoading(false);
               setErrorMessage('Email ou mot de passe incorrecte!');
            }
         });
      } catch (error) {
         setErreur(true);
         setErrorMessage('Erreur survenu au serveur');
         setLoading(false);
      }*/
      navigation.navigate('Accueil');
   };

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
                     keyboardType="phone-pad"
                     placeholder="Entrer votre numéro ..."
                     onChangeText={(text) =>
                        setValueInput({ ...valueInput, numero_telephone: text })
                     }
                  />
                  {erreur && errormessage !== 'Erreur survenu au serveur' && (
                     <Text style={{ color: Colors.orange, marginLeft: 15 }}>
                        {errormessage}
                     </Text>
                  )}

                  <TextInput
                     style={styles.input}
                     keyboardType="default"
                     placeholder="Entrer votre mot de passe ..."
                     secureTextEntry={true}
                     onChangeText={(text) =>
                        setValueInput({ ...valueInput, mot_de_passe: text })
                     }
                  />
                  {erreur && errormessage !== 'Erreur survenu au serveur' && (
                     <Text style={{ color: Colors.orange, marginLeft: 15 }}>
                        {errormessage}
                     </Text>
                  )}

                  <Text style={styles.forgotText}>Mot de passe oublié?</Text>
                  <TouchableOpacity onPress={() => onSubmit()}>
                     <View style={styles.bouton_connexion}>
                        <Text
                           style={{
                              textAlign: 'center',
                              fontSize: 16,
                              fontWeight: 'bold',
                              color: '#fff',
                           }}
                        >
                           {loading ? 'Loading...' : 'Se connecter'}
                        </Text>
                     </View>
                  </TouchableOpacity>
                  {erreur && errormessage === 'Erreur survenu au serveur' && (
                     <Text
                        style={{
                           color: Colors.orange,
                           textAlign: 'center',
                           marginBottom: 18,
                           fontWeight: 'bold',
                        }}
                     >
                        {errormessage}
                     </Text>
                  )}
                  <Text style={{ textAlign: 'center' }}>
                     Vous êtes nouveau ?{' '}
                     <Text
                        style={{ color: Colors.blue, fontWeight: 'bold' }}
                        onPress={() => navigation.navigate('Register')}
                     >
                        S'inscrire
                     </Text>
                  </Text>
               </View>
            </View>
         </View>
      </KeyboardAwareScrollView>
   );
}
