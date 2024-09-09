import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker'

const styles = StyleSheet.create({
    
})

export default Seletor = () => {
    const [pokemon, setPokemon] = useState('')
    const [listaPokemon, setListaPokemon] = useState([])
    const [tipo, setTipo] = useState('')
    const [listaTipo, setListaTipo] = useState([])

    // const listaPokemon = [
    //     {nome: 'pikachu', value: 'pikachu'},
    //     {nome: 'charmander', value: 'charmander'},
    //     {nome: 'bullbassauro', value: 'bullbassauro'},
    //     {nome: 'squirtle', value: 'squirtle'}
    // ]

    useEffect(() => {
            try{
                fetch('https://pokeapi.co/api/v2/type/?offset=0&limit=18')
                    .then((response) => response.json())
                    .then((dados) => setListaTipo(dados.results))
            }catch(erro){
                console.error(erro)
            }
    }, [])

    useEffect(() => {
        console.log(tipo)
        try{
            fetch(`https://pokeapi.co/api/v2/type/${tipo}`)
                .then((response) => response.json())
                .then((dados) => setListaPokemon(dados))
        }catch(erro){
            console.error(erro)
        }
        console.log(listaPokemon)
}, [tipo])

    return(
        <View>
            <Text>Escolha um tipo</Text>
            <Picker
                selectedValue={tipo}
                style={styles.picker}
                onValueChange={(itemValue) => setTipo(itemValue)}
            >
                <Picker.Item label="Selecione um tipo"/>
                {listaTipo.map((item, index) => (
                    <Picker.Item key={index} label={item.name} value={item.value}/>
                ))}
            </Picker>
            { tipo && (
                <View>
                    <Text>Escolha um pokemon</Text>
                    <Picker
                        selectedValue={pokemon}
                        style={styles.picker}
                        onValueChange={(itemValue) => setPokemon(itemValue)}
                    >
                        <Picker.Item label="Selecione um pokemon"/>
                        {Object.values(listaPokemon).map((item, index) => (
                            <Picker.Item key={index} label={item.pokemon.pokemon} value={item.pokemon.url}/>
                        ))}
                    </Picker>
                </View>
            )}
        </View>
    )
}