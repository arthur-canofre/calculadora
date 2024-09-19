import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native'
import Header from "../../components/Header";
import { Link } from "expo-router";

const style = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        
    },
    img: {
        width: 150,
        height: 150,
        marginVertical: 40,
        borderRadius: 100
    },
    title: {
        fontSize: 20,
        fontWeight: `bold`,
        marginBottom: 10
    },
    texto: {
        width: 300,
        textAlign: 'center'

    },
    botao: {
            borderColor: 'black',
            borderRadius: 10,
            borderWidth: 3,
            padding: 5,
            paddingLeft: 10,
            paddingTop: 10,
            width: 200,
            height: 40,
            backgroundColor: 'whitesmoke',
            marginTop: 10
    }
})

export default SobreMim = () => {
    return(
    <View>
        <Header
        titulo={'Sobre mim'}
        link={""}
        />
        <View style={style.container}>
            <Image
            style={style.img}
            source={{
            uri: 'https://pbs.twimg.com/media/FleiNjfXkAA1von.jpg',
            }}
            />
            <Text style={style.title}>Seja bem vindo(a) ao meu app</Text>
            <Text style={style.texto}>Ola, meu nome e Arthur Canofre Simoes, tenho 17 anos e sou curso o \
            Ensino Médio Integrado – Técnico em Desenvolvimento de Sistemas :D</Text>
            <View>
                <Link href={'./Games'} style={style.botao}> Veja meus jogos favoritos</Link>
                <Link href={'./Animes'} style={style.botao}> Veja meus animes favoritos</Link>
            </View>
        </View>
    </View>
    )
}