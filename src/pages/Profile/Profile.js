import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { STYLE } from '../../../constants'

const Profile = ({ setIsLoggedIn }) => {
  const logOutHandle = () =>{
    AsyncStorage.clear().then(()=>{
      setIsLoggedIn(false);
    }).catch(err=>{
      throw err
    })
  }
  return (
    <SafeAreaView style={STYLE.container}>
      <Text>Profile</Text>
      <TouchableOpacity
        style={{
          width: '100%',
          padding: 10,
          backgroundColor: 'black',
          borderRadius: 30,
          flexDirection: 'row',
          justifyContent: 'center'
        }}
        onPress={() => logOutHandle()} >
        <Text style={{
          color: 'white',
          fontSize: 15,
          fontWeight: 'bold'
        }}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile