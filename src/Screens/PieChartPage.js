import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg from 'react-native-svg'
import { VictoryPie } from 'victory-native'

const getQuadrant = (x, y) => {
    let halfChartSize = 320 / 2
    if (x >= halfChartSize & y < halfChartSize) return 1
    if (x < halfChartSize & y < halfChartSize) return 2
    if (x < halfChartSize & y >= halfChartSize) return 3
    if (x >= halfChartSize & y >= halfChartSize) return 4
}

const CustomComponent = (props) => {
    let x = props.x
    let y = props.y
    let quadrant = getQuadrant(x, y)
    const reverse = x > 320 / 2

    if (quadrant === 1 | quadrant === 2) y -= 24
    if (quadrant === 2 | quadrant === 3) x -= 64



    let fraction = (props.datum.endAngle - props.datum.startAngle) / 360
    let percentage = Math.round(fraction * 1000) / 10

    if (!props.active) return null
    return (
        <View style={{ position: 'absolute', left: x, top: y, flexDirection: reverse ? 'row-reverse' : 'row', alignItems: 'center', }}>
            <Text >{percentage}%</Text>
            <View style={{ width: 24, height: 24, borderWidth: 1, marginHorizontal: 4 }} />
        </View>
    )
}

const data = [
    { tag: 'food', amount: 3500 },
    { tag: 'wearing', amount: 1200 },
    { tag: 'transportation', amount: 2000 },
    { tag: 'living', amount: 5000 },
    { tag: 'other', amount: 900 },
]

const handleDataMutation = dataProps => {
    const { style, radius, active } = dataProps
    return !active
        ? { active: true, radius: 95, style: { ...style, opacity: 1 } }
        : { active: false, radius: 90 }
}

const handleLabelMutation = (props) => {
    console.log(Object.keys(props))
    console.log(props)
    return props.active ? { active: false } : { active: true }
}

const PieChartPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.pieChartContainer}>
                <Svg>
                    <VictoryPie
                        x={'tag'}
                        y={'amount'}
                        data={data}
                        width={320}
                        height={320}
                        padding={70}
                        colorScale={['#FFB74A', '#FF8A70', '#C3F1EC', '#AC90E8', '#D9D9D9']}
                        labelRadius={({ radius }) => radius + 5}
                        labelComponent={<CustomComponent />}
                        style={{ data: { opacity: 0.5 } }}
                        events={[
                            {
                                target: 'data',
                                eventHandlers: {
                                    onPressIn: (e) => {
                                        return [
                                            {
                                                eventKey: "all",
                                                mutation: ({ style }) => { return { style: { ...style, opacity: 0.5 } } }
                                            },
                                            {
                                                target: 'data',
                                                mutation: handleDataMutation
                                            },
                                            {
                                                target: 'labels',
                                                eventKey: "all",
                                                mutation: ({ style }) => { return { style: { ...style, opacity: 0.5 } } }
                                            },
                                            {
                                                target: 'labels',
                                                mutation: handleLabelMutation
                                            }
                                        ]
                                    },
                                }
                            }
                        ]}
                        animate={{ duration: 300 }}
                    />
                </Svg>


            </View>
            {data.map(item => (
                <View key={item.tag} style={{ flexDirection: 'row', }}>
                    <Text style={{ width: 100, height: 40 }}>{item.tag}</Text>
                    <Text style={{ width: 100, height: 40 }}>{item.amount}</Text>
                </View>
            ))
            }
        </View >
    )
}

export default PieChartPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pieChartContainer: {
        borderWidth: 1,
        width: 320,
        height: 320,

    }
})
