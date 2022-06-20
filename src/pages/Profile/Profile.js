import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, STYLE } from '../../../constants'
import Loading from '../../components/Loading'

const Profile = ({ setIsLoggedIn }) => {

  const [logedInUser, setLogedInUser] = useState()

  useEffect(() => {
    AsyncStorage.getItem('USER_DATA').then((data) => {
      const user = JSON.parse(data);
      console.log(user);
      setLogedInUser(user);
    })
  }, [])

  const logOutHandle = () => {
    AsyncStorage.clear().then(() => {
      setIsLoggedIn(false);
    }).catch(err => {
      throw err
    })
  }
  return (
    <SafeAreaView style={STYLE.container}>
      {!logedInUser ? <Loading /> : 
      <TouchableOpacity activeOpacity={0.5} style={{
        backgroundColor: COLORS.lightGray,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
      }}>
        <View>
          <Image style={{
            borderRadius:30
          }} source={{ uri: logedInUser.user_profile_pic_url, width: 40, height: 40 }} />
        </View>
        <Text style={{
          marginLeft:20,
          fontWeight:'bold'
        }}>
          {logedInUser.username}
        </Text>
      </TouchableOpacity>
      }




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