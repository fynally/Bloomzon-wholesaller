import { StyleSheet, Pressable, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedSize, sizeData } from '../../globals/variations/sizesSlice'

const ProductSizeItem = ({ item, setShowSizes }) => {

    const dispatch = useDispatch()

    const { selectedSize } = useSelector(sizeData)

    const handleSelect = () => {
        dispatch(setSelectedSize(item))
        //setSizeVariation(item)
        if (setShowSizes) {
            setShowSizes(false)
        }
    }

    return (
        <Pressable
            onPress={handleSelect}
            style={[styles.container, selectedSize === item && styles.selectedRam]}>
            <Text style={{ color: selectedSize === item ? '#ff6501' : '#000000', fontSize: 14.5 }}>{(item.label ? item.label?.toUpperCase() : item.toUpperCase())}</Text>
        </Pressable>
    )
}

export default ProductSizeItem

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        padding: 8
    },
    selectedRam: {
        borderBottomWidth: 2,
        borderColor: '#ff6501',

    }
})