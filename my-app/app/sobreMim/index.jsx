import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native'
import Header from "../../components/Header";

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
    }
})

export default SobreMim = () => {
    return(
    <View>
        <Header
        titulo={'Sobre mim'}
        />
        <View style={style.container}>
            <Image
            style={style.img}
            source={{
            uri: 'https://pbs.twimg.com/media/FleiNjfXkAA1von.jpg',
            }}
        />
        </View>
    </View>
    )
}