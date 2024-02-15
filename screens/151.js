import React from 'react'
import { StyleSheet, Text, View, Modal, Pressable, FlatList } from 'react-native'
import { AntDesign, Feather, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Divider } from '@rneui/themed'
import { VIOLATION_DATA } from '../data/data'
import ReasonItem_151 from '../components/wholesale/ReasonItem_151'

const Screen_151 = ({ showViolation, setShowViolation, navigation }) => {

    const [selectedReason, setSelectedReason] = React.useState({})

    const closeModal = () => {
        setShowViolation(false)
    }

    React.useEffect(() => {
        setSelectedReason(selectedReason)
    }, [selectedReason])

    React.useEffect(() => {
        console.log("Screen No:==> 151")
    }, [])

    return (
        <Modal
            visible={showViolation}
            transparent={true}
            animationType={'slide'}
            statusBarTranslucent={true}
            onRequestClose={closeModal}

        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>

                    <View style={styles.headSection}>
                        <View>
                            <Text
                                onPress={closeModal}
                                style={{ color: "#00000099" }}>Cancel</Text>
                        </View>
                        <Text style={{ fontWeight: '400', color: '#000000' }}>Violation Type</Text>
                        <Text
                            onPress={closeModal}
                            style={{ color: "#F67F00", fontSize: 19 }}>ok</Text>
                    </View>

                    <View style={styles.contactWrapper}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={VIOLATION_DATA}
                            renderItem={({ item }) => (
                                <ReasonItem_151
                                    item={item}
                                    setSelectedReason={setSelectedReason}
                                    selectedReason={selectedReason}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default Screen_151

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
        height: "33%"
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
        marginVertical: 25,

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
        fontSize: 12
    }
})