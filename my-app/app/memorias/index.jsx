import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from '../../components/Header'

const style = StyleSheet.create({

})

export default CriarMemoria = () => {

    const [dados, setDados] = useState(null)
    useEffect(() => {
        const getMemoria = async () => {
            const jsonValue = await AsyncStorage.getItem('memories')
            if(jsonValue !== null){
                try{
                    setDados(JSON.parse(jsonValue))
                    console.log('receba')
                }catch(e){
                    console.error(e)
                }
                
            }else{
                try{
                    const value = JSON.stringify([])
                    await AsyncStorage.setItem('memories', value)
                    const newJsonValue = await AsyncStorage.getItem('memories')
                    setDados(JSON.parse(newJsonValue))
                    console.log('nao receba')
                }catch(e){
                    console.error(e)
                }
            }
        }
        getMemoria()
    }, [])

    return(
        <SafeAreaView>
            <Header titulo='Memorias'/>
            <View>
                { dados == []? <Text>Parece que você nao criou nenhuma memoria ainda</Text>:
                console.log(dados)
                }
            </View>
        </SafeAreaView>
    )
}