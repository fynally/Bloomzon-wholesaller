import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Screen_449 = ({ setMainModal, zipCodeErr, setZipCodeErr }) => {

    const closeModal = () => {
        setZipCodeErr(false)
        setMainModal(false)
    }

    React.useEffect(() => {
        console.log("Screen No:==> 449")
    }, [])

    return (
        <Modal
            transparent={true}
            statusBarTranslucent={true}
            visible={zipCodeErr}
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

                    <View style={{ padding: 10 }}>

                        <View style={{ marginBottom: 30 }}>
                            <Text style={{ color: "#000000", fontSize: 13 }}>Incorrect Zip code. Please check and try again</Text>
                        </View>

                        <Pressable
                            onPress={closeModal}
                            style={styles.addAddressButton}>
                            <Text style={{ color: "#ffffff" }}>Ok</Text>
                        </Pressable>
                    </View>

                </View>
            </View>

        </Modal>
    )
}

export default Screen_449

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