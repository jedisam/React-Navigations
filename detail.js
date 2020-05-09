import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import { styles } from "./styles/styles"

 class detail extends Component {
    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.title}> Navigation Drawer </Text>
                <Button 
                    style={styles.btns}
                    title="Go to Bottom Tab"
                    onPress={()=>{this.props.navigation.navigate('Bottom Tabs')}}
                />
                <View style={styles.btns}></View>
                 <Button 
                    style={styles.btns}
                    title="Go to Top Tab"
                    onPress={()=>{this.props.navigation.navigate('Top Tabs')}}
                />
            </View>
        )
    }
}

export default detail
