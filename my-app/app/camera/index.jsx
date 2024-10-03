import React,{useState, useRef} from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { CameraView, useCameraPermissions } from 'expo-camera'

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    textPermissao: {
        textAlign: 'center'
    },
    camera: {
        flex: 1,
        height: '100%',
        width: '100%'
    }
})

export default  function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)

    if(!permissao){
        return(
            <View></View>
        )
    }

    if(!permissao.granted){
        return(
            <View style={style.container}>
                <Text style={style.textPermissao}>Mim de permissao de usar a camera</Text>
                <Button
                    title="pedir permissão"
                    onPress={pedirPermissao}
                />
            </View>
        )
    }

    const tirarFoto = async () => {
        const foto = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true
        })
        setFoto(foto)
    }

    return(
     <CameraView facing={'front'} style={style.camera} ref={cameraRef}>
        <View>
            <Button title="tira"/>
        </View>
     </CameraView>
    )
}