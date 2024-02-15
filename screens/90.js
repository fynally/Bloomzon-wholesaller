import React from 'react'
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import { AntDesign, Feather, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Divider } from '@rneui/themed'

const Screen_90 = ({ showContactUs, setShowContactUs, navigation }) => {

    const closeModal = () => {
        setShowContactUs(false)
    }

    const goToChat = () => {
        closeModal()
        navigation.navigate("Screen_106")
    }

    React.useEffect(() => {
        console.log("Screen No:==> 90")
    }, [])


    return (
        <Modal
            visible={showContactUs}
            transparent={true}
            animationType={'slide'}
            statusBarTranslucent={true}
            onRequestClose={closeModal}

        >
            <View style={styles.modalContainer}>
                <Pressable
                    style={{ height: '75%' }}
                    onPress={closeModal}></Pressable>
                <View style={styles.modalContent}>

                    <View style={styles.headSection}>
                        <View></View>
                        <Text style={{ fontWeight: 'bold', color: '#000000' }}>Contact us</Text>
                        <AntDesign
                            onPress={closeModal}
                            name={"close"}
                            color={"#000000"}
                            size={23}
                        />
                    </View>

                    <Divider style={{ marginVertical: 10 }} />

                    <View style={styles.contactWrapper}>

                        <View style={styles.channelHolder}>
                            <Pressable style={[styles.contact_channel, { backgroundColor: "#F67F00" }]}>
                                <Feather
                                    name={'phone-call'}
                                    size={23}
                                    color={"#ffffff"}
                                />
                            </Pressable>
                            <Text style={styles.contactLabel}>Call us</Text>
                        </View>

                        <View style={styles.channelHolder}>
                            <Pressable
                                onPress={goToChat}
                                style={[styles.contact_channel, { backgroundColor: "#FDBE4A" }]}>
                                <Ionicons
                                    name={'chatbubble-ellipses-outline'}
                                    size={23}
                                    color={"#ffffff"}
                                />
                            </Pressable>
                            <Text style={styles.contactLabel}>Chat us</Text>
                        </View>

                        <View style={styles.channelHolder}>
                            <Pressable style={[styles.contact_channel, { backgroundColor: "#41CCC7" }]}>
                                <Fontisto
                                    name={'email'}
                                    size={23}
                                    color={"#ffffff"}
                                />
                            </Pressable>
                            <Text style={styles.contactLabel}>Email us</Text>
                        </View>

                        <View style={styles.channelHolder}>
                            <Pressable style={[styles.contact_channel, { backgroundColor: "#707070" }]}>
                                <MaterialCommunityIcons
                                    name={'calendar-clock-outline'}
                                    size={28}
                                    color={"#ffffff"}
                                />
                            </Pressable>
                            <Text style={styles.contactLabel}>Schedule call</Text>
                        </View>

                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default Screen_90

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "#00000099",
        flex: 1
    },
    modalContent: {
        backgroundColor: "#ffffff",
        padding: 10,
        position: "absolute",
        width: '100%',
        bottom: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: "30%"
    },
    headSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    contactWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginVertical: 20
    },
    channelHolder: {
        alignItems: 'center'
    },
    contact_channel: {
        backgroundColor: 'red',
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contactLabel: {
        color: "#000000",
        marginVertical: 5,
        fontSize: 13.5
    }
})