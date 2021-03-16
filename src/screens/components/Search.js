import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} >Search</Text>
      <Button
        title='Go to Details'
        onPress={()=> navigation.navigate('Details')}
      />
    </SafeAreaView>
  )
}

const onPress = (props) => navigation.navigate('Details')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#022c43',
  },
  text: {
    textAlign: 'center',
    marginBottom: 5,
    color: 'red',
  }
})

export default Search