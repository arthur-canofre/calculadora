import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Link } from 'expo-router'
 
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40
    },
    botao: {
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 3,
        padding: 5,
        paddingLeft: 10,
        paddingTop: 10
    }
})

export default App => {

    const rotas = [
        {nome: 'calculadora', link: '/calculadora', id: '0'},
        {nome: 'calculadora2', link: '/calculadora2', id: '1'},
        {nome: 'lista de tarefas', link: '/lista-tarefa', id: '2'},
        {nome: 'registro', link: '/registro', id: '3'},
        {nome: 'seletor', link: '/seletor', id: '4'},
        {nome: 'Splash Screen', link: '/splash screen', id: '5'},
        {nome: 'Sobre Mim', link:'/sobreMim'},
        {nome: 'iFome', link:'/iFome'}
    ]

    return(
        <View style={styles.container}>
            <Text>Para onde deseja ir?</Text>
            <FlatList
            data={rotas}
            renderItem={({item}) => <Link style={styles.botao} href={item.link}>{item.nome}</Link>}
            />
        </View>
    )
}