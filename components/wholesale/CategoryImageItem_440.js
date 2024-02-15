import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { isLastElement } from '../../helper/Helper'

const CategoryImageItem_440 = ({ item }) => {

    //const lastElement = isLastElement(imagesData, item)

    return (
        <Pressable
            style={[styles.container]}
        >
            <View style={styles.inner}>

                <Image
                    source={item.image}
                    style={{ width: '100%', height: 70 }}
                    resizeMode='cover'
                />
            </View>
        </Pressable>
    )
}

export default CategoryImageItem_440

const styles = StyleSheet.create({
    container: {
        width: '33%'
    },
    inner: {
        width: '100%',
        padding: 4
    }
})