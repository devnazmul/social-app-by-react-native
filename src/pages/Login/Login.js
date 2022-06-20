import { API_END_POINT } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, STYLE } from '../../../constants';

const Login = ({ setIsLoggedIn }) => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const auth = () => {
    axios.post(`${API_END_POINT}/users/login`, {
      email: email,
      password: password,
    }).then((response) => {
        if (!response.data.success) {
          alert(response.data.message)
        } else {
          AsyncStorage.setItem('USER_DATA', JSON.stringify({
              token: response.data.data.token,
              user_id: response.data.data.userId,
              user_email: response.data.data.email,
              user_profile_pic_url: response.data.data.profilePic.url,
              username: response.data.data.username
            })).then(()=>{
              setIsLoggedIn(true)
            }).catch((error)=>{
              alert(error)
            })
        }
      }).catch(error => {
        alert('An error occurred:', error.response);
      });
  }

  useEffect(() => {
    AsyncStorage.getItem('USER_DATA').then((data) => {
      const dataObj = JSON.parse(data);
      !dataObj?.token ? setIsLoggedIn(false) : setIsLoggedIn(true)
    }).catch(err => { throw err });
  }, [])

  return (
    <SafeAreaView style={STYLE.secondaryContainer}>
      <View>
        <Text style={STYLE.h1}>Login</Text>
      </View>
      <TextInput
        style={STYLE.input}
        onChangeText={(e) => setEmail(e)}
        placeholder="email"
        placeholderTextColor={COLORS.lightGray}
      />

      <TextInput
        style={STYLE.input}
        onChangeText={(e) => setPassword(e)}
        placeholder="password"
        placeholderTextColor={COLORS.lightGray}
      />

      <TouchableOpacity style={STYLE.formSubmitButton} onPress={() => auth()}>
        <Text style={STYLE.h3}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
