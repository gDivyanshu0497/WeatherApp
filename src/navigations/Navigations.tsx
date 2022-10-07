import React,{FC} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputScreen from '../screens/InputScreen';
import CountryScreen from '../screens/CountryDetails';
import { HomeStackNavigatorParamList } from './types';
import WeatherScreen from '../screens/WeatherDetailsScreen';




const Stack = createNativeStackNavigator();


const Navigations : FC = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='InputScreen'>
                <Stack.Screen name="InputScreen" component={InputScreen} />
                <Stack.Screen name="Country" component={CountryScreen}/>
                <Stack.Screen name="Weather" component={WeatherScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigations;