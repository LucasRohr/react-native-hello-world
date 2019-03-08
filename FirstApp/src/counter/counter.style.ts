import { StyleSheet } from "react-native";

export const COUNTER_STYLE = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#559966'
    },
    text: {
        fontSize: 30,
        color: 'white',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 1)' 
    },
    sumButton: {
        width: 80,
        height: 40,
        backgroundColor: "rgb(50, 50, 200)"
    },
    subButton: {
        width: 80,
        height: 40,
        backgroundColor: "rgb(200, 50, 50)"
    }

})