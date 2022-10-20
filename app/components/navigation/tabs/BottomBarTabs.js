import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '_theme/Colors';
import { Icon } from '@rneui/themed';

//import screen bottom tab
import { Home, Outils, Contact } from '_pages';

const Tab = createBottomTabNavigator();

export default function BottomBarTabs() {
   return (
      <Tab.Navigator
         initialRouteName="Home"
         screenOptions={{
            headerShown: false,
            tabBarInactiveTintColors: Colors.black,
            tabBarActiveTintColors: Colors.blue,
            tabBarLabelStyle: {
               fontSize: 13,
               textTransform: 'capitalize',
               fontWeight: 'bold',
            },
            tabBarStyle: styles.tabBarStyles,
         }}
      >
         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarLabel: 'Home',
               tabBarIcon: ({ size, color }) => (
                  <Icon name={'home'} color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name="Outils"
            component={Outils}
            options={{
               tabBarLabel: 'Outils',
               tabBarIcon: ({ size, color }) => (
                  <Icon name={'help'} color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name="Contact"
            component={Contact}
            options={{
               tabBarLabel: 'Contact',
               tabBarIcon: ({ size, color }) => (
                  <Icon name={'contacts'} color={color} size={size} />
               ),
            }}
         />
      </Tab.Navigator>
   );
}

const styles = StyleSheet.create({
   tabBarStyles: {
      position: 'absolute',
      borderRadius: 30,
      marginVertical: 10,
      backgroundColors: Colors.background,
      height: 60,
      padding: 5,
      marginHorizontal: 30,
   },
});
