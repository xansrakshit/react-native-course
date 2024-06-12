import { StyleSheet, Text, View } from "react-native";

export default function Box({ children, style }) {
  return (
    <View styles={[style, styles.box]}>
      <Text styles={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    // backgroundColor: "#fff",
    // padding: 20,
    borderWidth: 64,
    borderColor: "blue",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
  },
});
