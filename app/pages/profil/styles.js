import { Colors } from '_theme/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      marginTop: 25,
      marginHorizontal: 30,
      backgroundColor: Colors.background,
   },
   head_profil: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
   },
   profil_image: {
      width: 150,
      height: 150,
   },
   user_name: {
      fontSize: 28,
      fontWeight: 'bold',
   },
   information_profil: {
      flex: 2,
   },
   label_information_profil: {
      color: Colors.grey,
      fontSize: 18,
   },
   value_information_profil: {
      color: Colors.black,
      fontWeight: 'bold',
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: Colors.grey,
      marginBottom: 30,
   },
   footer_profil: {
      flex: 1,
   },
   action: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
   },
   action_bouton: {
      marginVertical: 28,
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'space-around',
   },
   bouton: {
      padding: 15,
      borderRadius: 25,
      width: 150,
      marginTop: 25,
   },
});
