import React, { memo, useRef, useState, useEffect, useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated'


const AnimatedPath = Animated.createAnimatedComponent(Path)

export default memo(function PiPath({ d, progress }) {
    if (progress == null) progress = useSharedValue(0)
    const ref = useRef<typeof AnimatedPath>(null)
    const [length, setLength] = useState(0);
    const animatedProps = useAnimatedProps(() => {
        return {
            strokeDashoffset: length - length * progress.value,
        }
    })
    useLayoutEffect(() => {
        progress.value = withTiming(1, { duration: 2000 })
    }, [progress])
    return (
        <View>
            <AnimatedPath
                animatedProps={animatedProps}
                ref={ref} onLayout={() => { setLength(ref.current.getTotalLength()) }}
                d={d} strokeWidth={4} stroke={'black'} strokeLinecap='round'
                strokeDasharray={`${length} 600`} // strokeDasharray = 0 時無法作用
                strokeDashoffset={length} //不知道為什麼
            />
        </View>
    )
})

const styles = StyleSheet.create({})
