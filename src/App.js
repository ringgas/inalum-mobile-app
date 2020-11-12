import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';

import { Heading } from './components';
import { LogoInalum } from './assets';

const App = () => (
  <View style={styles.container}>
    <Heading text="Hallo Inalum" />

    <Image
      style={{ width: '100%', height: 130 }}
      source={require('./assets/logo/logo-inalum.png')}
    />
    <View>
      <Heading text="Selamat datang di aplikasi mobile INALUM" />
      <Text style={styles.paragraph}>PT Indonesia Asahan Aluminium atau lebih dikenal sebagai Inalum merupakan BUMN pertama dan terbesar Indonesia yang bergerak dibidang peleburan Aluminium.</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D5DFE5',
    flex: 1,
    padding: 40,
    display: 'flex',
    justifyContent: 'space-between',
  },

  paragraph: {
    paddingTop: 20,
  },
});
export default App;
