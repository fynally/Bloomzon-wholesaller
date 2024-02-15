import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'

const ShortCategoryItem = ({ activeItem, setActiveItem, item, navigation }) => {

    const handleClick = (id) => {
        setActiveItem(item.id)
    }

    return (
        <Pressable
            onPress={handleClick}
            style={[styles.container, activeItem === item.id && styles.activeItem]}>
            <Text style={{ fontSize: 14, color: "#212529" }}>{item.title}</Text>
        </Pressable>
    )
}

export default ShortCategoryItem

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 4,
        borderColor: '#343a40',
        margin: 5,
        marginBottom: 15,
        borderRadius: 4,
    },
    activeItem: {
        borderColor: '#ff6501',
        borderWidth: 2
    }
})