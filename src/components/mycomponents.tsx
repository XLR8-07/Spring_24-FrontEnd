import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";

const NewComponent = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [address, setAddress] = useState("")
    const [country, setCountry] = useState(" ")

    const handleNameInput = (value: string) => {
        setName(value)
    }
    const handleAgeInput = (value: string) => {
        setAge(+value)
    }
    const handleAddressInput = (value: string) => {
        setAddress(value)
    }

    const handleSubmit = async () => {
        console.log(name)
        const request_url = `https://api.nationalize.io/?name=${name}`
        const response = await axios.get(request_url)
        if (response.data.country.length) {
            setCountry(response.data.country[0].country_id)
        }
    }

    const insertUser = async () => {
        const newUser = {
            name: name,
            age: age,
            address: address
        }
        const request_url = "http://10.10.202.46:3000/user/db"
        const response = await axios.post(request_url, newUser)
        console.log(response)
    }
    return (
        <View style={style.container}>
            <Text style={style.countryContainer}>{country}</Text>
            <TextInput value={name} onChangeText={handleNameInput} style={style.inputContainer} placeholder="Enter Your Name" />
            <TextInput value={age.toString()} onChangeText={handleAgeInput} style={style.inputContainer} placeholder="Enter Your Age" />
            <TextInput value={address} onChangeText={handleAddressInput} style={style.inputContainer} placeholder="Enter Your Address" />

            <TouchableOpacity onPress={insertUser} style={style.buttonStyle}>
                <Text style={style.textStyle}>Create User</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150
    },
    buttonContainer: {
        margin: 10,
        width: 90,
        height: 40
    },
    inputContainer: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8
    },
    countryContainer: {
        fontSize: 40,
        fontWeight: '700'
    },
    buttonStyle: {
        marginTop: 15,
        backgroundColor: "#288ff7",
        borderRadius: 8,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    textStyle: {
        fontSize: 14,
        fontWeight: '700'
    }
})


export default NewComponent;