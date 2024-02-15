import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { formatMoney, isLastElement } from '../../helper/Helper'
import { Divider } from '@rneui/themed'

const AllProductItem_147 = ({ item, setShowProducts, products }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={{ width: 100, height: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                    <Image
                        source={item.image}
                        resizeMode='cover'
                        style={{ width: 100, height: 100, borderRadius: 5 }}
                    />
                </View>

                <View style={{ height: '100%', width: '68%' }}>
                    <Text style={{ color: "#00000099", fontSize: 12 }}>{item.desc}</Text>

                    <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 15, marginVertical: 7 }}>{formatMoney(item.basePrice)} - {formatMoney(item.samplePrice)}</Text>

                    <Text style={{ color: "#00000099", fontSize: 12, marginBottom: 7 }}>1 Piece</Text>

                    <View style={styles.buttonsHolder}>
                        <Pressable
                            //onPress={chatNow}
                            style={[styles.button, { backgroundColor: "#F67F00" }]}>
                            <Text style={styles.buttonLabel}>Start order</Text>
                        </Pressable>

                        <Pressable
                            //onPress={buyNow}
                            style={[styles.button, { backgroundColor: "#ffffff", borderWidth: 1, borderColor: "#F67F00" }]}>
                            <Text style={[styles.buttonLabel, { color: "#F67F00" }]}>Chat now</Text>
                        </Pressable>

                        <Pressable
                            //onPress={buyNow}
                            style={[styles.button, { backgroundColor: "#eeeeee" }]}>
                            <Text style={[styles.buttonLabel, { color: "#000000" }]}>Try more</Text>
                        </Pressable>

                    </View>

                </View>

            </View>
            {!isLastElement(products, item) && <Divider style={{ marginVertical: 10 }} />}
        </>
    )
}

export default AllProductItem_147

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        //padding: 10
    },
    buttonsHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-between',
        gap: 6

    },
    button: {
        padding: 6,
        backgroundColor: 'indigo',
        borderRadius: 4,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    buttonLabel: {
        color: "#ffffff",
        fontSize: 12
    }
})