import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const ReasonItem_151 = ({ item, setSelectedReason, selectedReason }) => {

    const handleSelect = () => {
        setSelectedReason(item)
    }

    return (
        <Pressable
            onPress={handleSelect}
            style={[styles.container, selectedReason.id === item.id && styles.selected]}>
            <Text style={{ color: selectedReason.id === item.id ? "#000000" : "#00000099", fontSize: 13 }}>{item.reason}</Text>
        </Pressable>
    )
}

export default ReasonItem_151

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 6
    },
    selected: {
        backgroundColor: '#f4f4f4',
        padding: 5,
        borderRadius: 5
    }
})