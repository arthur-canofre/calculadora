import { Link } from 'expo-router'
import { View, StyleSheet, Image } from 'react-native'

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',

    },
    botao: {
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 3,
        padding: 5,
        paddingLeft: 10,
        paddingTop: 10,
        width: 60
    }
})

export default BtBack => {
    return(
    <View style={style.container}>
        <Link href={'/'} style={style.botao}>Voltar</Link>
    </View>
    )
}
