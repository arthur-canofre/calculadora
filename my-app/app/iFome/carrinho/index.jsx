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
                renderItem={({item}) => <View>
                    <View>
                        <Text>{item.nome}</Text>
                        <Text>{item.restaurante}</Text>
                    </View>
                    <Text>{item.preco}</Text>
                </View>}
                keyExtractor={item => item.id}
                />
            </View>
            <View>
                
            </View>

        </View>
    )
}