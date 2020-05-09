import React, { Component } from "react";
import { Text, View, Button } from "react-native";

import { styles } from "./styles/styles";

class Feed extends Component {
  render() {
    console.log('Check Data',this.props);
    console.log('Check',!undefined)
    if (!this.props.route.params) {
      return (
        <View style={styles.center}>
          <Text style={styles.title}> Navigation Drawer </Text>
          <Button
            title="Go to Details Page"
            onPress={() => {
              this.props.navigation.navigate("Detail", {
                ScreenName: "My Detail Screen",
              });
            }}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.center}>
          <Text style={styles.title}>{this.props.route.params.data}</Text>
          <Button
            title="Go to Details Page"
            onPress={() => {
              this.props.navigation.navigate("Detail", {
                ScreenName: "My Detail Screen",
              });
            }}
          />
        </View>
      );
    }
  }
}

export default Feed;
