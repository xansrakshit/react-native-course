import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#222222" }}>Box</Box>
      <Box style={{ backgroundColor: "#333333" }}>Box</Box>
      <Box style={{ backgroundColor: "#444444" }}>Box</Box>
      <Box style={{ backgroundColor: "#555555", padding: 20 }}>Box</Box>
      <Box style={{ backgroundColor: "#666666" }}>Box</Box>
      <Box style={{ backgroundColor: "#777777" }}>Box</Box>
      <Box style={{ backgroundColor: "#888888" }}>Box</Box>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: { marginTop: 64, borderWidth: 64, borderColor: "red" },
});
