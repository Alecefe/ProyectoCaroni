import React from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginForm from '../../sections/components/loginForm'
import Logo from '../../sections/components/logo'

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground
      source={require('../../../assets/loginBackground.jpg')}
      style={{width: '100%', height: '100%'}}
      > */}
        
        <LoginForm/>
        <Logo/>
      {/* </ImageBackground> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32a28e',
  }
})

export default Login