import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'

const TopMenuItem = ({ item, navigation }) => {

    const handleMenuCLick = () => {
        alert(item.menuTitle)
    }

    return (
        <Pressable
            onPress={handleMenuCLick}
            style={[styles.container, { backgroundColor: item.menuColor }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: item.id == 3 || item.id == 5 ? 200 : 130 }}>
                <View style={{ width: item.id == 3 || item.id == 5 ? 140 : 80 }}>
                    <Text style={{ color: '#ffffff' }}>{item.menuTitle}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <Image
                        source={item.menuIcon}
                        resizeMode={'contain'}
                        style={{ width: 25, height: 25 }}
                    />
                    {/* <Text>{count}</Text> */}
                </View>
            </View>
        </Pressable>
    )
}

export default TopMenuItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginHorizontal: 5,
        marginTop: 10,
        marginBottom: 15
    }
})