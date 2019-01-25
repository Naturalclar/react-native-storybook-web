import React from "react";
import { View, StyleSheet } from "react-native";
import { FormLabel, FormInput, Button, Card } from "react-native-elements";

const styles = StyleSheet.create({
  container: { paddingBottom: 10 }
});

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };
  onChangeText() {
    return;
  }
  render() {
    return (
      <Card>
        <View style={styles.container}>
          <FormLabel>Username</FormLabel>
          <FormInput onChangeText={() => onChangeText()} />
          <FormLabel>Password</FormLabel>
          <FormInput onChangeText={() => onChangeText()} />
        </View>
        <Button
          icon={{ name: "code" }}
          backgroundColor="#03A9F4"
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title="Login"
        />
      </Card>
    );
  }
}

export default LoginForm;
