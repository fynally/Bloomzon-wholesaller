import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const Screen_303 = ({ showSaveEdit, setShowSaveEdit }) => {

    const handleModal = () => {
        setShowSaveEdit(false)
    }

    const handleSave = () => {
        handleModal()
        alert("Your design has been save")
    }

    React.useEffect(() => {
        console.log("Screen No:==> 303")
    }, [])

    return (
        <Modal
            animationType={'slide'}
            visible={showSaveEdit}
            transparent={true}
            statusBarTranslucent={true}
            onRequestClose={handleModal}>

            <View style={styles.modalBackground}>
                <Pressable
                    onPress={handleModal}
                    style={{ flex: 1 }} />

                <View style={styles.modalContent}>

                    <View style={{ alignItems: 'flex-end', padding: 10 }}>
                        <AntDesign
                            name={'close'}
                            size={25}
                            color={"#000000"}
                        />
                    </View>

                    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', marginLeft: 6 }}>

                        <View style={{ flexDirection: 'row', gap: 12, marginTop: -20 }}>
                            <View style={{ height: "100%" }}>
                                <AntDesign
                                    name={'questioncircleo'}
                                    color={"#000000"}
                                    size={16}
                                    onPress={handleModal}
                                />
                            </View>
                            <View style={{}}>
                                <Text style={styles.modalTitle}>Save design</Text>

                                <Text style={{ fontSize: 13.5, marginTop: 8, width: '60%' }}>Download your design and contact the supplier to continue with your order</Text>
                            </View>

                        </View>


                    </View>

                    <View style={styles.buttonWrapper}>
                        <Pressable
                            onPress={handleSave}
                            style={styles.confirmButton}>
                            <Text style={{ color: "#ffffff" }}>Ok</Text>
                        </Pressable>
                        <Pressable
                            onPress={handleModal}
                            style={[styles.confirmButton, { backgroundColor: "#ffffff", borderWidth: 1, borderColor: "#00000039" }]}>
                            <Text style={{ color: "#00000099" }}>Cancel</Text>
                        </Pressable>
                    </View>

                </View>
            </View>

        </Modal>
    )
}

export default Screen_303

const styles = StyleSheet.create({
    modalBackground: {
        height: '100%',
        backgroundColor: '#00000099',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContent: {
        //height: '37%',
        backgroundColor: '#ffffff',
        position: 'absolute',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 6
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: "#000000"
    },
    buttonWrapper: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 5,
        justifyContent: "flex-end",
        paddingHorizontal: 12
    },
    confirmButton: {
        backgroundColor: "#F67F00",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 4,
        alignItems: 'center',
        marginVertical: 10
    }
})