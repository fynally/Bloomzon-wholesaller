import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RelatedProductItem = ({ item }) => {

    const handleSelect = () => {

        const product = JSON.stringify(item, 0, 2)
        alert(product)
    }

    return (
        <Pressable
            onPress={handleSelect}
            style={styles.container}
        >
            <View style={styles.innerWrapper}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={item.image}
                        resizeMode='contain'
                        style={{ width: 70, height: 70 }}
                    />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 13 }}>{item.price}</Text>

                    <Text style={{ color: '#00000099', fontSize: 12 }}>{`${item.moq} pieces ${'moq'.toUpperCase()}`}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default RelatedProductItem

const styles = StyleSheet.create({
    container: {
        width: '33.33333%',
    },
    innerWrapper: {
        //backgroundColor: '#f5f5',
        margin: 3
    },
    imageWrapper: {
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 10,
        justifyContent: 'center',
        borderRadius: 5
    }
})