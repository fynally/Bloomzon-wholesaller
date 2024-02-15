import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'
import { formatMoney } from '../../helper/Helper'

const ProductsItem = ({ item }) => {

    const MOQ = item.moqs.base

    const lowest_moq_Min = MOQ.reduce((minMinObject, currentObject) => {
        // Compare the 'min' values of the current object and the minMinObject
        if (currentObject.moq.min < minMinObject.moq.min) {
            return currentObject; // Update minMinObject if the current 'min' is lower
        } else {
            return minMinObject; // Keep the current minMinObject if the 'min' is not lower
        }
    }, MOQ[0]);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={{ alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 5, width: '95%', height: 120, justifyContent: 'center' }}>
                    {
                        item.id === 6
                            ?
                            <>
                                <SimpleLineIcons
                                    name={'arrow-right-circle'}
                                    size={30}
                                    color={'#000000'}
                                />

                                <Text style={{ textAlign: 'center', letterSpacing: 1, padding: 5, width: 88, fontSize: 13 }}>Visit Seller Portal</Text>
                            </>

                            :

                            <Image
                                source={item.image}
                                resizeMode={'contain'}
                                style={{ width: 100, height: 120 }}
                            />
                    }
                </View>
                {
                    item.id !== 6 &&
                    <Text style={{ padding: 10, fontWeight: 'bold' }}>{formatMoney(lowest_moq_Min.price)}</Text>
                }

            </View>
        </View>
    )
}

export default ProductsItem

const styles = StyleSheet.create({
    container: {
        width: '33.33333333%',

    },
    content: {
        width: '100%',
        alignItems: 'center',
    }
})