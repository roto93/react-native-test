import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Article = ({ color }) => {
    return (
        <View style={styles.container}>
            <Text testID="article1" style={{ color: color }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </View>
    )
}

export default Article

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e3e3e3',
        width: '80%',
    }
})
