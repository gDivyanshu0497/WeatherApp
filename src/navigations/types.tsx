import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
    InputScreen: undefined;
    Country: {
      capital: string;
      population: string | number;
      latlng : any;
      image : any;
    };
  };

  export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Country'
>;
  

  // response.data[0].capital[0]
// response.data[0].population
// response.data[0].latlng
// response.data[0].flags.png
