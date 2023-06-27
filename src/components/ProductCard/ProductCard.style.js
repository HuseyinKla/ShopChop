import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: '#bdbdbd',
        backgroundColor: '#e0e0e0',
        margin: 10,
    },
    body_container: {
        flex: 1,
        padding: 5,
        justifyContent:'space-between'
    },
    image: {
        minHeight: 100,
        width: 100,
        resizeMode: "contain",
        backgroundColor: 'white',
    },
    price: {
        color: "black",
        textAlign: "right",
        fontSize: 16,
        fontStyle: "italic",
    },
    title: {
        fontWeight: "bold",
        color: "black",
        fontSize: 20,
    },
})