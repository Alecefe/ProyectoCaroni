import React from 'react';
import {
  Image,
  StyleSheet
} from 'react-native';

const Logo = () =>
<Image style={styles.logo} source={require('../../../assets/LogoOpticaCaroni.png')} />

const styles = StyleSheet.create({
  logo: {
    maxWidth: 300, 
    maxHeight:250,
    marginVertical: 30
  }
})

export default Logo