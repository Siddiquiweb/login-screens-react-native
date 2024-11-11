import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const Index = () => {
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Sign in</Text>
      <Text style={styles.paragraph}>
        New user? <Text style={styles.anchor}>Create an account</Text>
      </Text>
      <Text style={styles.inputHead}>Email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Email"
        value={email}
        onChangeText={setEmail} // Update state on text change
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Text style={{ textAlign: "center" }}>
        ______________________or_______________________
      </Text>

      <TouchableOpacity style={styles.linkButton}>
        <View style={styles.buttonContent}>
          <Image
            source={require("./../image/google.png")}
            style={styles.image}
          />
          <Text style={styles.linkButtonText}>Continue With Google</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton}>
        <View style={styles.buttonContent}>
          <Image
            source={require("./../image/facebook.png")}
            style={styles.image}
          />
          <Text style={styles.linkButtonText}>Continue With Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkButton}>
        <View style={styles.buttonContent}>
          <Image
            source={require("./../image/apple.png")}
            style={styles.image}
          />
          <Text style={styles.linkButtonText}>Continue With Apple</Text>
        </View>
      </TouchableOpacity>
      <Image source={require("./../image/futter.png")} />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    bottom: 20,
  },
  heading: {
    fontSize: 35,
    color: "black",
    margin: 5,
    fontWeight: "bold",
    right: 110,
  },
  paragraph: {
    color: "black",
    margin: 10,
    fontWeight: "bold",
    right: 68,
  },
  anchor: {
    color: "#189AB4",
    margin: 10,
    fontWeight: "bold",
  },
  inputHead: {
    color: "black",
    marginTop: 10,
    marginHorizontal: 10,
    fontWeight: "500",
    right: 115,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    width: "100%", // Make input take full width
  },
  button: {
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: 150,
    alignSelf: "center", // Center the button
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  linkButton: {
    backgroundColor: "white",
    borderRadius: 30,
    padding: 10,
    margin: 10,
    width: "100%", // Make link buttons take full width
  },
  linkButtonText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center content horizontally
  },
  image: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  footerImage: {
    width: width - 40, // Make image take full width minus padding
    height: 100, // Adjust height as needed
    resizeMode: "contain", // Adjust image to fit within the given dimensions
  },
});
