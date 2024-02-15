import { Image, StyleSheet, Dimensions, View } from 'react-native'
import React from 'react'

const CarouselItem = ({ item }) => {

    return (
        <View style={styles.container}>
            <Image
                source={item.v_image}
                resizeMode='contain'
                style={{ width: '100%', height: 150 }}
            />
        </View>
    )
}

export default CarouselItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: Dimensions.get('screen').width,
        height: 160,
        //backgroundColor: 'red'
    }
})