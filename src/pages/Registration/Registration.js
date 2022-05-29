import axios from "axios";
import { React, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../../../constants/colors";
import { API_END_POINT } from "../../../constants/secret";

const Registration = () => {

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const registrationHandler = () => {
    
    console.log({ username, email, password });
    axios
      .post(`${API_END_POINT}/api/auth/local/register`, {
        username,
        email,
        password
      })
      .then(response => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
      });
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.h1}>Create an account</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={(e) => {setUsername(e)}}
        placeholder="username"
        placeholderTextColor={colors.lightGray}
      />

      <TextInput
        style={styles.input}
        onChangeText={(e) => setEmail(e)}
        placeholder="email"
        placeholderTextColor={colors.lightGray}
      />
      {/* <View style={styles.siblings}>
        <TextInput
          style={styles.siblingInput}
          onChangeText={onChangeText}
          placeholder="email"
          placeholderTextColor={colors.lightGray}
        />
        <TextInput
          style={styles.siblingInput}
          onChangeText={}
          placeholder="email"
          placeholderTextColor={colors.lightGray}
        />
      </View> */}

      <TextInput
        style={styles.input}
        onChangeText={(e) => setPassword(e)}
        placeholder="password"
        placeholderTextColor={colors.lightGray}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => registrationHandler()}
      >
        <Text style={styles.h3}>Press Here</Text>
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
    paddingHorizontal: 10
  },
  siblings: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  h1: {
    color: colors.primaryDark,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
  },
  h3: {
    fontSize: 20,
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    fontSize: 20,
    borderRadius: 30,
    height: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  siblingInput: {
    fontSize: 20,
    borderRadius: 30,
    height: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    width: '48%'
  },
  submitButton: {
    marginTop: 20,
    height: 40,
    borderRadius: 30,
    display: 'flex',
    backgroundColor: colors.primaryDark,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Registration;
