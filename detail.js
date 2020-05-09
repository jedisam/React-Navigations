import React, { Component } from "react";
import { Text, View, Button } from "react-native";

import { styles } from "./styles/styles";

class detail extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}> {this.props.route.params.ScreenName} </Text>
        <Button
          style={styles.btns}
          title="Go to Bottom Tab"
          onPress={() => {
            this.props.navigation.navigate("Bottom Tabs", { name: "Param1" });
          }}
        />
        <View style={styles.btns}/>
        <Button
          style={styles.btns}
          title="Go to Top Tab"
          onPress={() => {
            this.props.navigation.navigate("Top Tabs", { name: "Param2" });
          }}
        />
        <View style={styles.btns}/>
        <Button
          style={styles.btns}
          title="Pass Data Back"
          onPress={() => {
            this.props.navigation.navigate("Feed", { data: "Gotch u" });
          }}
        />
      </View>
    );
  }
}

export default detail;
