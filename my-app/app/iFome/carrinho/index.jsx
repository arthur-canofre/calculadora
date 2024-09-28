import React, { useContext } from 'react'
import { View, Button, Text, StyleSheet, FlatList } from 'react-native'
import { AppContext } from '../../../scripts/AppContext'
import Header from '../../../components/Header'

const style = StyleSheet.create({

})

export default Carrinho = () => {

    const {lista, setLista} = useContext(AppContext)
    return(
        <View>
            <Header titulo={"Carrinho"} link={"iFome"} />
            <View>
                <FlatList
                data={lista}
                renderItem={({item}) => <Text>{item.nome}</Text>}
                />
            </View>
        </View>
    )
}