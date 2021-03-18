import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  KeyboardAvoidingView
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import LoginForm from "../../sections/components/loginForm";
import ColoredBackground from '../containers/ColoredBackground'
import Logo from "../../sections/components/logo";

const Login = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1}}
    >
      <SafeAreaView style={styles.container}>
        <ColoredBackground>
          <View style={styles.inner}>
            <Logo/>
            <LoginForm/>
          </View>
        </ColoredBackground>  
      </SafeAreaView>
    </KeyboardAvoidingView>
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
  inner: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-end',
    paddingBottom:'25%'
  }
});

export default Login;
