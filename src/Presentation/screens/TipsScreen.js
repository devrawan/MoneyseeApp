import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import thinking from './../../assets/Thinking.png'
import Labell from './../components/Labell'
import Backk from "./../../assets/Back.png"
const TipsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.Container}>
            <TouchableOpacity onPress={() => { navigation.navigate('HelloScreen') }} style={{ flexDirection: 'row', padding: 15 }}>
                <Image source={Backk} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
                <Text style={{ color: '#005C6A', fontSize: 25, fontWeight: '500' }}>Money</Text>
                <Text style={{ color: '#64C8CA', fontSize: 25, fontWeight: '500' }}>See</Text>
            </View>
            <View>
                <Image source={thinking} />
            </View>
            <View style={{ padding: 15 }}><Text style={{ color: '#005C6A', fontSize: 18 }}>Helpful tips</Text></View>
            <View style={{ flexDirection: 'column', paddingHorizontal: 15 }}>
                <Labell txt="It recognizes both banknotes." colortxt="black" />
                <Labell txt="Use Voiceover to read the  banknotes" colortxt="black" />
                <Labell txt="Totally free to use" colortxt="black" />
                <Labell txt="Useful for blind people to recognize the banknotes " colortxt="black" />
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#005C6A', width: 260, height: 50,
                        borderRadius: 10, justifyContent: 'center'
                    }}>
                        <Button
                            color='white'
                            onPress={() => { navigation.navigate('LoginScreen') }}
                            title='Next' /></TouchableOpacity>
                </View>
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


export default TipsScreen;