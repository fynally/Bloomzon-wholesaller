import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '@rneui/base'

const CategoryWithNoImageItem = ({ item, setActiveCategory, activeCategory }) => {

    const handleSelect = () => {
        setActiveCategory(item.id)
    }

    return (
        <Pressable onPress={handleSelect} style={[styles.container, activeCategory === item.id && styles.activeItem]}>
            <Text style={{ color: '#000000', fontSize: 15 }}>{item.id === 1 ? "All" : item.title}</Text>
        </Pressable>
    )
}

export default CategoryWithNoImageItem

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 5
    },
    activeItem: {
        borderBottomWidth: 2,
        borderBottomColor: '#ff6501'
    }
})