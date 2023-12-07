import { StatusBar } from 'expo-status-bar';
import React from 'react';
import image from '../my-app/components/image';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Open up App.js to start working on your app!</Text>
      <image></image>
      <Image style={styles.img} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJoDUR93fX22g3Eky6vyjQyyfugNVX9QI55EUrUETpRk61Ne35J4J5AxwzLt6tLTl_h_8&usqp=CAU"}}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
    marginBottom: 20,
  },
  h1: {
    color: "red",
    fontSize:50
  },
  img: {
    width: 100,
    height:100
  }

});
