import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size = 'small' color = 'red'/>
      <ActivityIndicator size = 'large' color = 'blue' />
      <ActivityIndicator size = 'extra-large' color = 'green' />
      <ActivityIndicator size = 'small' color ='purple' />
      <ActivityIndicator size = 'large' color = '#0000ff'/>
      <ActivityIndicator size = 'extra-large' color = 'purple'/>
      <ActivityIndicator size = 'small' color = 'green'/>
      <ActivityIndicator size = 'large' />
      <ActivityIndicator size = 'extra-large' color = 'purple'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 200, //tämä pois, kun "row" käytössä
  },
  horizontal:{
    //flexDirection: 'row',
    flexDirection: 'column',
    justifyContent: 'space around',
    padding: 30,
  }
});
