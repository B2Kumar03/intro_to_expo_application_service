import { Text, View, StyleSheet, Button } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "black", textAlign: "center", marginBottom: 20 }}>EXPO APPLICATION SERVICE</Text>
      <Button title="Login" onPress={() => {
        alert("Login")
      }} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
