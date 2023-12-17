import { createStackNavigator } from '@react-navigation/stack';
//name util for stack navigation
import { nameStackNavigation as nameNav } from '_utils';
import { useState, useContext } from 'react';
/*tab Navitation (top and bottom both)*/
import BottomBarTabs from '_components/navigation/tabs/BottomBarTabs';
/*screen normal |screen indépendant à afficher|*/
import { Profil, Map, Login, Register } from '_pages';
import { configStack } from './configStack';
import { Contexte } from '_utils';

let Stack = createStackNavigator();
export default function StackNavigation() {
   const { isSigned, setIsSigned } = useContext(Contexte);

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

         <Stack.Group screenOptions={configStack.screenOptionsForHeaderDisable}>
            <Stack.Screen name={nameNav.login} component={Login} />
            <Stack.Screen name={nameNav.register} component={Register} />
         </Stack.Group>
      </Stack.Navigator>
   );
}
