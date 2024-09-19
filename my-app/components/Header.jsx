import React from "react";
import { View, StyleSheet, Text } from "react-native";
import BtBack from "./BtBack";

const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 60,
        backgroundColor: '#3D6FF4',
        alignItems: 'center',
        
    },
    titulo: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default Header = ({titulo, link}) => {
    return(
        <View style={style.container}>
            <BtBack link={link}/>
            <Text style={style.titulo}>{titulo}</Text>
        </View>
    )
}