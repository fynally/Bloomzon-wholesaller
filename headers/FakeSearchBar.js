import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons, EvilIcons, MaterialCommunityIcons, Octicons, AntDesign } from '@expo/vector-icons'
import { Divider } from '@rneui/themed'

const FakeSearchBar = ({ navigation, setShowSearch }) => {

    const canGoBack = navigation.canGoBack()

    const handleSearch = () => {
        setShowSearch(true)
    }

    const scanCode = () => {
        alert("Scan code function called")
    }

    const takePicture = () => {
        alert("Take picture function called")
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, gap: 10, }}>
            {
                canGoBack &&
                <View style={{ width: '6%' }}>
                    <AntDesign onPress={() => navigation.goBack()} name="arrowleft" size={25} color="#0D1317" />
                </View>
            }


            <View style={[styles.searchWrapper, canGoBack && { width: '90%' }]}>

                <View style={[styles.leftSearchItems, { paddingHorizontal: 10, gap: 5, width: '70%', }]}>

                    <Ionicons
                        name={'search-outline'}
                        size={22}
                        color={'#000000'}
                    />
                    <Pressable
                        style={{ width: "95%", height: 35, justifyContent: 'center' }}
                        onPress={handleSearch}>
                        <Text
                            style={{ color: "#00000099" }}>Search...</Text>
                    </Pressable>


                </View>
                <View style={[styles.leftSearchItems, { width: '28%' }]}>
                    <Pressable
                        onPress={scanCode}
                        style={{ padding: 10, }}>

                        <MaterialCommunityIcons
                            name={'line-scan'}
                            size={20}
                            color={'#000000'}
                        />
                    </Pressable>

                    <Divider orientation='vertical' width={1} />

                    <Pressable
                        onPress={takePicture}
                        style={{ padding: 10, }}>
                        <EvilIcons
                            name={'camera'}
                            size={28}
                            color={'#000000'}
                        />
                    </Pressable>

                </View>
            </View>

        </View>
    )
}

export default FakeSearchBar

const styles = StyleSheet.create({
    searchWrapper: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftSearchItems: {
        flexDirection: 'row',
        alignItems: 'center',
        // gap: 10
    }
})