import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Modal,
  Image,
  Text,
  ActivityIndicator,
  Button,
} from 'react-native';



import Tts from 'react-native-tts';
import {
  getModel,
  convertBase64ToTensor,
  startPrediction,
} from '../../helpers/tensor-helper';
import {cropPicture} from '../../helpers/image-helper';

import {Camera} from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';

// const RESULT_MAPPING = ['20 sheckle', '20 sheckle', '200 sheckle' , '100 sheckle'] ;
const RESULT_MAPPING = ['50 sheckle', '20 sheckle'] ;

const Main = () => {

  const [image, setImage] = useState('');
  const cameraRef = useRef();
  const [index , setIndex] = useState();
  const [isProcessing, setIsProcessing] = useState(false);
  const [presentedShape, setPresentedShape] = useState('');


  const handleImageCapture = async () => {
    setIsProcessing(true);
    const imageData = await cameraRef.current.takePictureAsync({
      base64: true,
    });
    processImagePrediction(imageData);
  };

  const processImagePrediction = async (base64Image) => {
    const croppedData = await cropPicture(base64Image, 300);

    // setImage(croppedData.uri);
    setImage(croppedData.uri);
    const model = await getModel();

    console.log("model: " + model);
    const tensor = await convertBase64ToTensor(croppedData.base64);

    
    const prediction = await startPrediction(model, tensor);


    const highestPrediction = prediction.indexOf(
      Math.max.apply(null, prediction),
    );

    var index = highestPrediction; 
    
    // setIndex(index);
    console.log("result " + prediction);
    // console.log("highestPrediction " + highestPrediction);
    handleVoice(index);
    setPresentedShape(RESULT_MAPPING[index]);
  };


  const handleVoice =(highestPrediction)=>{
     
    Tts.setDefaultRate(0.5);

    Tts.getInitStatus().then(() => {
      Tts.speak(RESULT_MAPPING[highestPrediction], {
        rate: 0.5,
      });
    });




    Tts.addEventListener('tts-start', (event) => {});
    Tts.addEventListener('tts-progress', (event) => {});
    Tts.addEventListener('tts-finish', (event) => {});
    Tts.addEventListener('tts-cancel', (event) => {});

}


  return (
    <View style={styles.container}>
    {/* <View style={{width:200,height:200,backgroundColor:'white',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={()=>handleVoice()}>
    <Text> submit 2</Text>
    </TouchableOpacity>

    </View> */}

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


<View  style={{ marginTop : 100, borderRadius: 16,   width:672, height : 672, }}>
<Camera
      
      ref={cameraRef}
      style={styles.camera}
      type={Camera.Constants.Type.back}
      autoFocus={true}
      whiteBalance={Camera.Constants.WhiteBalance.auto}></Camera>


</View>

  
        {/* <Image  style={{width:300, height:300}}  source={{uri : image}} ></Image> */}
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
    backgroundColor:'pink'
  },
  camera: {
    width: 672,
    height: 672,
     borderRadius: 16,
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
    backgroundColor: '#005C6A',
  },
});

export default Main;
