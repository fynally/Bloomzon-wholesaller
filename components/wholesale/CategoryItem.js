import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryItem = ({ item, setActiveItem, activeItem }) => {

    const handleClick = () => {
        setActiveItem(item.id)
    }

    return (
        <Pressable onPress={handleClick} style={styles.container}>
            <View style={[styles.imageHolder, activeItem === item.id && styles.activeItem]}>
                <Image
                    source={item.categoryIcon}
                    resizeMode={'contain'}
                    style={{ width: 45, height: 45 }}
                />
            </View>


            <Text style={{ marginVertical: 10, color: '#000000', fontSize: 14 }}>{item.title}</Text>

        </Pressable>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 5,
    },
    imageHolder: {
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        width: 80,
        height: 80,
        borderRadius: 50,
        justifyContent: 'center'
    },
    activeItem: {
        borderColor: '#ff6501',
        borderWidth: 1
    }
})