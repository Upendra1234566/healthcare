
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SPLASH_SCREEN } from './NavigationString';
import Splash from '../screen/Splash/SplashScreen';
import SplashScreen from '../screen/Splash/SplashScreen';


const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;