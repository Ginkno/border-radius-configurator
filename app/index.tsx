import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Switch, Button } from "react-native";
import * as Clipboard from 'expo-clipboard';
import CarbonAds from "./carbos_ads";

const App = () => {
  const [borderRadius, setBorderRadius] = useState({
    topLeftH: 0,
    topLeftV: 0,
    topRightH: 0,
    topRightV: 0,
    bottomLeftH: 0,
    bottomLeftV: 0,
    bottomRightH: 0,
    bottomRightV: 0,
  });

  const [shadowEnabled, setShadowEnabled] = useState(false);

  const toggleShadow = async () => {
    setShadowEnabled((prevShadowEnabled) => !prevShadowEnabled);
  };

  const borderRadiusString = `
    border-top-left-radius: ${borderRadius.topLeftH}px ${borderRadius.topLeftV}px;
    border-top-right-radius: ${borderRadius.topRightH}px ${borderRadius.topRightV}px;
    border-bottom-left-radius: ${borderRadius.bottomLeftH}px ${borderRadius.bottomLeftV}px;
    border-bottom-right-radius: ${borderRadius.bottomRightH}px ${borderRadius.bottomRightV}px;
  `;

  const copyToClipboard = () => {
    Clipboard.setStringAsync(borderRadiusString);
    alert("Border radius copied to clipboard!");
  };

  const handleInputChange = (name, value) => {
    setBorderRadius((prev) => ({
      ...prev,
      [name]: Math.max(0, Math.min(100, parseInt(value, 10) || 0)),
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Border Radius Configurator</Text>
      <View style={styles.wrapper}>
        <View style={styles.controls}>
          <View style={styles.control}>
            <Text style={styles.whiteText}>Top Left Horizontal</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={borderRadius.topLeftH.toString()}
              onChangeText={(value) => handleInputChange("topLeftH", value)}
            />
            <Text style={styles.whiteText}>Top Left Vertical</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={borderRadius.topLeftV.toString()}
              onChangeText={(value) => handleInputChange("topLeftV", value)}
            />
          </View>
          <View style={styles.control}>
            <Text style={styles.whiteText}>Bottom Left Horizontal</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={borderRadius.bottomLeftH.toString()}
              onChangeText={(value) => handleInputChange("bottomLeftH", value)}
            />
            <Text style={styles.whiteText}>Bottom Left Vertical</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={borderRadius.bottomLeftV.toString()}
              onChangeText={(value) => handleInputChange("bottomLeftV", value)}
            />
          </View>    
        </View>
        <View
          style={[
            styles.box,
            {
              borderTopLeftRadius: `${borderRadius.topLeftH}px ${borderRadius.topLeftV}px`,
              borderTopRightRadius: `${borderRadius.topRightH}px ${borderRadius.topRightV}px`,
              borderBottomLeftRadius: `${borderRadius.bottomLeftH}px ${borderRadius.bottomLeftV}px`,
              borderBottomRightRadius: `${borderRadius.bottomRightH}px ${borderRadius.bottomRightV}px`,
            },
            shadowEnabled ? styles.shadow : null
          ]}
        />
        <View style={styles.controls}>
          <View style={styles.control}>
            <Text style={styles.whiteText}>Top Right Horizontal</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={borderRadius.topRightH.toString()}
              onChangeText={(value) => handleInputChange("topRightH", value)}
            />
            <Text style={styles.whiteText}>Top Right Vertical</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={borderRadius.topRightV.toString()}
              onChangeText={(value) => handleInputChange("topRightV", value)}
            />
          </View>
          <View style={styles.control}>
            <Text style={styles.whiteText}>Bottom Right Horizontal</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={borderRadius.bottomRightH.toString()}
              onChangeText={(value) => handleInputChange("bottomRightH", value)}
            />
            <Text style={styles.whiteText}>Bottom Right Vertical</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={borderRadius.bottomRightV.toString()}
              onChangeText={(value) => handleInputChange("bottomRightV", value)}
            />
          </View>
        </View>
      </View>
      <CarbonAds />
      <View style={styles.toggleContainer}>
        <View style={styles.shadowBorderRadius}>
          <Text style={styles.borderStyle}>{borderRadiusString}</Text>
        </View>
        <Button title="Copy To Clipboard" onPress={copyToClipboard} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowText: {
    color: "white",
    marginRight: 10,
  },
  whiteText: {
    color: "white",
  },
  borderStyle: {
    marginLeft: 30,
    marginRight: 30,
    color: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "black",
  },
  header: {
    fontSize: 24,
    marginBottom: 50,
    color: "white",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: "blue",
    marginRight: 30,
    marginLeft: 30,
  },
  shadow: {
    shadowColor: "white",
    shadowOffset: {
      width: 3,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  controls: {
    width: 85,
  },
  control: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 3,
    borderRadius: 10,
    paddingLeft: 8,
    marginTop: 10,
    marginBottom: 10,
    color: "white"
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    marginLeft: -15
  },
  shadowBorderRadius: {
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    width: 350,
  }
});

export default App;