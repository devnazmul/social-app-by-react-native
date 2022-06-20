import { API_END_POINT } from "@env";
import axios from "axios";
import { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, STYLE } from "../../../constants";

const Registration = () => {

  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const registrationHandler = () => {
    
    console.log({ fullName, email, password });
    axios
      .post(`${API_END_POINT}/users/create`, {
        fullName,
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
    <SafeAreaView style={STYLE.secondaryContainer}>
      <View>
        <Text style={STYLE.h1}>Create an account</Text>
      </View>

      <TextInput
        style={STYLE.input}
        onChangeText={(e) => {setFullName(e)}}
        placeholder="full name"
        placeholderTextColor={COLORS.lightGray}
      />

      <TextInput
        style={STYLE.input}
        onChangeText={(e) => setEmail(e)}
        placeholder="email"
        placeholderTextColor={COLORS.lightGray}
      />
      {/* <View style={styles.siblings}>
        <TextInput
          style={styles.siblingInput}
          onChangeText={onChangeText}
          placeholder="email"
          placeholderTextColor={COLORS.lightGray}
        />
        <TextInput
          style={styles.siblingInput}
          onChangeText={}
          placeholder="email"
          placeholderTextColor={COLORS.lightGray}
        />
      </View> */}

      <TextInput
        style={STYLE.input}
        onChangeText={(e) => setPassword(e)}
        placeholder="password"
        placeholderTextColor={COLORS.lightGray}
      />

      <TouchableOpacity
        style={STYLE.formSubmitButton}
        onPress={() => registrationHandler()}
      >
        <Text style={STYLE.h3}>Press Here</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default Registration;
