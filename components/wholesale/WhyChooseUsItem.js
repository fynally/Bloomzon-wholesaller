import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WhyChooseUsItem = ({ item }) => {

    const handleClick = () => {
        const reason = JSON.stringify(item, 0, 2)
        alert(reason)
    }

    return (
        <Pressable
            onPress={handleClick}
            style={styles.container}
        >
            <View style={{ width: 30, height: 30, borderRadius: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#9EE5E2', }}>
                <Image source={item.image} resizeMode='contain' style={{ width: 20, height: 20 }} />
            </View>
            <Text style={{ color: '#000000', fontSize: 13, textAlign: 'left' }}>{item.title}</Text>
        </Pressable>
    )
}

export default WhyChooseUsItem

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        padding: 5,
        borderRadius: 4,
        borderColor: '#00000029',
        gap: 4
    }
})