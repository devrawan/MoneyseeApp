import * as  React from 'react';
import {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Modal,
  Text,
  ActivityIndicator,
} from 'react-native';

import {
  getModel,
  convertBase64ToTensor,
  startPrediction,
} from '../../helpers/tensor-helper';
// import {cropPicture} from '../../helpers/image-helper';

//  import {Camera} from 'expo-camera';

const RESULT_MAPPING = ['0 Index', '1 Index', '2 Index' , '3 Index'] ;

const CameraScreen = () => {
  const cameraRef = useRef();
  const [isProcessing, setIsProcessing] = useState(false);
  const [presentedShape, setPresentedShape] = useState('');

  const handleImageCapture = async () => {
    setIsProcessing(true);t
    const imageData = await cameraRef.current.takePictureAsync({
      base64: true,
    });
    processImagePrediction(imageData);
  };

  const processImagePrediction = async (base64Image) => {
    const croppedData = await cropPicture(base64Image, 300);
    const model = await getModel();
    console.log("model: " + model);
    const tensor = await convertBase64ToTensor(croppedData.base64);
    const prediction = await startPrediction(model, tensor);
    const highestPrediction = prediction.indexOf(
      Math.max.apply(null, prediction),
    );
    console.log("result " + prediction);
    setPresentedShape(RESULT_MAPPING[highestPrediction]);
  };

  return (
    <View style={styles.container}>
      <Modal visible={isProcessing} transparent={true} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text>Your current banknote is {presentedShape}</Text>
            {presentedShape === '' && <ActivityIndicator size="large" />}
            <Pressable
              style={styles.dismissButton}
              onPress={() => {
                setPresentedShape('');
                setIsProcessing(false);
              }}>
              <Text>Dismiss</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* <Camera
        ref={cameraRef}
        style={styles.camera}
        type={Camera.Constants.Type.back}
        autoFocus={true}
        whiteBalance={Camera.Constants.WhiteBalance.auto}>
        </Camera> */}
      <Pressable
        onPress={() => handleImageCapture()}
        style={styles.captureButton}></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor:'blank'
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  captureButton: {
    position: 'absolute',
    left: Dimensions.get('screen').width / 2 - 50,
    bottom: 40,
    width: 100,
    zIndex: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  modal: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
    borderRadius: 24,
    backgroundColor: 'gray',
  },
  dismissButton: {
    width: 150,
    height: 50,
    marginTop: 60,
    borderRadius: 24,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});

export default CameraScreen;













// import React from 'react';
// import Tts from 'react-native-tts'
// import { SafeAreaView,Text,Button,Image,StyleSheet,View,TouchableOpacity} from 'react-native';

// import Back from '/Users/sara/Documents/test/Data/assets/Back.png'

// const CameraScreen = ({navigation}) => {

//     const handleVoice =()=>{
//         // console.log("done")
//         Tts.setDefaultRate(0.5);
//         // Tts.speak('This is 50 sheckle', {
//         //   iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
//         //   rate: 0.5,
//         // });

//         Tts.getInitStatus().then(() => {
//           Tts.speak('This is 50 sheckle', {
//             iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
//             rate: 0.5,
//           });
//         });




//         Tts.addEventListener('tts-start', (event) => console.log("start", event));
//         Tts.addEventListener('tts-progress', (event) => console.log("progress", event));
//         Tts.addEventListener('tts-finish', (event) => console.log("finish", event));
//         Tts.addEventListener('tts-cancel', (event) => console.log("cancel", event));

//   }




//     return (
//         <SafeAreaView style={styles.Container}>
//          <View style={{ backgroundColor:'#005C6A',height:'80%',borderRadius:10,flexDirection:'column',alignItems:'center',justifyContent:'center',marginHorizontal:15,alignContent:'flex-end'}}>
                   
//            </View>
//          <TouchableOpacity
//          style={{backgroundColor:'#005C6A',height:55,borderRadius:10,flexDirection:'column',alignItems:'center',justifyContent:'center',marginHorizontal:15,alignContent:'flex-end'}}
//           onPress={()=>handleVoice()}>
//     <Text style={{color:'white',fontSize:22}}> submit </Text>
//     </TouchableOpacity>
//         </SafeAreaView>
//     );
// };


// const styles = StyleSheet.create({
//     Container: {
//   height:'100%',
//       flex: 1,
//       flexDirection: 'column',
//      backgroundColor:'pink',
//      justifyContent:'space-between'
//         }
//   })

// export default CameraScreen;