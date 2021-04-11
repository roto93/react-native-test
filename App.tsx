import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg'
import Animated, { useSharedValue, useAnimatedProps, withTiming, withSequence, withDelay, Easing } from 'react-native-reanimated'
export default function App() {
    const AnimatedPath = Animated.createAnimatedComponent(Path)

    const [length1, setLength1] = useState(0);
    const [length2, setLength2] = useState(0);
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const progress1 = useSharedValue(0)
    const progress2 = useSharedValue(0)

    const path1 = 'M 10 10 L 200 10 '
    const path2 = 'M 10 100 L 200 100'
    const animatedProps1 = useAnimatedProps(() => {
        return {
            strokeDashoffset: length1 - length1 * progress1.value
        }
    })
    const animatedProps2 = useAnimatedProps(() => {
        return {
            strokeDashoffset: length2 - length2 * progress2.value
        }
    })
    useEffect(() => {
        progress1.value = withTiming(1, { easing: Easing.linear })
        progress2.value = withDelay(300, withTiming(1, { easing: Easing.linear }))
    }, [])

    return (
        <View style={styles.container}>
            <Svg width={300} height={200} viewBox={'0 0 473 217'}>
                <AnimatedPath animatedProps={animatedProps1} ref={ref1} onLayout={() => { setLength1(ref1.current.getTotalLength()) }} stroke='black' d={path1} strokeWidth={4} strokeDasharray={`${length1} 1000`} strokeDashoffset={length1} />
                <AnimatedPath animatedProps={animatedProps2} ref={ref2} onLayout={() => { setLength2(ref2.current.getTotalLength()) }} stroke='black' d={path2} strokeWidth={4} strokeDasharray={`${length2} 1000`} strokeDashoffset={length2} />
            </Svg>
            <Button title='test' onPress={() => {
                progress1.value = withTiming(1)
                progress2.value = withTiming(1)
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
