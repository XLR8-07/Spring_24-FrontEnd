import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";

const NewComponent = () =>{

    const [name , setName] = useState("")
    const [country, setCountry] = useState("")

    const handleNameInput = (value : string) =>{
        setName(value)
    }

    const handleSubmit = async () =>{
        console.log(name)
        const request_url = `https://api.nationalize.io/?name=${name}`
        const response = await axios.get(request_url)
        if(response.data.country.length)
        {
            setCountry(response.data.country[0].country_id)
        }
    }
    return (
        <View style={style.container}>
            <Text style={style.countryContainer}>{country}</Text>
            <TextInput value={name} onChangeText={handleNameInput} style={style.inputContainer} placeholder="Enter Your Name"/>
            <button onClick={handleSubmit} style={style.buttonContainer}>Submit</button>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150
    },
    buttonContainer : {
        margin: 10,
        width: 90,
        height: 40
    },
    inputContainer: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8
    },
    countryContainer :{
        fontSize: 40,
        fontWeight: '700'
    }
})


export default NewComponent;