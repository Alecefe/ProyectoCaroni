import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View
} from "react-native";

const ColoredBackground = ({children}) => {
  return (
  <ImageBackground source={require('../../../assets/loginBackground.jpg')} style={styles.image}>
    <View style={styles.coloredScreen} />
      {children}
  </ImageBackground>
  )
}

const styles = StyleSheet.create({
  coloredScreen: {
    backgroundColor: '#32A28E',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    opacity: 0.85,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default ColoredBackground