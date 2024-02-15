import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { isLastElement } from '../../helper/Helper'
import { FontAwesome } from '@expo/vector-icons'

const FilterMenuItem_258 = ({ item, data, selectedFilter, setSelectedFilter }) => {

    const handleClick = () => {
        setSelectedFilter(item)
    }

    return (
        <Pressable
            onPress={handleClick}
            style={[styles.container, { borderColor: selectedFilter.id === item.id ? "#F67F00" : "#00000059" }, !isLastElement(data, item) && { marginRight: 10 }]}
        >
            <Text style={{ fontSize: 14, color: selectedFilter.id === item.id ? "#F67F00" : "#000000" }}>{item.name}</Text>
            <FontAwesome
                name={'sort'}
                size={15}
                color={selectedFilter.id === item.id ? "#F67F00" : "#6c757d"}
            />
        </Pressable>
    )
}

export default FilterMenuItem_258

const styles = StyleSheet.create({
    container: {
        padding: 5,
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'center',
        gap: 5
    }
})