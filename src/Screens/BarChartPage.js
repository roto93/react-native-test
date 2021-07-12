import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory-native'

const data = [
    { name: 1, value: 10 },
    { name: 2, value: 13 },
    { name: 3, value: 9 },
    { name: 4, value: 12 },
]


const BarChartPage = () => {
    return (
        <View style={styles.container}>
            <View style={{ borderWidth: 1, }}>
                <VictoryChart
                    domainPadding={20}
                    theme={VictoryTheme.material}
                    padding={{ top: 40, bottom: 40, left: 50, right: 20 }} //default
                >
                    <VictoryAxis dependentAxis tickFormat={(value) => value} />
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4]}
                        tickFormat={['one', 'two', 'three', 'four']} />
                    <VictoryBar data={data} x={'name'} y={'value'} />
                </VictoryChart>
            </View>
            <View style={{ marginLeft: 40 }}>
                <Text>name   value</Text>
                {
                    data.map(i => (
                        <Text key={i.name}>({i.name}, {i.value})</Text>
                    ))
                }
            </View>
        </View>
    )
}

export default BarChartPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
    },
})
