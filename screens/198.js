import { StyleSheet, Text, View, Modal, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

const Screen_198 = ({ productReturn, setProductReturn }) => {

    const handleModal = () => {
        setProductReturn(false)
    }

    React.useEffect(() => {
        console.log("Screen No:==> 198")
    }, [])

    return (
        <Modal
            animationType={'slide'}
            visible={productReturn}
            transparent={true}
            statusBarTranslucent={true}
            onRequestClose={handleModal}>

            <View style={styles.modalBackground}>
                <Pressable
                    onPress={handleModal}
                    style={{ flex: 1 }} />

                <View style={styles.modalContent}>

                    <View style={styles.topLine} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between' }}>

                        <View style={{ width: "25%" }} />

                        <View style={{ alignItems: 'center', }}>
                            <Text style={{ color: "#F67F00", fontWeight: 'bold', fontSize: 15 }}>Returns and Refunds</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end', width: "25%" }}>
                            <AntDesign
                                name={'close'}
                                color={'#000000'}
                                size={22}
                                onPress={handleModal}
                            />
                        </View>
                    </View>

                    <ScrollView>
                        <View style={{ padding: 10 }}>
                            <Text style={{ color: "#000000", fontWeight: "500", fontSize: 15, marginBottom: 6 }}>Refund Policy</Text>

                            <Text style={{ fontSize: 13.5, color: "#00000099" }}>Our refund policy protects you in case purchase don't meet the agreed terms. Apply for a partial or full refund within 30 days from the delivery date. Platinum Buy and above can claim within 60 days </Text>

                            <Text style={{ fontSize: 13.5, color: "#00000099", marginTop: 4 }}>Quick refund. Claim within 2 hours after payment for full and immediate refunds </Text>

                        </View>


                        <View style={{ padding: 10 }}>
                            <Text style={{ color: "#000000", fontWeight: "500", fontSize: 13.5, marginBottom: 6 }}>How to apply for a refund</Text>

                            <View style={styles.linesWrapper}>

                                <View style={{ height: '100%', }}>
                                    <View style={styles.leftSide}>
                                        <FontAwesome
                                            name='circle'
                                            color={"#000000"}
                                            size={11}
                                            style={{ position: 'absolute', top: 5 }}
                                        />

                                        <View style={[styles.verticalLine, { marginTop: 5, height: 120 }]} />

                                        <FontAwesome
                                            name='circle'
                                            color={"#000000"}
                                            size={11}
                                            style={{ position: 'absolute', bottom: 46 }}
                                        />
                                    </View>
                                </View>


                                <View style={{ width: "90%", height: '100%' }}>
                                    <View>
                                        <View>
                                            <Text style={{ fontWeight: '500' }}>Pay on Bloomzon.com</Text>

                                            <Text style={{ color: "#00000099", fontSize: 12, marginTop: 3, marginBottom: 10 }}>Pay using your preferred payment method through the Bloomzon.com platform</Text>
                                        </View>

                                        <View>
                                            <Text style={{ fontWeight: '500', }}>Apply for refund if purchase don't meet the agreed terms</Text>

                                            <Text style={{ color: "#00000099", fontSize: 12, marginTop: 3, marginBottom: 10 }}>Go to My orders {'>'} Order details to apply</Text>

                                        </View>
                                    </View>

                                </View>

                            </View>

                            <View style={styles.linesWrapper}>
                                <View style={{ height: '100%', }}>
                                    <View style={styles.leftSide}>


                                        <View style={[styles.verticalLine, { height: 400, marginTop: -20 }]} />

                                        <FontAwesome
                                            name='circle'
                                            color={"#000000"}
                                            size={11}
                                        />
                                    </View>
                                </View>


                                <View style={{ marginTop: -40 }}>

                                    <Image
                                        source={require("../assets/wholesale/appImage.png")}
                                        resizeMode='contain'
                                        style={{ height: 350 }}
                                    />
                                </View>

                            </View>

                            <View style={styles.linesWrapper}>
                                <View style={{ height: '100%', }}>
                                    <View style={styles.leftSide}>
                                        <View style={[styles.verticalLine, { height: 70, marginTop: -20 }]} />
                                        <FontAwesome
                                            name='circle'
                                            color={"#000000"}
                                            size={11}
                                        />

                                    </View>
                                </View>


                                <View style={{ marginTop: -25 }}>
                                    <View>
                                        <Text style={{ fontWeight: '500' }}>Negotiate with the supplier</Text>

                                        <Text style={{ color: "#00000099", fontSize: 13, marginVertical: 5 }}>Pay using your preferred payment method through the Bloomzon.com platform</Text>
                                    </View>

                                    <View style={{ marginTop: 10 }}>
                                        <Text style={{ fontWeight: '500', }}>Get your money back</Text>

                                        <Text style={{ color: "#00000099", fontSize: 13, marginVertical: 5 }}>Receive your refund after the case has been processed</Text>
                                    </View>

                                </View>

                            </View>

                        </View>
                    </ScrollView>
                </View>
            </View>

        </Modal>
    )
}

export default Screen_198

const styles = StyleSheet.create({
    modalBackground: {
        height: '100%',
        backgroundColor: '#00000099',
        //position: 'absolute',
        //width: '100%',
    },
    modalContent: {
        height: '70%',
        backgroundColor: '#ffffff',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

    },
    topLine: {
        width: 40,
        backgroundColor: 'grey',
        height: 4,
        alignSelf: 'center',
        borderRadius: 30,
        marginTop: 10
    },
    leftSide: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 10,
        //marginTop: -16
    },
    verticalLine: {
        width: 2,
        height: 80,
        backgroundColor: "#00000029",
        //marginTop: -30
    },
    linesWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 10,
    }
})