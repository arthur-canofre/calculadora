import React, { useState } from "react";
import { TextInput, View, Text, Pressable, StyleSheet, SafeAreaView} from 'react-native'
import BtBack from "../../components/BtBack";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    input: {
        borderColor: 'black',
        borderWidth: 3,
        width: 200,
        height: 40,
        marginBottom: 5
    },
    containerTitle: {
        width: '50%',
        display: 'flex'  
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold'
    },
    button: {
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 10,
        padding: 10
    }
})

export default SignUp = () => {

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const registrarUsuario = async function() {
        if (!nome || !email || !senha){
            console.log("os parametros foram preenchidos!")
            return
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({name: nome, email: email, password: senha})
        })

        if(!resposta){
            console.log('erro')
        }else if(resposta.status == 200){
            console.log(resposta.status)
        }else{
            console.log(resposta.status)
        }
    }

    return(
            <SafeAreaView style={styles.container}>
                <BtBack/>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Sign Up</Text>
                </View>
                <View>
                    <Text>Nome:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setNome(text)}  
                        value={nome}
                    />
                    <Text>Email:</Text>
                    <TextInput
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={styles.input}
                    />
                    <Text>Senha:</Text>
                    <TextInput
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                        secureTextEntry={true}
                        style={styles.input}
                    />
                </View>
                <View>
                    <Pressable 
                        style={styles.button}
                        onPress={registrarUsuario}
                    >
                        <Text>Sign Up</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
    )
}