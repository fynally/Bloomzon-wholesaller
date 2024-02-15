import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const LinkListItem_23 = ({ item, activeLink, setActiveLink }) => {

    const handleLinkClick = () => {
        setActiveLink(item.id)
    }

    return (
        <Pressable
            onPress={handleLinkClick}
            style={styles.container}>
            <Text style={[styles.normalLink, activeLink === item.id && styles.activeLink]}>{item.name}</Text>
        </Pressable>
    )
}

export default LinkListItem_23

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    normalLink: {
        color: "#343a40",
        fontSize: 15
    },
    activeLink: {
        color: "#F67F00",
        borderBottomWidth: 2,
        borderBottomColor: "#F67F00"
    }
})