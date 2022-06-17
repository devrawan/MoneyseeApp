import React from 'react';
import { SafeAreaView, Text, Button, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import Hello from './../../assets/Hello.png'
import Logo from './../components/Logo'
const HelloScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.Container}>
            <View style={{ paddingVertical: 20 }}>
                <Logo />
            </View>
            <Image style={{ marginHorizontal: 10 }} source={Hello} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>Welcome to MoneySee</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 15, padding: 20 }}>
                <Text style={{ fontSize: 13, paddingHorizontal: 20, marginBottom: 25 }}>MoneySee helps the visually impaired to know the value of the shekel, by simply pointing the camera at the money and hearing the value instantly.</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: '#005C6A', width: 260, height: 55,
                 borderRadius: 10, justifyContent: 'center' }}>
                    <Button
                        color='white'
                        onPress={() => { navigation.navigate('TipsScreen') }}
                        title='Next' /></TouchableOpacity>
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
export default HelloScreen;