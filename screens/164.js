import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { Image } from 'react-native'

const Screen_164 = ({ showCard, setShowCard, navigation, businessCard }) => {

    const closeModal = () => {
        setShowCard(false)
    }

    const goToChat = () => {
        closeModal()
        navigation.navigate("Screen_106", { businessCard })
    }

    React.useEffect(() => {
        console.log("Screen No:==> 164")
    }, [])

    return (
        <Modal
            visible={showCard}
            transparent={true}
            animationType='fade'
            statusBarTranslucent={true}
            onRequestClose={closeModal}

        >
            <View style={styles.modalContainer}>
                <Pressable
                    style={{ height: '64%', }}
                    onPress={closeModal}></Pressable>
                <View style={styles.modalContent}>

                    <View style={styles.headSection}>

                        <AntDesign
                            onPress={closeModal}
                            name={"close"}
                            color={"#000000"}
                            size={23}
                        />
                    </View>

                    <View style={{ paddingVertical: 5, width: "85%", padding: 5 }}>
                        <Text style={{ fontWeight: '500', fontSize: 14, color: "#343a40", letterSpacing: 0.2 }}>Hello, Imobighe Uanizekin, the merchant handed you a business card, please check it out</Text>
                    </View>

                    <View style={styles.cardWrapper}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <Image
                                source={require("../assets/wholesale/customer_care.png")}
                                resizeMode='contain'
                                style={{ width: 40, height: 40, }}
                            />
                            <View>
                                <Text numberOfLines={2} style={{ fontSize: 14, fontWeight: 'bold', width: '85%' }}>{businessCard.name}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 10 }}>
                            <View style={{ backgroundColor: "#e4e4e4", width: 35, alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={{ fontSize: 13.5, color: "#000000" }}>{businessCard.verified_year} YR</Text>
                            </View>

                            <View style={{ marginLeft: 5 }}>
                                <Image
                                    source={businessCard.country.flag}
                                    resizeMode={'contain'}
                                    style={{ width: 25, height: 18, borderRadius: 2 }}
                                />
                            </View>

                            <Text style={{ fontSize: 13.5, color: "#000000" }}>{businessCard.country.iso.toUpperCase()}</Text>

                            <MaterialIcons
                                name={'shopping-basket'}
                                size={17}
                                color={"#F67F00"}
                            />

                        </View>

                    </View>

                    <View style={{ marginVertical: 10, }}>
                        <Text style={{ fontSize: 13.5, width: '80%', color: "#343a40" }}>Tip: After receiving, you can view the business card on the chat page</Text>
                    </View>

                    <Pressable
                        onPress={goToChat}
                        style={styles.button}>
                        <Text style={{ color: "#ffffff" }}>check and thanks</Text>
                    </Pressable>

                </View>
            </View>
        </Modal>
    )
}

export default Screen_164

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "#00000099",
        flex: 1
    },
    modalContent: {
        backgroundColor: "#ffffff",
        padding: 10,
        position: "absolute",
        width: '90%',
        alignSelf: 'center',
        bottom: 15,
        borderRadius: 5,
    },
    headSection: {
        alignItems: 'flex-end',
    },
    cardWrapper: {
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 15,
        paddingVertical: 8
    },
    button: {
        backgroundColor: '#F67F00',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10
    }

})