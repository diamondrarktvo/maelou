import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import stackNavigation from './stack/StackNavigation';

export default function Navigation() {
   return (
      <NavigationContainer>
         <stackNavigation />
      </NavigationContainer>
   );
}
