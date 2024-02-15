import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { formatMoney, isLastElement } from '../../helper/Helper'

const ProductVariationItem_261 = ({ item, data, activeVariation, setActiveVariation }) => {

    const lastElement = isLastElement(data, item)

    // Convert size strings to numbers for proper comparison
    const numericSizes = data.map(size => parseInt(size.value, 10));

    // Find the largest size
    const largestSize = Math.max(...numericSizes);

    // Find the smallest size
    const smallestSize = Math.min(...numericSizes);

    const handleClick = () => {
        setActiveVariation(item)
    }

    return (
        <Pressable
            onPress={handleClick}
            style={[styles.container, !lastElement && { marginRight: 10 }, activeVariation.id === item.id && styles.activeVariation]}
        >

            {
                lastElement &&
                <View style={styles.overlay}>
                    <Text style={styles.overlayText}>23+</Text>
                </View>
            }

            <View style={{ alignItems: 'center', backgroundColor: activeVariation.id === item.id ? "#FEF2E5" : '#f5f5f5' }}>
                <Image
                    source={item.v_image}
                    resizeMode='contain'
                    style={{ width: 80, height: 85, }}
                />
            </View>
            <View style={{ padding: 6 }}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.color}</Text>

                <Text numberOfLines={1} style={{ marginVertical: 8, fontWeight: '600', fontSize: 14 }}>{formatMoney(item.basePrice)}</Text>

                <Text numberOfLines={1} style={{ fontSize: 13.5, color: "teal" }}>Bloomzon Prime</Text>

                <Text style={{ marginVertical: 8, fontSize: 13, color: "green" }}>{item.in_stock ? "In-stock" : "out of stock"}</Text>

                <Text style={{ fontSize: 13, color: "#343a40" }}>{`Available in sizes of ${smallestSize} - ${largestSize}`}</Text>

            </View>
        </Pressable>
    )
}

export default ProductVariationItem_261

const styles = StyleSheet.create({
    container: {
        width: 120,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#6c757d"
    },
    activeVariation: {
        borderWidth: 1,
        borderColor: "#F67F00"
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        borderRadius: 4
        //position: 'absolute',
        //width: "100%",
        //height: '100%'
    },
    overlayText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})