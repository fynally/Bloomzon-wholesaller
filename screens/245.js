import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList, Pressable, Modal } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import HeaderFile2 from '../headers/HeaderFile2'
import { SHIPPING_ADDRESS } from '../data/data'
import AddressItem_245 from '../components/wholesale/AddressItem_245'
import Screen_449 from './449'

const Screen_245 = ({ navigation, showAddress, setShowAddress, selectedAddress, setSelectedAddress }) => {

    const [addresses, setAddresses] = React.useState(SHIPPING_ADDRESS)
    const [zipCodeErr, setZipCodeErr] = React.useState(false)

    React.useEffect(() => {
        console.log("Screen No:==> 245")
    }, [])

    return (
        <>
            <Modal
                visible={showAddress}
                onRequestClose={() => setShowAddress(false)}
            >
                <StatusBar backgroundColor='#ffffff' style='dark' />
                <View style={styles.container}>
                    <HeaderFile2
                        navigation={navigation}
                        title={'Change Shipping address'}
                        hasModal={setShowAddress}
                    />

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View>
                            <FlatList
                                scrollEnabled={false}
                                data={addresses}
                                renderItem={({ item }) => (
                                    <AddressItem_245
                                        item={item}
                                        navigation={navigation}
                                        setShowAddress={setShowAddress}
                                        addresses={addresses}
                                        selectedAddress={selectedAddress}
                                        setSelectedAddress={setSelectedAddress}
                                        setZipCodeErr={setZipCodeErr}
                                    />
                                )}
                            />
                        </View>

                    </ScrollView>

                    <Pressable
                        onPress={() => alert("Add new address here")}
                        style={styles.addAddressButton}>
                        <Text style={{ color: "#ffffff" }}>Add Address</Text>
                    </Pressable>

                </View>
            </Modal>
            <Screen_449
                setMainModal={setShowAddress}
                setZipCodeErr={setZipCodeErr}
                zipCodeErr={zipCodeErr}
            />
        </>
    )
}

export default Screen_245

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    addAddressButton: {
        backgroundColor: "#F67F00",
        padding: 13,
        alignItems: 'center', margin: 10,
        borderRadius: 5
    }
})