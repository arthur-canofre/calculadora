import React, { useContext } from 'react'
import { View, Pressable, Text, StyleSheet, FlatList, Button } from 'react-native'
import { AppContext } from '../../../scripts/AppContext'
import { Link } from 'expo-router'
import Header from '../../../components/Header'

const style = StyleSheet.create({
    nome: {
        fontSize: 23
    },
    preco: {
        fontSize: 21,
    },
    rest: {
        color: 'gray'
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        gap: 100
    },
    pTotal: {
        fontSize: 32
    },
    pTotalContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    }
})

export default Carrinho = () => {

    const {lista, setLista} = useContext(AppContext)
    

    const pTotal = () => {
        var precoTotal = 0
        for(var i = 0; i < lista.length; i++){
            precoTotal += parseFloat(lista[i].preco)
        }
        return precoTotal
    }
    return(
        <View>
            <Header titulo={"Carrinho"} link={"iFome"} />
            <View>
                <FlatList
                data={lista}
                renderItem={({item}) => <View style={style.itemContainer}>
                    <View>
                        <Text style={style.nome}>{item.nome}</Text>
                        <Text style={style.rest}>{item.restaurante}</Text>
                    </View>
                    <Text style={style.preco}>{item.preco}</Text>
                </View>}
                keyExtractor={item => item.id}
                />
            </View>
            <View style={style.pTotalContainer}>
                <Text>Preco Total:</Text>
                <Text style={style.pTotal}>R${pTotal()}</Text>
            </View>
            <Link href={'/iFome'} asChild>
                <Button title='Comprar' onPress={() => setLista([])}/>
            </Link>
        </View>
    )
}