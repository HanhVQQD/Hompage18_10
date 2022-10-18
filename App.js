
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const App = () => {
  return (
    <View style={styles.title}>
      <Text>
        Try editing me! 🎉
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: "red",
  },
});

export default App;