import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const CarbonAds = () => {
  const adCode = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh; }
        #carbonads { font-family: sans-serif; text-align: center; }
      </style>
    </head>
    <body>
      <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=YOUR_CARBON_ADS_CODE&placement=YOUR_SITE_NAME" id="_carbonads_js"></script>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{ html: adCode }}
        style={{ width: 320, height: 100 }} // Adjust ad size
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default CarbonAds;