import { Pressable, View , StyleSheet , Text } from "react-native";

const Botao = function ({texto, onPressOut, cor}) {
    return <Pressable
    style={cor === "a"? styles.botaoA: styles.botao}
    onPressOut={onPressOut}
    >
        <View>
            <Text> {texto} </Text>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    botao: {
        display: `flex`,
        alignItems: `center`,
        justifyContent: 'center',
        width: 98.3,
        height: 98.3,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'gray'
    },
    botaoA: {
        display: `flex`,
        alignItems: `center`,
        justifyContent: 'center',
        width: 98.3,
        height: 98.3,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'yellow'
    }
  });

export default Botao