import React from 'react';
import { Camera as CameraTool } from 'expo-camera';
import { View, Text ,Alert, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

import styles from '../styles';
import Toolbar from '../Toolbar/Toolbar';
import Gallery from '../Gallery/Gallery';
import QueueScanner from '../QueueScanner/QueueScanner';
import Records from '../Records/Records';


const QUEUE_FULL_MESSAGE = "Image queue full"
const QUEUE_SCANNING_MESSAGE = "Scanning"

export default class Camera extends React.Component {
    camera = null;

    state = {
        captures: [],
        capturing: null,
        hasCameraPermission: null,
        cameraType: CameraTool.Constants.Type.back,
        flashMode: CameraTool.Constants.FlashMode.off,
        isScanning: false,
        scanningStatus: "",
        isRecordsVisible: false
    };

    setFlashMode = (flashMode) => this.setState({ flashMode });
    setCameraType = (cameraType) => this.setState({ cameraType });
    handleCaptureIn = () => this.setState({ capturing: true });

    handleCaptureOut = () => {
        if (this.state.capturing)
            this.camera.stopRecording();
    };

    handleShortCapture = async (callback=null) => {
        
        const photoData = await this.camera.takePictureAsync();
        this.setState({ capturing: false, captures: [{...photoData,selected:false}, ...this.state.captures] })
        if(callback!==null && typeof callback === "function")
            callback(photoData)
    };

    toggleSelectedImage = (image) => {
        this.setState({ capturing: false, captures: this.state.captures.map(innerImage => innerImage===image?({...image,selected:!image.selected}):({...innerImage,selected:false}))  })
    }

    handleLongCapture = async () => {
        const videoData = await this.camera.recordAsync();
        this.setState({ capturing: false, captures: [videoData, ...this.state.captures] });
    };

    deleteImage = (image) => {
        this.setState({ capturing: false, captures: this.state.captures.filter(innerImage => innerImage!==image)})
    }

    uploadNextImage = () => {
        if(this.state.isScanning && this.state.captures.length>0)
        {
            const [image] = this.state.captures
            this.uploadImage(image)
            this.setState({scanningStatus:QUEUE_SCANNING_MESSAGE})
        } else {
            this.setState({isScanning:false,scanningStatus:"",captures:[]})
        }
    }

    continueScanning = () => {
        setTimeout(() => {
            if(this.state.isScanning){
                if(this.state.scanningStatus === QUEUE_SCANNING_MESSAGE){
                    if(this.state.captures.length >= 10){
                        this.setState({scanningStatus:QUEUE_FULL_MESSAGE})
                        this.continueScanning()
                    } else {
                        this.handleShortCapture(this.continueScanning)
                    }
                } else {
                    this.continueScanning()
                }
            }
        },5000)
    }

    toggleRecordsVisibility = () => {
        this.setState(state => ({...state,isRecordsVisible:!state.isRecordsVisible}))
    }

    toggleScanning = () => {
        if(this.state.isScanning)
            this.setState({isScanning:false,scanningStatus:"",captures:[]})
        else{
            this.setState({isScanning:true,scanningStatus:"Scanning",captures:[]},
                () => {
                    this.handleShortCapture((image) => {
                        this.uploadImage(image)
                        this.continueScanning()
                    })
                }
            )
        }
    }

    uploadImage = (imageToUpload) => {
        
        const formData = new FormData()

        const imageName = imageToUpload.uri.split("/").pop()
        const type = imageToUpload.uri.split(".").pop()

        formData.append("image",{
        name: imageName,
        type: "image/"+type,
        uri: imageToUpload.uri
        })

        fetch("http://192.168.43.237:3000/api/detect/",{
            method:"POST",
            headers:{
            "Content-Type":"multipart/form-data"
        },
            body:formData
        })
        .then(data =>{ 
            return data.json()
        })
        .then(data => {
            if(data.hasOwnProperty("text")){
                this.deleteImage(imageToUpload)
                if(!this.state.isScanning){
                    Alert.alert("Success!","Uploaded successfully")
                }
                else{
                    this.uploadNextImage()
                }
            } else {
                throw Error("Something went wrong")
            }
        })
        .catch(err =>{ 
            console.log(err)
            Alert.alert("OOps!","Something went wrong, please try again")
        })
    }

    async componentDidMount() {
        const { status } = await CameraTool.requestPermissionsAsync()
        const hasCameraPermission = (status === 'granted');

        this.setState({ hasCameraPermission });
    };

    render() {
        const { hasCameraPermission, flashMode, cameraType, capturing, captures } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
            <React.Fragment>
                <View>
                    <CameraTool
                        type={cameraType}
                        flashMode={flashMode}
                        style={styles.preview}
                        ref={camera => this.camera = camera}
                    />
                </View>
                <QueueScanner 
                    toggleScanning={this.toggleScanning} 
                    isScanning={this.state.isScanning} 
                    scanningStatus={this.state.scanningStatus} 
                />
                {captures.length > 0 && <Gallery isScanning={this.state.isScanning} uploadImage={this.uploadImage} toggleSelectedImage={this.toggleSelectedImage} captures={captures}/>}
                {!this.state.isScanning && <TouchableOpacity style={styles.recordsToggleButton} onPress={this.toggleRecordsVisibility}>
                    <Ionicons name="file-tray" color="black" size={18} />
                </TouchableOpacity>}
                <Records toggleRecordsVisibility={this.toggleRecordsVisibility} isVisible={this.state.isRecordsVisible} />
                <Toolbar 
                    capturing={capturing}
                    flashMode={flashMode}
                    cameraType={cameraType}
                    isScanning={this.state.isScanning}
                    setFlashMode={this.setFlashMode}
                    setCameraType={this.setCameraType}
                    onCaptureIn={this.handleCaptureIn}
                    onCaptureOut={this.handleCaptureOut}
                    onLongCapture={this.handleLongCapture}
                    onShortCapture={this.handleShortCapture}
                />
            </React.Fragment>
        );
    };
};