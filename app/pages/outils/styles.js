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
      height: 200,
      marginVertical: 18,
      borderRadius: 20,
      backgroundColor: Colors.secondary,
   },
   image_banniere: {
      height: 180,
      width: 200,
   },
});
