import React from 'react';
import { Text,StyleSheet,View} from 'react-native';

const Logo = () => {

    return (
        <View style={styles.view}>
        <Text style={styles.text1}>Money</Text>
       <Text style={styles.text2}>See</Text>
        </View>
        );
    };
    
    
    const styles = StyleSheet.create({
       view:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:10
       },
       text1:{
        color:'#005C6A',
        fontSize:25,
        fontWeight:'500'
       },
       text2:{
        color:'#64C8CA',
        fontSize:25,
        fontWeight:'500'
       }
      })
    
      
    export default Logo;