import React from 'react';
import {
  Image,
  StyleSheet
} from 'react-native';

const Logo = () =>
<Image style={styles.logo} source={require('../../../assets/LogoOpticaCaroni.png')} />

const styles = StyleSheet.create({
  logo: {
    maxWidth: 200, 
    maxHeight:160,
    marginBottom: 50
  }
})

export default Logo