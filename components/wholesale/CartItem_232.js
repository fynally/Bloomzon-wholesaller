import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native'
import React from 'react'
import CartVariationItem_232 from './CartVariationItem_232'

const CartItem_232 = ({ item, onQuantityChange }) => {


    return (
        <>

            <View style={[styles.rowFlexWithGap,]}>
                <View style={styles.productImageHolder}>
                    <Image
                        source={item.image}
                        resizeMode={'contain'}
                        style={styles.productImageHolder}
                    />
                </View>

                <View style={{ width: "73%", padding: 5 }}>
                    <Text numberOfLines={3} style={styles.productDesc}>{item.description}</Text>

                    <Text style={[styles.addressLabel, { marginVertical: 3 }]}>Min. Order: {item.min_order} pieces</Text>

                    <View style={styles.percentage}>
                        <Text style={{ fontSize: 10, color: "#F67F00" }}>{item.discount}% OFF</Text>
                    </View>

                </View>

            </View>

            <FlatList
                data={item.variation}
                renderItem={({ item }) => (
                    <CartVariationItem_232
                        item={item}
                        onQuantityChange={onQuantityChange}
                    />
                )}
            />
        </>
    )
}

export default CartItem_232

const styles = StyleSheet.create({
    rowFlexWithGap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    productImageHolder: {
        backgroundColor: '#eeeeee',
        width: 80,
        height: 80,
        borderRadius: 5
    }, productDesc: {
        fontSize: 12,
        color: "#000000",
    },
    percentage: {
        width: 50,
        height: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#F6800149"
    },
    variationHolder: {
        backgroundColor: "#f5f5f5",
        borderRadius: 5,
        padding: 10,
        marginVertical: 4
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        fontSize: 11
    },
    shortButtonsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#939393",
    },
    shoppingButtons: {
        padding: 4,
        width: 35,
        alignItems: 'center',
    },
})