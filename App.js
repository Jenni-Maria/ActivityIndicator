import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [])
    
  
  return (
    <View style={[styles.container, styles.horizontal]}>
      {isLoading &&
      <ActivityIndicator size = 'small' color = 'red'animating={true} />}
     {/* <ActivityIndicator size = 'large' color = 'blue' animating={true} />
      <ActivityIndicator size = 'extra-large' color = 'green' animating={true} />
      <ActivityIndicator size = 'small' color ='purple' animating={true}/>
      <ActivityIndicator size = 'large' color = '#0000ff'animating={true}/>
      <ActivityIndicator size = 'extra-large' color = 'purple'animating={true}/>
      <ActivityIndicator size = 'small' color = 'green'animating={true}/>
      <ActivityIndicator size = 'large' />
      <ActivityIndicator size = 'extra-large' color = 'purple'animating={true}/> 
      POISTA ISLOADING && , USEEFFECT JA ANIMATING={TRUE}, JOS HALUAT AIKAKATKAISUN POIS KÄYTÖSTÄ*/}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
 horizontal:{
    flexDirection: 'row',
    justifyContent: 'space around',
    padding: 50,
  }
});
