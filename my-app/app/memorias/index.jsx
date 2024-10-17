import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList, Button, Image } from "react-native";
import { Link } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from '../../components/Header'

const style = StyleSheet.create({
    foto: {
        width: 180,
        height: 180
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    memoContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 3,
        padding: 10,
        marginVertical: 10,
        width: 360
    },
    btCriar: {
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 3,
        padding: 5,
        paddingLeft: 10,
        paddingTop: 10,
        width: 110,
        backgroundColor: 'whitesmoke',
        marginLeft: 10
    },
    mapIcon: {
        width: 20,
        height: 20
    }
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
            <View style={style.container}>
                <FlatList
                data={dados}
                renderItem={({item}) => 
                    <View style={style.memoContainer}>
                        <Image resizeMode="contain" source={{uri: item.fotoURI}} style={style.foto}/>
                        <Text>{item.titulo}</Text>
                        <Text>{item.descricao}</Text>
                        <Text> <Image resizeMode="contain" style={style.mapIcon} source={{uri: "https://i.pinimg.com/originals/1d/74/0a/1d740ad2a3dca0d7abd45e65739b3d0e.png"}}/>{item.data} - {item.local}</Text>
                    </View>
                }
                ListEmptyComponent={() => <Text>Parece que voce ainda nao criou nenhuma memoria :c</Text>}
                />
                <Link href={"./criarNova"} style={style.btCriar}><Text>Criar memoria</Text></Link>
            </View>
        </SafeAreaView>
    )
}