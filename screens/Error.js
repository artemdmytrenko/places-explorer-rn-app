import { Text, View, StyleSheet } from "react-native";

const Error = ({ route }) => {
  const msg = route.params.msg;
  return (
    <View style={styles.error_container}>
      <Text style={styles.error_msg}>{msg}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  error_container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

    padding: 30,
  },
  error_msg: {
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "#e7090953",
    padding: 15,
    borderRadius: 10,
    color: "#050505",
    fontWeight: 500,
  },
});

export default Error;
