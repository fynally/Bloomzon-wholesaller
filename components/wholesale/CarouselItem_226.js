import { Image, StyleSheet, Dimensions, View } from 'react-native'
import React from 'react'

const CarouselItem_226 = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image
                source={item.image}
                resizeMode='cover'
                style={{ width: '100%', height: 200 }}
            />
        </View>
    )
}

export default CarouselItem_226

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: Dimensions.get('screen').width
    }
})