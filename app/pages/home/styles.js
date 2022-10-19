import { Colors } from '_theme/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      marginTop: 30,
      paddingHorizontal: 15,
      backgroundColor: Colors.background,
   },
   head_content: {
      height: 45,
      marginVertical: 10,
   },
   body_content: {
      flex: 2,
      marginTop: 40,
      marginBottom: 10,
      alignItems: 'center',
   },
   big_titre_information: {
      fontSize: 32,
      fontWeight: '700',
      textAlign: 'center',
      marginVertical: 18,
      color: Colors.black,
   },
   text_information: {
      textAlign: 'center',
      fontSize: 14,
      color: Colors.grey,
   },
   section_bouton: {
      borderWidth: 2,
      height: 220,
      width: 220,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 220,
      borderColor: Colors.orange,
      backgroundColor: Colors.orange,
   },

   /*Shadow bouton*/
   shadow_1: {
      borderColor: 'rgba(227, 71, 41, 0.5)',
      backgroundColor: 'rgba(227, 71, 41, 0.5)',
      borderWidth: 1,
      height: 250,
      width: 250,
      borderRadius: 250,
      justifyContent: 'center',
      alignItems: 'center',
   },
   shadow_2: {
      borderColor: 'rgba(227, 71, 41, 0.3)',
      backgroundColor: 'rgba(227, 71, 41, 0.3)',
      borderWidth: 1,
      height: 280,
      width: 280,
      borderRadius: 280,
      justifyContent: 'center',
      alignItems: 'center',
   },
   shadow_3: {
      borderColor: 'rgba(227, 71, 41, 0.1)',
      backgroundColor: 'rgba(227, 71, 41, 0.1)',
      borderWidth: 1,
      height: 310,
      width: 310,
      borderRadius: 310,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 25,
   },
   /*FIn shadow bouton*/

   bouton_sos: {
      textAlign: 'center',
      fontSize: 64,
      color: Colors.white,
   },
   text_indication: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
   },
});
