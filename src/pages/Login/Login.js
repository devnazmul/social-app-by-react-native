import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { React, useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, STYLE } from '../../../constants';
import { API_END_POINT } from '../../../constants/secret';

const Login = ({ setIsLoggedIn }) => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const auth = () => {
    axios
      .post(`${API_END_POINT}/api/auth/local?populate=*`, {
        identifier: email,
        password: password,
      })
      .then(async (response) => {
        try {
          AsyncStorage.setItem('USER_DATA', JSON.stringify({
            jwt: response.data.jwt,
            user_id: response.data.user.id,
            user_email: response.data.user.email,
            username: response.data.user.email
          }));
        }
        catch (err) {
          throw err;
        }
      }).then(async () => {
        setIsLoggedIn(true)
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
      });
  }
  useEffect(() => {
    AsyncStorage.getItem('USER_DATA').then((data) => {
      const dataObj = JSON.parse(data);
      !dataObj?.jwt ? setIsLoggedIn(false) : setIsLoggedIn(true)
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
