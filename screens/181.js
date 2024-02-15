import { StyleSheet, Text, View, Modal, Pressable, FlatList } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { Divider } from '@rneui/themed'
import { PAYMENTS } from '../data/data'
import PaymentChannelItem from '../components/wholesale/PaymentChannelItem'

const Screen_181 = ({ showPayments, setShowPayments }) => {

    const handleModal = () => {
        setShowPayments(false)
    }

    React.useEffect(() => {
        console.log("Screen No:==> 181")
    }, [])

    return (
        <Modal
            animationType={'slide'}
            visible={showPayments}
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
                            <Text style={{ color: "#F67F00", fontWeight: 'bold', fontSize: 15 }}>Payments</Text>
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

                    <View style={{ padding: 10 }}>
                        <Text style={{ color: "#000000", fontWeight: "500", fontSize: 15, marginBottom: 6 }}>Payments in Bloomzon.com</Text>

                        <Text style={{ fontSize: 13.5, color: "#00000099" }}>Transactions made through Bloomzon.com are encrypted, secured and processed in as quickly as 2 hours. All major currencies are accepted. Please pay in your local currency to avoid bank conversion fee</Text>

                    </View>

                    <View style={{ padding: 10, marginTop: -10 }}>
                        <FlatList
                            numColumns={5}
                            showsVerticalScrollIndicator={false}
                            data={PAYMENTS}
                            renderItem={({ item }) => (
                                <PaymentChannelItem
                                    item={item}
                                    showLess={false}
                                />
                            )}
                        />
                    </View>

                    <View style={{ padding: 10 }}>
                        <Text style={{ color: "#000000", fontWeight: "500", fontSize: 13.5, marginBottom: 6 }}>How to pay for ready-to-ship products</Text>

                        <View style={styles.linesWrapper}>
                            <View style={styles.leftSide}>
                                <FontAwesome
                                    name='circle'
                                    color={"#000000"}
                                    size={11}
                                />

                                <View style={styles.verticalLine} />

                                <FontAwesome
                                    name='circle'
                                    color={"#000000"}
                                    size={11}
                                />
                            </View>

                            <View style={{ width: "90%" }}>
                                <Text style={{ fontWeight: '500' }}>Check out</Text>

                                <Text style={{ color: "#00000099", fontSize: 13, marginVertical: 15 }}>Tap 'start order' on the product you wish to buy and proceed to checkout</Text>

                                <Text style={{ fontWeight: '500' }}>Pay using your preferred method and currency</Text>

                            </View>
                        </View>

                    </View>

                </View>
            </View>

        </Modal>
    )
}

export default Screen_181

const styles = StyleSheet.create({
    modalBackground: {
        height: '100%',
        backgroundColor: '#00000099',
        //position: 'absolute',
        //width: '100%',
    },
    modalContent: {
        height: '60%',
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
        width: 10
    },
    verticalLine: {
        width: 2,
        height: 71,
        backgroundColor: "#00000029"
    },
    linesWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 10
    }
})