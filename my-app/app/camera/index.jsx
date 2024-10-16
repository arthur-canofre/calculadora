import React,{useState, useRef} from "react";
import { View, Text, StyleSheet, Image, Button, Linking, Pressable, Modal } from "react-native";
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
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    img: {
        width: '100%',
        height: '90%'
    },
    btCam: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 4,
        marginRight: 80,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerBt: {
        flexDirection: 'row',
        width: '100%'
    },
    imgBt: {
        width: 65,
        height: 65, 
    }
})

export default  function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [permissaoSalvar, pedirPermissaoSalvar] = MediaLibrary.usePermissions()
    const [foto, setFoto] = useState(null)
    const [ladoCam, setLadoCam] = useState('back')
    const [visivel, setVisivel] = useState(false)
    const [link, setLink] = useState(null)
    const cameraRef = useRef(null)

    if(!permissao){
        return(
            <View></View>
        )
    }

    if(!permissao.granted){
        console.log(`recebo`)
        return(
            <View style={style.containerPerm}>
                <Text style={style.textPermissao}>Mim de permissao de usar a camera</Text>
                <Button
                    title="pedir permissão"
                    onPressOut={pedirPermissao}
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

    const abrirLink = () =>{
        Linking.openURL(link)
        setLink(null)
    }


    return(
        <View style={style.container}>
        <Modal 
            visible= {visivel}
        >
            <Pressable onPress={abrirLink()}><Text>{link}</Text></Pressable>
        </Modal>
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
                onBarcodeScanned={(code) => [setLink(code.data), setVisivel(true)]}
            >
                <View style={style.containerBt}>
                    <Pressable style={style.btCam} onPress={viraCam}><Image style={style.imgBt} source={{uri: 'https://cdn-icons-png.flaticon.com/512/10728/10728618.png'}}/></Pressable>
                    <Pressable style={style.btCam} onPress={tirarFoto}></Pressable>
                </View>
            </CameraView>
            }
        </View>
    )
}