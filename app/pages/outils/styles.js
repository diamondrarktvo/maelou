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
   },
   banniere: {
      height: 220,
      marginVertical: 18,
      borderRadius: 20,
      backgroundColor: Colors.secondary,
      flexDirection: 'row',
      alignItems: 'center',
   },
   texte_banniere: {
      flex: 1,
      marginLeft: 14,
      fontSize: 20,
      color: Colors.white,
   },
   image_banniere: {
      flex: 1,
      height: 270,
      marginRight: 10,
   },
   link_to_other_view: {
      marginVertical: 20,
      marginHorizontal: 8,
   },
   one_link_item: {
      height: 80,
      borderWidth: 1,
      borderRadius: 28,
      borderColor: Colors.secondary,
      marginVertical: 5,
      justifyContent: 'center',
      paddingHorizontal: 16,
   },
   text_item: {
      fontSize: 16,
      fontWeight: 'bold',
      color: Colors.secondary,
      textAlign: 'center',
   },
});
