import React, { useState, } from "react";
import { StyleSheet, View, FlatList, Text, Button } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    itemIn: {
        textDecorationLine: 'none'
    },
    itemC: {
        textDecorationLine: 'line-through'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom: 30
    }
})

const App = () => {

    var [lista ,setLista] = useState([
        {
            id: 0,
            tarefa: 'Consquistar o mundo',
            completo: false
        },
        {
            id: 1,
            tarefa: 'Destruir o capitalismo',
            completo: false
        },
        {
            id: 2,
            tarefa: 'Acabar com o machismo estrutual',
            completo: false
        },
        {
            id: 3,
            tarefa: 'Tomar café da manhã',
            completo: true
        },
        {
            id: 4,
            tarefa: 'Se juntar aos Iluminatti',
            completo: false
        }
    ])

    const completar = function(id){
        var list = [...lista]
        list[id].completo = !list[id].completo
        setLista(list)
    }
    
    return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Lista de tarefas</Text>
        <FlatList
            data={lista}
            renderItem={({item}) => <Text style={item.completo? styles.itemC: styles.itemIn} onPress={() => completar(item.id)}>{item.tarefa}</Text>} 
            keyExtractor={item => item.id}
        />
    </View>
    )
}

export default App