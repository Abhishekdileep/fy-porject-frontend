import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    preview: {
        height: winHeight,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    bottomToolbar: {
        width: winWidth,
        position: 'absolute',
        height: 160,
        bottom: 0,
    },
    captureBtn: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: "#FFFFFF",
    },
    captureBtnActive: {
        width: 80,
        height: 80,
    },
    captureBtnInternal: {
        width: 76,
        height: 76,
        borderWidth: 2,
        borderRadius: 76,
        backgroundColor: "red",
        borderColor: "transparent",
    },
    galleryContainer: { 
        bottom: 100 
    },
    galleryImageContainer: { 
        width: 100, 
        height: 100, 
        marginRight: 5 
    },
    galleryImage: { 
        width: 100, 
        height: 100,
    },
    galleryItemHighlighted:{
        borderWidth: 2,
        borderColor: "#fff"
    },
    uploadButton:{
        position:"absolute",
        zIndex:3,
        backgroundColor:"#fff",
        borderRadius:50,
        padding: 8,
        marginLeft: 6,
        marginTop: 8,
        height: 42,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    queueScannerContainer:{
        paddingHorizontal:32,
        paddingVertical:64,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    recordsToggleButton:{
        alignSelf: "flex-end",
        padding: 16,
        backgroundColor:"#fff",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50
    },
    recordContainer:{
        height:"100%",
        paddingBottom: 48
    },
    fixedModalButton:{
        position:"absolute",
        bottom:0,
        left:0,
        backgroundColor:"#000",
        padding: 16,
        width:"100%",
    },
    recordItem:{
        padding: 16,
        borderRadius: 5,
        marginHorizontal: 8,
        marginVertical: 4,
        backgroundColor:"#fff"
    },  
    recordTitle:{
        fontWeight:"bold",
        color:"#686d76"
    },
    closeModalButton:{
        color:"#fff",
        textAlign:"center",
        fontWeight:"bold"
    },
    recordModal:{
        height: 300,
        marginTop: 128,
        width:"80%",
        backgroundColor:"#fff",
        alignSelf:"center",
        padding: 8,
        borderWidth:.5,
        borderColor:"#dee1e4"
    }
});