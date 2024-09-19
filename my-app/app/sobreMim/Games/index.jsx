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

export default Games = () =>{

    const jogos = [
        {
            id: '01',
            nome: 'Hollow Knight', 
            url: 'https://static.wikia.nocookie.net/hollowknight/images/e/ea/Hollow_Knight_VoidHeart_Edition_Cover.jpg/revision/latest?cb=20220615152331&path-prefix=pt'
        },
        {
            id: '02',
            nome: 'Elden Ring',
            url: 'https://www.the-pixels.com/wp-content/uploads/2024/07/Shadow-of-the-Erdtree-Featured.webp'
        },
        {
            id: '03',
            nome: 'Minecraft',
            url: 'https://upload.wikimedia.org/wikipedia/pt/9/9c/Minecraft_capa.png'
        },
        {
            id: '04',
            nome: 'Sekiro: Shadows Die Twice',
            url: 'https://upload.wikimedia.org/wikipedia/pt/7/7b/Sekiro_Shadows_Die_Twice_capa.png'
        },
        {
            id: '05',
            nome: 'Katana Zero',
            url: 'https://products.eneba.games/resized-products/AVzGqTQ_xLFZHbjfPOCsspyP8-uoyp-oKZ0TPciYtsw_350x200_1x-0.jpg'
        }
    ]
    return(
        <ScrollView>
            <Header titulo={"Jogos favoritos"} link={'sobreMim'}/>
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