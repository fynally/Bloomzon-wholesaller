import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { isLastElement } from '../../helper/Helper'
import { Divider } from '@rneui/themed'
import { Feather } from '@expo/vector-icons'

const AddressItem_245 = ({ item, setShowAddress, addresses, setSelectedAddress, selectedAddress, setZipCodeErr }) => {
    const is_lastElement = isLastElement(addresses, item)

    const handleSelect = () => {
        //console.log("Shipping Address==>", item)
        setSelectedAddress(item)
        //setShowAddress(false)
        setZipCodeErr(true)
    }



    return (
        <>
            <Pressable
                onPress={handleSelect}
                style={styles.container}
            >
                <Feather
                    name={"edit"}
                    color={"#00000099"}
                    size={18}
                />
                <View style={{ width: "85%" }}>
                    <View style={[styles.rowFlex, { gap: 0, justifyContent: 'space-between', marginVertical: 4 }]}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.title}>{item.address_code}</Text>
                    </View>
                    <Text style={styles.address}>{item.address}</Text>

                    {
                        (item.is_residential && !item.is_default) &&
                        <View style={styles.rowFlex}>
                            <View style={styles.greenBadge}>
                                <Text style={{ color: "#54D1CC", fontSize: 11 }}>Residential</Text>
                            </View>
                        </View>
                    }
                    {
                        (!item.is_residential && item.is_default) &&
                        <View style={styles.rowFlex}>
                            <View style={[styles.greenBadge, { backgroundColor: "#FDE5CC" }]}>
                                <Text style={{ color: "#F67F00", fontSize: 11 }}>Default</Text>
                            </View>
                        </View>
                    }

                </View>

                {
                    selectedAddress.id === item.id &&
                    <Feather
                        name={'check-circle'}
                        size={15}
                        color={"#F67F00"}
                    />
                }

            </Pressable>

            {!is_lastElement && <Divider />}
        </>
    )
}

export default AddressItem_245

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    title: {
        fontWeight: '500',
        fontSize: 14
    },
    address: {
        color: "#00000099",
        fontSize: 13
    },
    rowFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    greenBadge: {
        backgroundColor: "#D9F5F4",
        paddingHorizontal: 6,
        width: 70,
        alignItems: "center",
        borderRadius: 25,
        marginTop: 4,
        paddingVertical: 3
    }
})