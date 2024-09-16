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
        try{
            fetch(tipo)
                .then((response) => response.json())
                .then((dados) => setListaPokemon(dados.pokemon))
        }catch(erro){
            console.error(erro)
        }
    }, [tipo])

    return(
        <View>
            <Text>Escolha um tipo</Text>
            <Picker
                selectedValue={tipo}
                style={styles.picker}
                onValueChange={(itemValue) => setTipo(itemValue)}
            >
                <Picker.Item label={"Selecione um tipo"}/>
                {listaTipo.map((item, index) => (
                    <Picker.Item key={index} label={item.name} value={item.url}/>
                ))}
            </Picker>
                <View>
                    <Text>Escolha um pokemon</Text>
                    <Picker
                        selectedValue={pokemon}
                        style={styles.picker}
                        onValueChange={(itemValue) => setPokemon(itemValue)}
                    >
                        <Picker.Item label="Selecione um pokemon"/>
                        {listaPokemon.map((item, index) => (
                            <Picker.Item key={index} label={item.pokemon.name} value={item.pokemon.url}/>
                        ))}
                    </Picker>
                </View>
        </View>
    )
}