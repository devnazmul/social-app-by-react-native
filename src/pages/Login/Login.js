import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text } from "react-native";
import { Button } from "react-native-web";
import colors from "../../../constants/colors";

const Login = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.h1}>Login</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="email"
        placeholderTextColor={colors.lightGray}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="password"
        placeholderTextColor={colors.lightGray}
      />
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
});

export default Login;
