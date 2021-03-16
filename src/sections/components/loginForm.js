import React from "react";
import { 
  Text,
  View, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  Alert 
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { color } from "react-native-reanimated";

const loginForm = () => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder='Usuario'
          />
        )}
        name="firstName"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.firstName && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder='Contraseña'
          />
        )}
        name="lastName"
        defaultValue=""
      />
    </View>
      <TouchableOpacity title="Ingresar" style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={{color:'#ffffff', fontWeight:'bold'}}>Ingresar</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    minWidth: 300,
    backgroundColor: '#ffffff',
    opacity: 0.65,
    borderRadius:20,
    paddingHorizontal: 20,
    paddingVertical:2
  },
  input:{
    marginBottom:15,
    marginHorizontal:5,
    minWidth: 220,
    borderRadius: 2,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 2,
    paddingVertical:7
  },
  button:{
    minWidth: 300,
    borderWidth: 3,
    borderRadius:20,
    borderColor:'#ffffff',
    alignItems: "center",
    margin: 20,
    padding: 10
  }
})

export default loginForm