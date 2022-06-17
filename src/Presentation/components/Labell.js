import React from 'react';
import { SafeAreaView,Text,Button,Image,StyleSheet,View,TouchableOpacity} from 'react-native';
import ell from'./../../assets/Ellipse.png'
const Labell = (props) => {

    return (
        <View style={styles.view}>
        <Image source={ell} style={styles.image}/>
        <Text style={{color:`${props.colortxt}`}}>{props.txt}</Text>
        </View>
        );
    };
    
    
    const styles = StyleSheet.create({
       view:{
        flexDirection:'row',
        paddingVertical:7,
        marginVertical:2
       },
       image:{
        marginTop:5,
        marginRight:5
       }
      })
    
      
    export default Labell;