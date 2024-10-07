import React,{useState, useRef} from "react";
import { View, Text, StyleSheet, Image, Button, Linking } from "react-native";
import { CameraView, useCameraPermissions } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'

const style = StyleSheet.create({
    containerPerm: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textPermissao: {
        textAlign: 'center'
    },
    camera: {
        //flex: 1,
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    container: {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: '100%'
    },
    img: {
        width: '100%',
        height: '90%'
    }
})

export default  function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [permissaoSalvar, pedirPermissaoSalvar] = MediaLibrary.usePermissions()
    const [foto, setFoto] = useState(null)
    const [ladoCam, setLadoCam] = useState('back')
    const cameraRef = useRef(null)

    if(!permissao){
        return(
            <View></View>
        )
    }

    if(!permissao.granted){
        return(
            <View style={style.containerPerm}>
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

    const viraCam = () => {
        setLadoCam(ladoCam == 'back'? 'front': 'back')
    }

    const salvarFoto = async () => {
        if(permissaoSalvar.status !== 'granted'){
            await pedirPermissaoSalvar()
        }


        MediaLibrary.saveToLibraryAsync(foto.uri)
        setFoto(null)
    }

    return(
        <View style={style.container}>
            
            { foto ? <View style={style.container}> 
                <Image style={style.img} source={{uri: foto.uri}} resizeMode="contain"/> 
                <Button title="Salva" onPress={salvarFoto}/>
                <Button title="Volta" onPress={() => setFoto(null)}/>
            </View>:

            <CameraView facing={ladoCam} 
                style={style.camera} 
                ref={cameraRef} 
                barcodeScannerSettings={{
                   barcodeTypes: ['qr'] 
                }}
                onBarcodeScanned={(code) => Linking.openURL(code.data)}
            >
                <View>
                    <Button title="tira" onPress={tirarFoto}/>
                    <Button title="vira" onPress={viraCam}/>
                </View>
            </CameraView>
            }
        </View>
    )
}