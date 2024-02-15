import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Screen_252 = ({ showPromo, setShowPromo }) => {

    const closeModal = () => {
        setShowPromo(false)
    }

    const continuePayment = () => {
        closeModal(false)
        alert("Thank your for paying")
    }

    React.useEffect(() => {
        console.log("Screen No:==> 252")
    }, [])

    return (
        <Modal
            transparent={true}
            statusBarTranslucent={true}
            visible={showPromo}
            onRequestClose={closeModal}
        >

            <View style={styles.modalWrapper}>

                <View style={styles.container}>

                    <View style={{ alignItems: 'flex-end' }}>
                        <Ionicons
                            name='close-outline'
                            color={"#000000"}
                            size={30}
                            onPress={closeModal}
                        />
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Ionicons
                            name='pricetag'
                            color={"#F67F00"}
                            size={30}
                            onPress={closeModal}
                        />
                    </View>

                    <View style={{ padding: 10 }}>
                        <Text style={{ alignSelf: 'center', fontWeight: "500" }}>Don't miss your discount</Text>

                        <View style={{ marginVertical: 20, alignItems: 'center' }}>
                            <Text style={{ color: "#000000", fontSize: 12 }}>You can enjoy $11.52 discount on this order!</Text>
                            <Text style={{ color: "#000000", fontSize: 12 }}>Still want to quit?</Text>
                        </View>

                        <Pressable
                            onPress={continuePayment}
                            style={styles.addAddressButton}>
                            <Text style={{ color: "#ffffff" }}>Continue to pay</Text>
                        </Pressable>

                        <Pressable
                            onPress={closeModal}
                            style={[styles.addAddressButton, { borderWidth: 1, backgroundColor: "#ffffff", borderColor: "#F67F00", marginVertical: 10 }]}>
                            <Text style={{ color: "#F67F00" }}>Quit</Text>
                        </Pressable>
                    </View>

                </View>
            </View>

        </Modal>
    )
}

export default Screen_252

const styles = StyleSheet.create({
    modalWrapper: {
        height: '100%',
        backgroundColor: "#00000099",
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        width: "90%",
        backgroundColor: "#ffffff",
        padding: 5,
        borderRadius: 4

    },
    addAddressButton: {
        backgroundColor: "#F67F00",
        padding: 10,
        alignItems: 'center',
        //margin: 10,
        borderRadius: 5
    }
})