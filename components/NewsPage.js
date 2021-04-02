import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { ButtonGroup } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import APIArticles from "./APIArticles.js";
//import SavedArticles from "../components/SavedArticles";
import { StyleSheet } from "react-native";

export default ({ navigation }) => {
  // buttons
  const [selectHeader, setHeader] = useState(0);
  const buttons = ["Top Articles", "Saved Articles"];

  //button handlers
  const changeContent = (val) => {
    val === 0 ? setHeader(0) : setHeader(1);
  };
  return (
    <SafeAreaProvider>
      <ButtonGroup
        selectedIndex={selectHeader}
        selectHeader={selectHeader}
        onPress={changeContent}
        buttons={buttons}
        disabledSelectedTextStyle={{ color: "#BDC2C6" }}
        selectedTextStyle={{ color: "#fff", fontWeight: "bold" }}
        selectedButtonStyle={styles.pri_color}
        containerStyle={styles.container}
      />
      {selectHeader === 0 ? (
        <View style={{ flex: 1 }}>
          {/* CHANGE CONTENT HERE*/}

          <ScrollView style={{ backgroundColor: "#BDC2C6" }}>
            {/* <APIArticles /> */}
          </ScrollView>

          {/* END OF CONTENT HERE*/}
        </View>
      ) : (
        <View>
          <SavedArticles />
        </View>
      )}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  pri_color: {
    backgroundColor: "#435F71",
  },

  sec_color: {},

  container: {
    backgroundColor: "#fff",
    borderColor: "#435F71",
  },
});
