import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import LoginForm from "../../sections/components/loginForm";
import ColoredBackground from '../containers/ColoredBackground'
import Logo from "../../sections/components/logo";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ColoredBackground>
        <View style={styles.appcontainer}>
          <Logo/>
          <LoginForm/>
        </View>
      </ColoredBackground>  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },
  text: {
    color: "white",
  },
  appcontainer: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
  }
});

export default Login;
