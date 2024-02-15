import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'

const VRProductItem = ({ item, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={item.productImage}
                        resizeMode={'contain'}
                        style={{ width: 100, height: 120 }}
                    />
                </View>
                <Text style={{ padding: 10, fontWeight: 'bold' }}>{item.price}</Text>

            </View>
        </View>
    )
}

export default VRProductItem

const styles = StyleSheet.create({
    container: {
        width: '33.33333333%',

    },
    content: {
        width: '100%',
        alignItems: 'center',
    },
    imageWrapper: {
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
        //width: '95%',
        //height: 120,
        //justifyContent: 'center'
    }
})