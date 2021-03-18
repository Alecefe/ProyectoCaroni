import React from "react";
import { 
  Text,
  View, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  Image,
  Alert 
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import UserIcon from '../../../assets/userIcon.svg'
import PasswordIcon from '../../../assets/passIcon.svg'
import { color } from "react-native-reanimated";

const loginForm = () => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  

  return (
    <>
    <View style={styles.container}>
      <View style={styles.inputContainer}> 
        <UserIcon width={30} height={30} fill='#32A28E' style={styles.icon}/>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
              <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder={'Usuario'}
              />
              )}
              name="user"
              rules={{ required: true }}
              defaultValue=""
              />
      </View>
      <View style={styles.inputContainer}>
        <PasswordIcon width={30} height={30} fill='#32A28E' style={styles.icon}/>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder='Contraseña'
              secureTextEntry={true}
            />
          )}
          name="pass"
          rules={{ required: true }}
          defaultValue=""
        />
      </View>
        {(errors.user || errors.pass) && <Text style={{color:'red'}}>User and password required.</Text>}
    </View>
      <TouchableOpacity title="Ingresar" style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={{color:'#ffffff', fontWeight:'bold', lineHeight:30}}>Ingresar</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    minWidth: '60%',
    minHeight: 120,
    backgroundColor: '#ffffff',
    opacity: 0.7,
    borderRadius:20,
    paddingHorizontal: 20,
    paddingVertical:2,
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  icon:{
    borderColor: '#32A28E',
    borderRadius:5,
    borderWidth:1,
  },
  input:{
    // textAlign:'center',
    textAlignVertical:'bottom',
    marginBottom:15,
    marginHorizontal:5,
    minWidth: '43%',
    borderRadius: 2,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 2,
    paddingVertical:7
  },
  button:{
    minWidth: '60%',
    minHeight: 40,
    borderWidth: 3,
    borderRadius:20,
    borderColor:'#ffffff',
    alignItems: "center",
    margin: 20,
    textAlignVertical:'center'
  }
})

export default loginForm