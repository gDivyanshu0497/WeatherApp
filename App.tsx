import React,{FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigations from './src/navigations/Navigations';


const App : FC = () => {
  return(
      <PaperProvider>
         <Navigations/>
      </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;