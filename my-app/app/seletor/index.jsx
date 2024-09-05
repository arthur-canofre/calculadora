import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker'

const styles = StyleSheet.create({
    
})

export default Seletor = () => {
    const [pokemon, setPokemon] = useState('')
    const [listaPokemon, setListaPokemon] = useState([])

    // const listaPokemon = [
    //     {nome: 'pikachu', value: 'pikachu'},
    //     {nome: 'charmander', value: 'charmander'},
    //     {nome: 'bullbassauro', value: 'bullbassauro'},
    //     {nome: 'squirtle', value: 'squirtle'}
    // ]

    useEffect(() => {
            try{
                fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1025')
                    .then((response) => response.json())
                    .then((dados) => setListaPokemon(dados.results))
            }catch(erro){
                console.error(erro)
            }
    }, [])

    return(
        <View>
            <Text>Escolha um Pokemon</Text>
            <Picker
                selectedValue={pokemon}
                style={styles.picker}
                onValueChange={(itemValue) => setPokemon(itemValue)}
            >
                <Picker.Item label="Selecione um pokémon"/>
                {listaPokemon.map((item, index) => (
                    <Picker.Item key={index} label={item.name} value={item.url}/>
                ))}
            </Picker>
        </View>
    )
}