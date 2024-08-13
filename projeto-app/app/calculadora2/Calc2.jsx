import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from 'react-native';
import Botao from '../../components/Botao'

const Calc2 = () =>{

    const [num, setNum] = useState(null)
    const nums = ["1",'2','3','4','5','6','7','8','9']

    const numerar = function (num) {
        setNum(num)
    }
    return(
        <View>
            <Text>{num}</Text>
            <View>
                {nums.map((numero) => (
                    <Botao texto={numero} onPressOut={() => numerar(num + numero)}></Botao>
                ))}
            </View>
        </View>
    )

}

export default Calc2