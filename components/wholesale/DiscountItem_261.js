import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { formatMoney, isLastElement } from '../../helper/Helper'

const DiscountItem_261 = ({ item, selectedDiscount, setSelectedDiscount, data }) => {

    const is_lastElement = isLastElement(data, item)

    const handleClick = () => {
        setSelectedDiscount(item)
    }

    return (
        <Pressable
            onPress={handleClick}
            style={[styles.container, !is_lastElement && { marginRight: 8 }, selectedDiscount.id === item.id && styles.selectedDiscount]}>

            <Text style={styles.amount}>{item.mode === "Discount" ? `${item.amount}% Off` : `${formatMoney(item.amount)} Off`}</Text>

            <Text style={styles.storing}>Store {item.mode}</Text>

        </Pressable>
    )
}

export default DiscountItem_261

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#eeeeee",
        padding: 10,
        //width: 150
    },
    amount: {
        color: "#000000",
        fontSize: 14.5,
        fontWeight: "bold"
    },
    storing: {
        color: "#343a40",
        fontSize: 14
    },
    selectedDiscount: {
        borderColor: "#F67F00",
    }
})