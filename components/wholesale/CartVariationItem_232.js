import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { Divider } from '@rneui/themed'
import { formatMoney } from '../../helper/Helper'

const CartVariationItem_232 = ({ item, onQuantityChange }) => {

    const [quantity, setQuantity] = React.useState(1);


    const handleIncrease = () => {
        setQuantity(quantity + 1);
        onQuantityChange(item.id, quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            onQuantityChange(item.id, quantity - 1);
        }
    };

    return (
        <View style={styles.variationHolder}>
            <Text style={{ fontWeight: 'bold', color: "#000000" }}>{item.color}</Text>
            <Divider style={{ marginVertical: 5 }} />

            <View style={styles.rowFlex}>
                <View>
                    <Text>
                        <Text style={{ fontWeight: 'bold', color: "#000000", fontSize: 13 }}>{formatMoney(item.price)}</Text>
                        <Text style={{ color: "#00000099", fontSize: 13 }}> / Piece</Text>
                    </Text>
                    <Text style={styles.oldPrice}>
                        <Text style={{ fontWeight: 'bold', color: "#00000099", fontSize: 13 }}>{formatMoney(item.old_price)}</Text>
                        <Text style={{ color: "#00000099", fontSize: 13 }}> / Piece</Text>
                    </Text>
                </View>

                <View>

                    <View style={styles.shortButtonsWrapper}>
                        <Pressable
                            onPress={handleDecrease}
                            style={styles.shoppingButtons}>
                            <Feather
                                name={'minus'}
                                color={"#000000"}
                                size={15}
                            />
                        </Pressable>
                        <View style={[styles.shoppingButtons, { backgroundColor: "#ffffff", borderLeftWidth: 1, borderRightWidth: 1, borderColor: "#00000059", }]}>
                            <Text>{quantity}</Text>
                        </View>
                        <Pressable
                            onPress={handleIncrease}
                            style={styles.shoppingButtons}>
                            <Feather
                                name={'plus'}
                                color={"#000000"}
                                size={15}
                            />
                        </Pressable>
                    </View>

                    <Text style={{ color: "#00000099", fontSize: 13, marginTop: 5 }}> {item.total_inStock} available</Text>
                </View>

            </View>


        </View>
    )
}

export default CartVariationItem_232

const styles = StyleSheet.create({

    rowFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
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