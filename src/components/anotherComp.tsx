import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const AnotherComp = (props:any) =>{
    const handleClick = ()=>{
        console.log("PRESSED!")
        props.navigation.navigate("New")
    }
    return(
        <View style={styles.viewContainer}>
            <Text>The Imitation Game</Text>
            <TouchableOpacity onPress={handleClick} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Click</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle :{
        marginTop: 15,
        backgroundColor: "#288ff7",
        borderRadius: 8,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    viewContainer :{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%"
    },
    textStyle :{
        fontSize: 14,
        fontWeight: '700'
    }
})
export default AnotherComp;



