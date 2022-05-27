import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/pages/Home/Home';
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  useEffect(()=>{
    setIsLoggedIn(true)
  },[])
  return (
    <View style={styles.container}>
      <Home />
      {/* <Registration /> */}
      {/* <Login /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
