import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { isLastElement } from '../../helper/Helper'

const ProductImagesItem_261 = ({ item, data }) => {

    const lastElement = isLastElement(data, item)

    const handleClick = () => {
        const product = JSON.stringify(item, 0, 2)
        alert(product)
    }

    return (
        <Pressable
            style={[styles.container, !lastElement && { marginBottom: 5 }]}
            onPress={handleClick}
        >
            <Image
                source={item.v_image}
                resizeMode='contain'
                style={{ width: 150, height: 200 }}
            />
        </Pressable>
    )
}

export default ProductImagesItem_261

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dddddd",
        alignItems: "center",

    }
})