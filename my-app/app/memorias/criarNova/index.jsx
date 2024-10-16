import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as ImagePicker from 'expo-image-picker'
import Header from "../../../components/Header";

const style = StyleSheet.create({
    foto: {
        width: 180,
        height: 180
    }
})

export default Memoria = () => {
    const [formMemo, setformMemo] = useState(
        {
            titulo: '',
            data: '',
            local: '',
            descricao: '',
            fotoURI: ''
        }
    )

    const onChangeText = (value, campo) => {
        var memo = {...formMemo}
        memo[campo] = value
        setformMemo(memo)
    }

    const pickImage = async () => {
        var result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if(!result.canceled){
            onChangeText(result.assets[0].uri, 'fotoURI')
        }
    }
    const criarMemo = async() => {
        const jsonMemorias = await AsyncStorage.getItem('memories') 
        var memorias = [...JSON.parse(jsonMemorias)]
        memorias.push(formMemo)
        const value = JSON.stringify(memorias)
        await AsyncStorage.setItem('memories', value)
    }
    
    return(
        <SafeAreaView>
            <Header titulo="criar nova memoria" link="memorias"/>
            <TextInput
                onChangeText={(value) => {onChangeText(value, 'titulo')}}
                placeholder="Escreva o titulo"
            />
             <TextInput
                onChangeText={(value) => {onChangeText(value, 'data')}}
                placeholder="Escreva quando foi essa memoria"
            />
             <TextInput
                onChangeText={(value) => {onChangeText(value, 'local')}}
                placeholder="Escreva onde essa memoria ocorreu"
            />
             <TextInput
                onChangeText={(value) => {onChangeText(value, 'descricao')}}
                placeholder="Escreva uma descricao dessa memoria"
            />
            <Button title="Pegar foto" onPress={pickImage}/>
            {formMemo.fotoURI && <Image source={{ uri: formMemo.fotoURI }} style={style.foto}/>}
            <Button title="Enviar memoria" onPress={criarMemo}/>
        </SafeAreaView>
    )
}