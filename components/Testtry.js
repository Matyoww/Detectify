import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";

export default function Testtry() {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {/* START OF HEADER*/}

        <View style={styles.header}>
          <Text>Counter: {counter}</Text>
        </View>

        {/* END OF HEADER*/}

        <Button
          title="Click me!"
          onPress={clickHandler}
          style={styles.button}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    textDecorationColor: "red",
    color: "red",
  },

  header: {
    backgroundColor: "yellow",
    marginTop: 20,
    padding: 30,
  },
});
