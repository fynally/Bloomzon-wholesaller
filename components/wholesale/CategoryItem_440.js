import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '@rneui/base'

const CategoryItem_440 = ({ item, setActiveCategory, activeCategory }) => {

    const handleSelect = () => {
        setActiveCategory(item)
    }

    return (
        <Pressable onPress={handleSelect} style={[styles.container, activeCategory.id === item.id && styles.activeItem]}>
            <Text style={{ color: activeCategory.id === item.id ? "#ff6501" : '#000000', fontSize: 15 }}>{item.id === 1 ? "All" : item.title}</Text>
        </Pressable>
    )
}

export default CategoryItem_440

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 5
    },
    activeItem: {
        borderBottomWidth: 2,
        borderBottomColor: '#ff6501',
        color: "#ff6501"
    }
})