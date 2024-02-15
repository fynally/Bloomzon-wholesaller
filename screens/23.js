import { StyleSheet, Text, View, SafeAreaView, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import HeaderFile2 from '../headers/HeaderFile2'
import { FlatList } from 'react-native'
import { FACTORY_LIVE_23_CONTENTS, FACTORY_LIVE_23_MENU, PRODUCTS } from '../data/data'
import LinkListItem_23 from '../components/wholesale/LinkListItem_23'
import FactoryLiveItem_23 from '../components/wholesale/FactoryLiveItem_23'
import { ScrollView } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { Image } from 'react-native'
import { Pressable } from 'react-native'
import { ImageBackground } from 'react-native'

const Screen_23 = ({ navigation }) => {

    const [topLinks, setTopLinks] = useState(FACTORY_LIVE_23_MENU)
    const [linkData, setLinkData] = useState(FACTORY_LIVE_23_CONTENTS)
    const [activeLink, setActiveLink] = useState(1)

    React.useEffect(() => {
        console.log("Screen No:==> 23")
    }, [])

    return (


        <SafeAreaView style={{ flex: 1, paddingTop: 30, }}>
            <StatusBar
                style={'dark'}
                backgroundColor={'#ffffff'}
            />
            <HeaderFile2
                navigation={navigation}
                title={"Factory LIVE Q&A"}
            />
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ padding: 15 }}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={topLinks}
                            renderItem={({ item }) => (
                                <LinkListItem_23
                                    item={item}
                                    activeLink={activeLink}
                                    setActiveLink={setActiveLink}
                                />
                            )}
                        />
                    </View>

                    <View style={{ marginTop: 5, }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginHorizontal: 15, color: "#000000" }}>LIVE</Text>
                        <View style={{ padding: 10 }}>
                            <FlatList
                                data={PRODUCTS}
                                scrollEnabled={false}
                                numColumns={2}
                                renderItem={({ item }) => (
                                    <FactoryLiveItem_23
                                        item={item}
                                        navigation={navigation}

                                    />
                                )}
                            />
                        </View>
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>

    )
}

export default Screen_23

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    modalContent: {
        //backgroundColor: "#525667",
        flex: 1,
        paddingTop: 40
    },
    followButton: {
        backgroundColor: "#F67F00",
        padding: 5,
        width: 68,
        alignItems: 'center',
        borderRadius: 20,
        right: 10
    },
    goToStoreButton: {
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        padding: 5,
        width: 75,
        borderColor: "#ffffff"
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
})