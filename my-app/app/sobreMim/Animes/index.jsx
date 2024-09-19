import React from "react";
import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native'
import Header from "../../../components/Header";
import sobreMim from "..";

const style = StyleSheet.create({
    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imagem: {
        width: 200,
        height: 250,
        marginVertical: 5
    },
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    itemLista: {
        alignItems: 'center'
    }
})

export default Animes = () =>{

    const jogos = [
        {
            id: '01',
            nome: 'Fulmetal Alchemist: Brotherhood', 
            url: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/0662921aa3b81ff85737ddeb56deefab.jpg'
        },
        {
            id: '02',
            nome: 'Hunter x Hunter',
            url: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/cbb55a6382682bf71e91f685c6473c5a.jpg'
        },
        {
            id: '03',
            nome: 'One Piece ',
            url: 'https://m.media-amazon.com/images/M/MV5BOTI1MmI4NzItYTg2Yy00NmVkLWIwY2EtZTdhZTNkOTQ5OTZjXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_FMjpg_UX1000_.jpg'
        }
    ]
    return(
        <ScrollView>
            <Header titulo={"Animes favoritos"} link={'sobreMim'}/>
            <View style={style.container}>
                <FlatList
                    data={jogos}
                    renderItem={({item}) => <View style={style.itemLista}>
                                                <Text style={style.titulo}>{item.nome}</Text>
                                                <Image
                                                    style={style.imagem}
                                                    source={{uri: item.url}}
                                                    resizeMode="contain"
                                                />
                                            </View>}
                />
            </View>
        </ScrollView>
    )
}