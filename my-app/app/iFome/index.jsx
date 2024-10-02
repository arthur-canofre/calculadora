import React, {  useState, useContext } from "react";
import { SafeAreaView, View, Text, Button, FlatList, StyleSheet, Image } from 'react-native'
import { AppContext } from "../../scripts/AppContext";
import { Link } from "expo-router"
import Header from "../../components/Header";

const style = StyleSheet.create({
    imagem: {
        width: 150,
        height: 150
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    carrinho: {
        color: 'blue',
        textDecorationColor: 'blue',
        textDecorationLine: 'underline'
        
    }
})

export default IFome = () => {

    const dados = [
        {id: "0", nome: "Donut", preco: "15.00", restaurante: "Usina Nuclear de Springfield", img: "https://static.wikia.nocookie.net/simpsons/images/a/aa/Rosquinha.jpg/revision/latest?cb=20101015120457&path-prefix=pt" },
        {id: "1", nome: "Sanduiche Perfeito", preco: "30.00", restaurante: "Casa na arvore", img: "https://149455152.v2.pressablecdn.com/wp-content/uploads/2017/04/jake-the-dog-perfect-sandwich.jpg" },
        {id: "2", nome: "Hamburguer de siri", preco: "50.00", restaurante: "siri cascudo", img: "https://static.wikia.nocookie.net/food-ficcao/images/c/c7/Burguer.png/revision/latest/scale-to-width-down/243?cb=20140313210717&path-prefix=pt-br" },
    ]

    const {lista, setLista} = useContext(AppContext)

    const comprar = function (id){
        const list = [...lista]
        list.push(dados[id])
        list[list.length - 1].id = list.length
        setLista(list)
        console.log(lista)
    }

    return(
        <View>
            <Header titulo={"iFome"}/>
            <View style={style.carrinho}>
                <Link style={style.carrinho} href={'./carrinho'}>Carrinho</Link>
                <FlatList
                    data={dados}
                    renderItem={({item}) => <View style={style.itemContainer}>
                        <Image
                            style={style.imagem}
                            source={{uri: item.img}}
                            resizeMode="contain"
                        />
                        <View>
                            <Text>{item.nome}</Text>
                            <Text>{item.restaurante}</Text>
                            <Text>R${item.preco}</Text>
                            <Button title="comprar" onPress={() => comprar(item.id)}/>
                        </View>
                    </View>}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}