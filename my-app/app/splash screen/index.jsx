import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import BtBack from "../../components/BtBack";

const App = () => {
    return(
        <View style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgb(3,103,166)', 'rgb(179, 218, 242)']}
        style={styles.background}
      />
      <BtBack/>
        <Image
        style={styles.img}
        source={{
          uri: 'https://dcdn.mitiendanube.com/stores/002/482/895/products/la-ele1-0503b4627bcb11dfa816908105064696-1024-1024.png',
        }}
        />
        </View>
    )
}   

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
        height: 250,
        width: 400,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      }
  });

export default App;