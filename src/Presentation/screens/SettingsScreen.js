import React from 'react';
import { SafeAreaView,Text,Button,Image,StyleSheet,View,TouchableOpacity} from 'react-native';

import Back from './../../assets/Back.png'

const SettingsScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.Container}>
         <TouchableOpacity onPress={()=>{navigation.navigate('CameraScreen')}} style={{flexDirection:'row',padding:15}}>
            <Image source={Back} />
            </TouchableOpacity>


<TouchableOpacity style={{flex
    :1, flexDirection:'column',justifyContent:'space-between',paddingVertical:10}}>


            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={{color:'#005C6A',fontSize:25,fontWeight:'500'}}>Money</Text>
           <Text style={{color:'#64C8CA',fontSize:25,fontWeight:'500'}}>See</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <TouchableOpacity style={{ backgroundColor:'#005C6A',width:300,height:55,borderRadius:10,justifyContent:'center'}}>
                    <Button 
                    color='white'
            onPress={()=>{navigation.navigate('CameraScreen')}}
           title='CameraScreen' /></TouchableOpacity>
            </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    Container: {
      flex: 1,
      flexDirection: 'column',
     backgroundColor:'white'
    }
  })


export default SettingsScreen;