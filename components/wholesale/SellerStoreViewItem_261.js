import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { formatMoney, isLastElement } from '../../helper/Helper'
import RatingStars from '../../resources/RatingStars'

const SellerStoreViewItem_261 = ({ item, data }) => {

    const is_lastElement = isLastElement(data, item)

    const handleAddToCart = () => {
        const product = JSON.stringify(item, 0, 2)
        alert(product)
    }

    return (
        <View style={[styles.container, !is_lastElement && { marginRight: 8 }]}>
            <View style={{ alignItems: 'center', width: 100, height: 100, alignSelf: 'center', justifyContent: 'center' }}>
                <Image
                    source={item.image}
                    resizeMode={'contain'}
                    style={{ width: 90, height: 90 }}
                />
            </View>
            <View style={{ padding: 4 }}>
                <Text
                    numberOfLines={1}
                    style={{ fontWeight: 'bold', fontSize: 14.5, width: "90%" }}>{item.desc}
                </Text>

                <View style={{ marginVertical: 6 }}>
                    <RatingStars
                        color={"#F67F00"}
                        rating={item.rating_star}
                        size={14}
                    />
                </View>

                <Text style={{ fontSize: 13.5, color: "#343a40" }}>{item.reviews} reviews</Text>

                <Text style={{ color: "#000000", fontWeight: 'bold', fontSize: 15, marginVertical: 5 }}>{formatMoney(item.price)}</Text>

                <Pressable
                    onPress={handleAddToCart}
                    style={styles.button}>
                    <Text style={{ color: "#ffffff", fontSize: 14 }}>Add to cart</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SellerStoreViewItem_261

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5f5f5",
        padding: 5,
        width: 140,
        borderRadius: 6
    },
    button: {
        width: "100%",
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: "#F67F00",
        marginTop: 8
    }
})