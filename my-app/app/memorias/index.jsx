import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList, Button } from "react-native";
import { Link } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from '../../components/Header'

const style = StyleSheet.create({

})

export default CriarMemoria = () => {

    const [dados, setDados] = useState(null)
    useEffect(() => {
        const getMemoria = async () => {
            const jsonValue = await AsyncStorage.getItem('memories')
            if(jsonValue != null){
                try{
                    const value = JSON.parse(jsonValue)
                    setDados(value)
                }catch(e){
                    console.error(e)
                }
                
            }else{
                try{
                    const value = JSON.stringify([])
                    await AsyncStorage.setItem('memories', value)
                    const newJsonValue = await AsyncStorage.getItem('memories')
                    const newValue = JSON.parse(newJsonValue)
                    setDados(newValue)
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
                <FlatList
                data={dados}
                renderItem={({item}) => 
                    <View>
                        <Text>{item.nome}</Text>
                    </View>
                }
                ListEmptyComponent={() => <Text>Parece que voce ainda nao criou nenhuma memoria :c</Text>}
                />
            </View>
            <Link href={"./criarNova"}><Text>Receba</Text></Link>
        </SafeAreaView>
    )
}