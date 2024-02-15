import { StyleSheet, Text, View, Modal, ScrollView, Pressable, FlatList } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import { Divider } from '@rneui/themed'
import { SHIPPING_SERVICES } from '../data/data'
import ShippingServiceItem_458 from '../components/wholesale/ShippingServiceItem_458'

const Screen_458 = ({ shippingService, setShippingService, activeServices, setActiveServices }) => {

    // const [activeServices, setActiveServices] = React.useState(SHIPPING_SERVICES[0]);

    const closeModal = () => {
        setShippingService(false)
    }

    React.useEffect(() => {
        closeModal()
    }, [activeServices])

    React.useEffect(() => {
        console.log("Screen No:==> 458")
    }, [])

    return (
        <Modal
            visible={shippingService}
            transparent={true}
            animationType='fade'
            statusBarTranslucent={true}
            onRequestClose={closeModal}

        >
            <View style={styles.modalContainer}>
                <Pressable
                    style={{ height: '100%', }}
                    onPress={closeModal} />

                <View style={styles.modalContent}>

                    <View style={styles.headSection}>

                        <AntDesign
                            onPress={closeModal}
                            name={"close"}
                            color={"#000000"}
                            size={23}
                        />
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} >
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30, paddingHorizontal: 10 }}>
                            <FontAwesome5
                                name={'box'}
                                size={50}
                                color={"#00000099"}
                            />

                            <View>
                                <Text style={styles.values}>0.4kg</Text>
                                <Text style={styles.label}>Weight/Piece</Text>
                                <Text style={styles.values}>90x41x1 cm</Text>
                                <Text style={styles.label}>Size/piece</Text>
                                <Text style={styles.values}>Dispatch within 7-days</Text>
                                <Text style={styles.label}>Lead time</Text>
                                <Text style={styles.values}>CN</Text>
                                <Text style={styles.label}>Country/Region of origin</Text>
                            </View>
                        </View>

                        <Divider style={{ marginVertical: 10 }} />

                        <View>
                            <Text style={{ fontWeight: 'bold', marginBottom: 12 }}>Shipping Services</Text>

                            <FlatList
                                scrollEnabled={false}
                                data={SHIPPING_SERVICES}
                                renderItem={({ item }) => (
                                    <ShippingServiceItem_458
                                        item={item}
                                        data={SHIPPING_SERVICES}
                                        activeServices={activeServices}
                                        setActiveServices={setActiveServices}
                                    />
                                )}
                            />

                        </View>

                    </ScrollView>


                </View>
            </View>
        </Modal>
    )
}

export default Screen_458

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
        alignSelf: 'center',
        bottom: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: "70%"
    },
    headSection: {
        alignItems: 'flex-end',
    },
    cardWrapper: {
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 15,
        paddingVertical: 8
    },
    button: {
        backgroundColor: '#F67F00',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10
    },
    label: {
        fontSize: 12,
        color: "#00000099"
    },
    values: {
        fontSize: 13,
        color: "#000000"
    }
})