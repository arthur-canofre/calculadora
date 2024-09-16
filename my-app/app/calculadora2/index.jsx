import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Botao from '../../components/Botao'
import BtBack from "../../components/BtBack";

const Calc2 = () =>{

    const [num, setNum] = useState("")
    const [num2, setNum2] = useState("")
    const [ope, setOpe] = useState("")
    const nums = [{id: "1", numero: "1"}, {id: "2", numero: "2"}, {id: "3", numero: "3"}, {id: "4", numero: "4"}, {id: "5", numero: "5"}, {id: "6", numero: "6"}, {id: "7", numero: "7"}, {id: "8", numero: "8"}, {id: "9", numero: "9"}]
    const opes = [{id: "+", operacao: "+"}, {id: "-", operacao: "-"}, {id: "X", operacao: "X"}, {id: "/", operacao: "/"}]

    const operar = function (op) {
        setNum2(num)
        setNum("")
        setOpe(op)
    }

    const efetuar = function () {
        switch (ope) {
            case "+":
                setNum(parseInt(num2) + parseInt(num))
                setNum2("")
                setOpe("")
                break
            case "-":
                setNum(parseInt(num2) - parseInt(num))
                setNum2("")
                setOpe("")
                break
            case "X":
                setNum(parseInt(num2) * parseInt(num))
                setNum2("")
                setOpe("")
                break
            case "/":
                setNum(parseInt(num2) / parseInt(num))
                setNum2("")
                setOpe("")
                break
        }
    }
    const limpar = function () {
        setNum("")
        setNum2("")
        setOpe("")
    }
    return(
        <View
            style={styles.container}
        >
            <BtBack/>
            <Text>{num2}</Text>
            <Text>{ope + " " + num}</Text>
            <View style={styles.teclado}>
                <View>
                    <FlatList 
                        data={nums}
                        numColumns={3}
                        renderItem={({item}) => <Botao texto={item.numero} onPressOut={() => setNum(num + item.numero)}/>}
                        keyExtractor={item => item.id}
                    />
                    <View style={styles.tecNum}>
                        <Botao
                            texto={'C'}
                            cor={"a"}
                            onPressOut={() => limpar()}
                        />
                        <Botao
                            texto={'0'}
                            onPressOut={() => setNum(num + 0)}
                        />
                        <Botao
                            texto={'='}
                            cor={"a"}
                            onPressOut={() => efetuar()}
                        />
                    </View>
                </View>
                <FlatList 
                    data={opes}
                    renderItem={({item}) => <Botao texto={item.operacao} onPressOut={() => operar(item.operacao) } cor={"a"}/>}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    teclado: {
        display: 'flex',
        flexDirection: 'row',
    },
    tecNum: {
        display: 'flex',
        flexDirection: 'row'
    }
})
export default Calc2