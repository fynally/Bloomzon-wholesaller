import React from 'react'
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import { AntDesign, Feather, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Divider } from '@rneui/themed'

const Screen_124 = ({ setShowMore, showMore, navigation }) => {

    const closeModal = () => {
        setShowMore(false)
    }

    const goToReport = () => {
        closeModal()
        navigation.navigate("Screen_137")
    }

    React.useEffect(() => {
        console.log("Screen No:==> 124")
    }, [])

    return (
        <Modal
            visible={showMore}
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
                        <Text style={{ fontWeight: 'bold', color: '#000000' }}>More actions</Text>
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
                                <MaterialCommunityIcons
                                    name={'cryengine'}
                                    size={28}
                                    color={"#ffffff"}
                                />
                            </Pressable>
                            <Text style={styles.contactLabel}>Reviews</Text>
                        </View>

                        <View style={styles.channelHolder}>
                            <Pressable
                                style={[styles.contact_channel, { backgroundColor: "#FDBE4A" }]}>
                                <Feather
                                    name={'edit'}
                                    size={23}
                                    color={"#ffffff"}
                                />
                            </Pressable>
                            <Text style={styles.contactLabel}>Comment</Text>
                        </View>

                        <View style={styles.channelHolder}>
                            <Pressable
                                onPress={goToReport}
                                style={[styles.contact_channel, { backgroundColor: "#41CCC7" }]}>
                                <AntDesign
                                    name={'warning'}
                                    size={23}
                                    color={"#ffffff"}
                                />
                            </Pressable>
                            <Text style={styles.contactLabel}>Report</Text>
                        </View>

                        <View style={styles.channelHolder}>
                            <Pressable style={[styles.contact_channel, { backgroundColor: "#707070" }]}>
                                <MaterialCommunityIcons
                                    name={'frequently-asked-questions'}
                                    size={28}
                                    color={"#ffffff"}
                                />
                            </Pressable>
                            <Text style={styles.contactLabel}>FAQ</Text>
                        </View>

                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default Screen_124

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
        marginVertical: 20,
        //height: "25%"
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