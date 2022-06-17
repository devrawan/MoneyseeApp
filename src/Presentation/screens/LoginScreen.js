import React from 'react';
import { TextInput, SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import Back from './../../assets/Back.png'
import Logo from './../components/Logo'
const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.Container}>
      <TouchableOpacity onPress={() => { navigation.navigate('HelloScreen') }} style={{ flexDirection: 'row', padding: 15 }}>
        <Image source={Back} />
      </TouchableOpacity>
      <Logo />
      <View style={{ flexDirection: 'column', padding: 15 }}>
        <Text style={{ fontSize: 18, paddingVertical: 8 }}>Add name</Text>
        <Text>
          Lastly, add the name of the visually impaired, this feature is just for the voice over to call them names while using it
        </Text>
      </View>
      <TouchableOpacity style={{ marginVertical: 5, flexDirection: 'column', paddingVertical: 15, borderBottomWidth: 1, marginHorizontal: 15, paddingBottom: 5 }}>
        <TextInput placeholder='Add name here ..' />
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 200 }}>
        <TouchableOpacity style={{ backgroundColor: '#005C6A', width: 220, height: 60, borderRadius: 10, justifyContent: 'center' }}>
          <Button
            color='white'
            onPress={() => { navigation.navigate('MainView') }}
            title='GetStarted' /></TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity style={{ width: 220, height: 60, borderRadius: 10, justifyContent: 'center' }}>
          <Button
            color='#005C6A'
            onPress={() => { navigation.navigate('MainView') }}
            title='Skip' /></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {

    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  }
})

export default LoginScreen;