import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { Contexte } from '_utils';
import { useState, useContext, useCallback } from 'react';
import { Colors } from '_theme/Colors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { AuthService } from '_utils/services/authService';

export default function Login({ navigation }) {
   const { isSigned, setIsSigned } = useContext(Contexte);
   const [erreur, setErreur] = useState(false);
   const [loading, setLoading] = useState(false);
   const [errormessage, setErrorMessage] = useState('');
   const [valueInput, setValueInput] = useState({
      numero_telephone: null,
      mot_de_passe: null,
   });

   const onChangeField = (e) => {
      let { text, target } = e.nativeEvent;
      if (target === 33) {
         setValueInput({ ...valueInput, numero_telephone: text });
      } else {
         setValueInput({ ...valueInput, mot_de_passe: text });
      }
   };

   const onSubmit = () => {
      setLoading(true);
      try {
         LoginService.login(
            valueInput.numero_telephone,
            valueInput.mot_de_passe
         ).then((response) => {
            if (response.status !== 200) {
               setErreur(true);
               setErrorMessage('Email ou mot de passe incorrecte!');
            }
            console.log(response);
            setLoading(false);
         });
      } catch (error) {
         setErrorMessage('Erreur survenu au serveur');
         setLoading(false);
      }
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
                     keyboardType="email-address"
                     placeholder="Entrer votre numéro ..."
                     onChange={(e) => onChangeField(e)}
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
                     onChange={(e) => onChangeField(e)}
                  />
                  {erreur && errormessage !== 'Erreur survenu au serveur' && (
                     <Text style={{ color: Colors.orange, marginLeft: 15 }}>
                        {errormessage}
                     </Text>
                  )}

                  <Text style={styles.forgotText}>Mot de passe oublié?</Text>
                  <TouchableOpacity>
                     <View style={styles.bouton_connexion}>
                        <Text
                           style={{
                              textAlign: 'center',
                              fontSize: 16,
                              fontWeight: 'bold',
                              color: '#fff',
                           }}
                           onPress={() => onSubmit()}
                        >
                           {loading ? 'Loading...' : 'Se connecter'}
                        </Text>
                     </View>
                  </TouchableOpacity>
                  {erreur && (
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
