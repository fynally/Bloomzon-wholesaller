import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { Badge, Divider } from '@rneui/themed'
import { StatusBar } from 'expo-status-bar'
//import AsyncStorage from '@react-native-async-storage/async-storage'

const HeaderFile = ({ navigation, title, hasCart }) => {

    const [cart, setCart] = useState([])

    const canGoBack = navigation.canGoBack()


    return (
        <>

            <View style={styles.container}>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    {
                        canGoBack === true &&
                        <Entypo
                            onPress={() => navigation.goBack()}
                            name='chevron-thin-left'
                            size={18}
                            color={'#000000'}
                        />
                    }

                    <Text style={styles.title}>{title}</Text>

                </View>
                {


                    hasCart &&
                    <Pressable onPress={() => alert("This is static cart")}>
                        <Badge value={2} status="primary" containerStyle={styles.counter} textStyle={{ fontSize: 11 }} badgeStyle={{ padding: 0 }} />

                        <MaterialCommunityIcons
                            name='cart'
                            color={'#000000'}
                            size={26}
                        />
                    </Pressable>
                }

            </View>

            <Divider />
        </>
    )
}

export default HeaderFile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#f8f8f8'
    },
    title: {
        color: '#000000',
        fontSize: 15
    },
    counter: {
        position: 'absolute',
        right: -5,
        zIndex: 2,
        top: -8,
        padding: 2
    }
})