import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CheckBox } from '@rneui/themed'

const CategoryWithRadioItem = ({ item, setShowCategory, setActiveCategory, activeCategory }) => {

    const handleSelect = (id) => {
        setActiveCategory(item.id)
        setShowCategory(false)
    }

    return (
        <Pressable
            onPress={handleSelect}
            style={styles.container}
        >
            <Text style={{ fontSize: 15, color: '#000000' }}>{item.title}</Text>

            <CheckBox
                checked={activeCategory === item.id}
                onPress={() => handleSelect(item.id)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor={'#ff6501'}
                containerStyle={{
                    margin: 0,
                    padding: 0
                }}
            />
        </Pressable>
    )
}

export default CategoryWithRadioItem

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})