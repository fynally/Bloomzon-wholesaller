import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'
import { Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Divider } from '@rneui/themed'
import { Badge } from 'react-native-paper'

const Screen_345 = ({ navigation, moreOption, setMoreOption }) => {

    const closeModal = () => {
        setMoreOption(false)
    }

    const handleMenuClick = (menu) => {
        closeModal()
        alert(menu)
    }
    React.useEffect(() => {
        console.log("Screen No:==> 345")
    }, [])

    return (
        <Modal
            visible={moreOption}
            transparent={true}
            animationType='fade'
            statusBarTranslucent={true}
            onRequestClose={closeModal}

        >
            <View style={styles.modalContainer}>
                <Pressable
                    style={{ height: '100%', }}
                    onPress={closeModal}
                />

                <View style={styles.modalContent}>
                    <Pressable
                        onPress={() => handleMenuClick("Home")}
                        style={styles.list}>
                        <Feather
                            name={'home'}
                            size={21}
                            color={"#00000099"}
                        />

                        <Text style={styles.label}>Home</Text>
                    </Pressable>

                    <Divider />

                    <Pressable
                        onPress={() => handleMenuClick("Messenger")}
                        style={styles.list}>
                        <Ionicons
                            name={'chatbubble-ellipses-outline'}
                            size={21}
                            color={"#00000099"}
                        />

                        <Text style={styles.label}>Messenger</Text>
                        <Badge style={{ fontSize: 13, marginLeft: 20 }}>99+</Badge>
                    </Pressable>

                    <Divider />

                    <Pressable
                        onPress={() => handleMenuClick("Favorite")}
                        style={styles.list}>
                        <Feather
                            name={'heart'}
                            size={21}
                            color={"#00000099"}
                        />

                        <Text style={styles.label}>My favorite</Text>
                    </Pressable>

                    <Divider />

                    <Pressable
                        onPress={() => handleMenuClick("Browser history")}
                        style={styles.list}>
                        <MaterialIcons
                            name={'history'}
                            size={21}
                            color={"#00000099"}
                        />

                        <Text style={styles.label}>Browse history</Text>
                    </Pressable>

                    <Divider />

                    <Pressable
                        onPress={() => handleMenuClick("Feedback")}
                        style={styles.list}>
                        <MaterialCommunityIcons
                            name={'comment-processing-outline'}
                            size={21}
                            color={"#00000099"}
                        />

                        <Text style={styles.label}>App feedback</Text>
                    </Pressable>

                    <Divider />

                    <Pressable
                        onPress={() => handleMenuClick("Share")}
                        style={styles.list}>
                        <Feather
                            name={'share-2'}
                            size={21}
                            color={"#00000099"}
                        />

                        <Text style={styles.label}>Share</Text>
                    </Pressable>

                    <Divider />

                    <Pressable style={styles.list}>
                        <Ionicons
                            name={'warning-outline'}
                            size={21}
                            color={"#00000099"}
                        />

                        <Text style={styles.label}>Report</Text>
                    </Pressable>

                </View>
            </View>
        </Modal>
    )
}

export default Screen_345

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "#00000099",
        flex: 1
    },
    modalContent: {
        backgroundColor: "#ffffff",
        //padding: 10,
        position: "absolute",
        width: '55%',
        alignSelf: 'center',
        top: '10%',
        borderRadius: 5,
        //height: "35%",
        right: 15
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 15
    },
    label: {
        color: "#00000099",
        fontSize: 14
    }
})