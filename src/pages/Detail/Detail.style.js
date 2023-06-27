import { StyleSheet, Dimensions } from "react-native";

const device = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        
    },
    image: {
        height: device.height/3,
        resizeMode: "contain",
        backgroundColor: 'white'
    },
    title:{
        fontSize: 25,
        fontWeight:'bold',
        color: 'black',
        textAlign: 'center',

        
    },
    desc: {
        marginTop: 5,
        color: 'black',
        fontSize: 18,
        fontStyle: "italic",
        

    },
    price: {
        color:"black",
        marginTop:16,
        textAlign: "right",
        marginRight: 15,
        fontSize: 16,
    },
    body_container: {
        margin: 10,
        justifyContent: "space-evenly",
    },
})