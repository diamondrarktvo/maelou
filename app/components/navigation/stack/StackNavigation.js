import { createStackNavigator } from '@react-navigation/stack';
//name util for stack navigation
import { nameStackNavigation as nameNav } from '_utils';
/*tab Navitation (top and bottom both)*/
import BottomBarTabs from '_components/navigation/tabs/BottomBarTabs';
/*screen normal |screen indépendant à afficher|*/
import { Profil, Map } from '_pages';
import { configStack } from './configStack';

let Stack = createStackNavigator();
export default function StackNavigation() {
   return (
      <Stack.Navigator initialRouteName={nameNav.home}>
         <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name={nameNav.home} component={BottomBarTabs} />
         </Stack.Group>

         <Stack.Group screenOptions={configStack.screenOptionsForHeaderShown}>
            <Stack.Screen name={nameNav.profil} component={Profil} />
         </Stack.Group>

         <Stack.Group screenOptions={configStack.screenOptionsForHeaderShown}>
            <Stack.Screen name={nameNav.map} component={Map} />
         </Stack.Group>

         {/* <Stack.Group screenOptions={configStack.screenOptionsForHeaderShown}>
            <Stack.Screen
               name={nameNav.listPage}
               component={ListingPage}
               options={({ route }) => ({
                  title: route.params.titleScreen,
               })}
            />
         </Stack.Group> */}
      </Stack.Navigator>
   );
}
