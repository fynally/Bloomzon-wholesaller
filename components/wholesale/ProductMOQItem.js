import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { currencyFunction } from '../../helper/Helper'
import { useDispatch, useSelector } from 'react-redux'
import { activeMOQ, setCurrentMoqData } from '../../globals/variations/moqSlice'

const ProductMOQItem = ({ item }) => {

    const dispatch = useDispatch()
    const { currentMoqData } = useSelector(activeMOQ)

    const handleSelect = () => {
        dispatch(setCurrentMoqData(item))
        console.log("item==>", item)
    }

    return (
        <Pressable
            onPress={handleSelect}
            style={styles.container}>
            <Text style={[styles.priceTag, currentMoqData.price === item.price && styles.selectItem]}>{currencyFunction(item.price)}</Text>

            <Text style={[styles.moq, currentMoqData.moq === item.moq && styles.selectItem]}>MOQ {item.moq.min} pieces</Text>
        </Pressable>
    )
}

export default ProductMOQItem

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    priceTag: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000'
    },
    moq: {
        fontSize: 12,
        fontWeight: '500',
        color: '#343a40'
    },

    selectItem: {
        color: '#ff6501'
    }
})