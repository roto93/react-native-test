import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TO = ({ title, onPress }) => {

    return (
        <TouchableOpacity
            onPressIn={onPress}
            style={styles.TO}
        >
            <Text style={styles.TO_title}>{title}</Text>
        </TouchableOpacity>
    )
}

const HomePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TO title={'長條圖'} onPress={() => { navigation.navigate('BarChart') }} />
            <TO title={'圓餅圖'} onPress={() => { navigation.navigate('PieChart') }} />
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TO: {
        paddingHorizontal: 40,
        paddingVertical: 12,
        backgroundColor: '#ddbea9',
        marginBottom: 24,
    },
    TO_title: {
        fontSize: 20,

    }
})
