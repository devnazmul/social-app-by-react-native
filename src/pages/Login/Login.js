import axios from 'axios';
import { React, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../../../constants/colors";
import { API_END_POINT } from '../../../constants/secret';

const Login = () => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const auth = () => {
    axios
      .post(`${API_END_POINT}/api/auth/local?populate=*`, {
        identifier: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.h1}>Login</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={(e) => setEmail(e)}
        placeholder="email"
        placeholderTextColor={colors.lightGray}
      />

      <TextInput
        style={styles.input}
        onChangeText={(e) => setPassword(e)}
        placeholder="password"
        placeholderTextColor={colors.lightGray}
      />

      <TouchableOpacity style={styles.inputBtn} onPress={() => auth()}>
        <Text style={{color:'white',fontSize:20, fontWeight:'bold'}}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryYellow,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  h1: {
    fontSize: 20,
    color: colors.white,
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
  },

  input: {
    fontSize: 20,
    borderRadius: 30,
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  inputBtn: {
    fontSize: 25,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 30,
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: colors.darkGray,
    paddingHorizontal: 20,
  },
});

export default Login;
