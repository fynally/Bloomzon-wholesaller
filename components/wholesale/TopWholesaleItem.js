import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopWholesaleItem = ({ item, navigation }) => {

    const handleClick = () => {
        alert("Handle wholesale navigation here")
    }

    return (
        <Pressable onPress={handleClick} style={styles.container}>

            <Image
                source={item.menuIcon}
                resizeMode={'contain'}
                style={{ width: 100, height: 100 }}
            />

            <Text style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold' }}>{item.title}</Text>

            <View style={{ padding: 5, alignSelf: 'center' }}>
                <Text style={{ color: '#000000', textAlign: 'center' }}>{item.category}</Text>
            </View>

        </Pressable>
    )

}

export default TopWholesaleItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        margin: 5,
        padding: 10,
        alignItems: 'center',
        borderRadius: 5
    }
})