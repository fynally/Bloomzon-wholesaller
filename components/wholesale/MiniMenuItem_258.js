import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { isLastElement } from '../../helper/Helper'

const MiniMenuItem_258 = ({ item, data, selectedMenu, setSelectedMenu }) => {

    const handleClick = () => {
        setSelectedMenu(item)
    }

    return (
        <Pressable
            onPress={handleClick}
            style={[styles.container, { borderColor: selectedMenu.id === item.id ? "#F67F00" : "#6c757d" }, !isLastElement(data, item) && { marginRight: 10 }]}
        >
            <Text style={{ fontSize: 14, color: selectedMenu.id === item.id ? "#F67F00" : "#000000" }}>{item.name}</Text>
        </Pressable>
    )
}

export default MiniMenuItem_258

const styles = StyleSheet.create({
    container: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
    }
})