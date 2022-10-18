import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '_theme/Colors';
import { Icon } from '@rneui/themed';

//import screen bottom tab
import { Home, Help, Profil } from '_pages';

const Tab = createBottomTabNavigator();

export default function BottomBarTabs() {
   return (
      <Tab.Navigator
         initialRouteName="Home"
         screenOptions={{
            headerShown: false,
            tabBarInactiveTintColors: Colors.black,
            tabBarActiveTintColors: Colors.purple,
            tabBarLabelStyle: { fontSize: 13, textTransform: 'capitalize' },
            tabBarStyle: styles.tabBarStyles,
         }}
      >
         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarLabel: 'Home',
               tabBarIcon: ({ size, Colors }) => (
                  <Icon name={'home'} Colors={Colors} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name="Help"
            component={Help}
            options={{
               tabBarLabel: 'Help',
               tabBarIcon: ({ Colors, size }) => (
                  <Icon name={'Search'} Colors={Colors} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name="Profil"
            component={Profil}
            options={{
               tabBarLabel: 'Profile',
               tabBarIcon: ({ Colors, size }) => (
                  <Icon name={'person'} Colors={Colors} size={size} />
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
      margin: 10,
      backgroundColors: Colors.background,
      height: 60,
      padding: 5,
   },
});
