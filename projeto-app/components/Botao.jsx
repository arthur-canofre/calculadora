import { Pressable, View , StyleSheet , Text } from "react-native";

const Botao = function ({texto, onPressOut}) {
    return <Pressable
    style={styles.botao}
    onPressOut={onPressOut}
    >
        <View>
            <Text> {texto} </Text>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    botao: {
        width: 200,
        height: 50,
        backgroundColor: 'red'
    }
  });

export default Botao