import { StyleSheet, Text, View, Modal, Pressable, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { formatMoney } from '../helper/Helper'
import { PRODUCTS } from '../data/data'

const Screen_116 = ({ navigation, productData, showProduct, setShowProduct }) => {

    const closeModal = () => {
        setShowProduct(false)
    }

    const chatNow = () => {
        closeModal()
        navigation.navigate("Screen_106", { data: productData })
    }

    const buyNow = () => {
        closeModal()
        navigation.navigate("MainTabsController", { companyData: productData, page: 0 })
    }

    React.useEffect(() => {
        console.log("Screen No:==> 116")
    }, [])

    return (
        <Modal
            visible={showProduct}
            transparent={true}
            animationType={'fade'}
            onRequestClose={closeModal}

        >
            <View style={styles.modalContainer}>

                <Pressable
                    onPress={closeModal}
                    style={{ flex: 1, }} />

                <View style={styles.modalContent}>
                    <View style={styles.headSection}>
                        <AntDesign
                            name={'close'}
                            color={"#000000"}
                            size={22}
                            onPress={closeModal}
                        />
                    </View>

                    <View style={styles.contactWrapper}>
                        <View style={styles.modalImage}>
                            <Image
                                source={PRODUCTS[0].image}
                                resizeMode='cover'
                                style={{ width: 75, height: 75 }}
                            />
                        </View>
                        <View style={{ alignItems: 'center', paddingHorizontal: 30, marginTop: 10 }}>
                            <Text numberOfLines={2} style={{ color: "#343a40", fontSize: 13.5 }}>{PRODUCTS[0].desc}</Text>

                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 10, color: "#000000" }}>{formatMoney(PRODUCTS[0].basePrice)} - {formatMoney(PRODUCTS[0].samplePrice)}</Text>

                            <Text style={{ color: "#343a40", fontSize: 15, marginBottom: 15 }}>1 piece</Text>

                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}>

                            <Pressable
                                onPress={chatNow}
                                style={[styles.button, { backgroundColor: "#F67F00" }]}>
                                <Text style={styles.buttonLabel}>Chat now</Text>
                            </Pressable>

                            <Pressable
                                onPress={buyNow}
                                style={[styles.button, { backgroundColor: "#ffffff", borderWidth: 1, borderColor: "#F67F00" }]}>
                                <Text style={[styles.buttonLabel, { color: "#F67F00" }]}>Buy now</Text>
                            </Pressable>

                        </View>

                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default Screen_116

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
        bottom: 0,
        margin: 15,
        borderRadius: 6,

    },
    headSection: {
        alignItems: 'flex-end',
    },
    modalImage: {
        width: 80,
        height: 80,
        backgroundColor: "#eeeeee",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5
    },
    button: {
        padding: 8,
        backgroundColor: 'indigo',
        borderRadius: 4,
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    buttonLabel: {
        color: "#ffffff"
    }
})