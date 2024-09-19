import { Link } from 'expo-router'
import { View, StyleSheet, Image } from 'react-native'

const style = StyleSheet.create({
    botao: {
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 3,
        padding: 5,
        paddingLeft: 10,
        paddingTop: 10,
        width: 60,
        height: 40,
        backgroundColor: 'whitesmoke',
        marginLeft: 10
    }
})

export default BtBack = ({ link }) => {
    return(
    <Link href={`/${link}`} style={style.botao}>Voltar</Link>
    )
}
