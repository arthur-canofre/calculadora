import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Header from "../../components/Header";

const App = () => {
    return(
      <View style={styles.tudo}>
        <Header titulo={"splash screen"}/>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgb(3,103,166)', 'rgb(179, 218, 242)']}
          style={styles.background}
        />
          <View style={styles.container}>
          <Image
          style={styles.img}
          source={{
            uri: 'https://dcdn.mitiendanube.com/stores/002/482/895/products/la-ele1-0503b4627bcb11dfa816908105064696-1024-1024.png',
          }}
          />
          </View>
      </View>
    )
}   

const styles = StyleSheet.create({
    container: {
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
        position: 'absolute',
        height: 250,
        width: 400,
        top: 200
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 60,
        height: '93%',
      },
      tudo: {
        height: '100%'
      }
  });

export default App;