import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from '../../components/Header'

const style = StyleSheet.create({

})

export default CriarMemoria = () => {

    const [dados, setDados] = useState(null)
    useEffect(async () => {
        const jsonValue = await AsyncStorage.getItem('memories')
        if(jsonValue != null){
            try{
                setDados(jsonValue != null ? JSON.parse(jsonValue) : null)
            }catch(e){
                console.error(e)
            }
        }else{
            try{
                const value = JSON.stringify([])
                await AsyncStorage.setItem('memories', value)
            }catch(e){
                console.error(e)
            }
        }
    }, [])

    return(
        <SafeAreaView>
            <Header titulo='Memorias'/>
            <View>
                <FlatList
                    data={dados}
                    renderItem={({item}) => <Text>{}</Text>}
                />
            </View>
        </SafeAreaView>
    )
}