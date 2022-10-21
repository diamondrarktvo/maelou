import { View, Text, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Icon } from '@rneui/themed';

import HeaderGlobal from '_components/header/HeaderGlobal';
import { Contexte } from '_utils';
import { Colors } from '_theme/Colors';
import { useState, useContext, useEffect } from 'react';
import { useGetLocation } from '_utils/hooks/useGetLocation';
import { AuthService } from '_utils/services/authService';
import AlertService from "_utils/services/alertServices";


export default function Home({ navigation }) {
   //all states
   const { position, errorMsgLocation } = useContext(Contexte);

   //all logics
   const sendSOS = async () => {
      let compteStr = await AuthService.getCurrentCompte();
      let compte = JSON.parse(compteStr);
      let id_Utilisateur = compte.id;
      if (errorMsgLocation) {
         console.log(errorMsgLocation);
      } else {
         AlertService.SendAlert(position.longitude, position.latitude, id_Utilisateur)
            .then((response) => {
               alert("Votre SOS d'urgence a été envoyé à la police!!");
            })
            .catch((er) => {
               alert("Il y a une erreur survenue lors de l'envoie");
            })
      }
   };

   const sendHELP = async () => {
      let compteStr = await AuthService.getCurrentCompte();
      let compte = JSON.parse(compteStr);
      let id_Utilisateur = compte.id;
      if (errorMsgLocation) {
         console.log(errorMsgLocation);
      } else {
         AlertService.SendHelp(position.longitude, position.latitude, id_Utilisateur)
            .then((response) => {
               alert("Votre demande d'aide a été envoyé à la police!!");
            })
            .catch((er) => {
               alert("Il y a une erreur survenue lors de l'envoie");
            })
      }
   };

   //all efects

   return (
      <KeyboardAwareScrollView style={{ backgroundColor: Colors.background }}>
         <View style={styles.view_container}>
            <View style={styles.head_content}>
               <HeaderGlobal navigation={navigation} />
            </View>

            <View style={styles.body_content}>
               <View>
                  <Text
                     style={[
                        styles.big_titre_information,
                        { color: Colors.orange },
                     ]}
                  >
                     Êtes-vous en danger en ce moment ?
                  </Text>
                  <Text style={styles.text_information}>
                     Si vous vous sentez que vous êtes en danger, n'attendez
                     plus fait nous savoir et on sera là pour vous aider.
                  </Text>
               </View>
               <View style={styles.shadow_3}>
                  <View style={styles.shadow_2}>
                     <View style={styles.shadow_1}>
                        <TouchableOpacity
                           activeOpacity={0.8}
                           onPress={() => sendSOS()}
                        >
                           <View style={styles.section_bouton}>
                              <Text style={styles.bouton_sos}>SOS</Text>
                           </View>
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>

               <View>
                  <Text
                     style={[
                        styles.big_titre_information,
                        { color: Colors.secondary },
                     ]}
                  >
                     Êtes-vous face à un évènement grave ?
                  </Text>
                  <Text style={styles.text_information}>
                     Si vous voyez quelque chose de danger comme incendie
                     etc..., alertez nous !!!
                  </Text>
               </View>
               <View style={styles.shadow_6}>
                  <View style={styles.shadow_5}>
                     <View style={styles.shadow_4}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => sendHELP()}>
                           <View style={styles.section_bouton_2}>
                              <Text style={styles.bouton_sos}>HELP</Text>
                           </View>
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>
            </View>
         </View>
      </KeyboardAwareScrollView>
   );
}
