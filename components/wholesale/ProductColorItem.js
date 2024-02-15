import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Badge } from 'react-native-paper';
import { activeColor, setCurrentColor } from '../../globals/variations/colorsSlice';
import { sizeData } from '../../globals/variations/sizesSlice';
import { addItem, removeItem, userTempCart } from '../../globals/cart/tempCartSlice';

const ProductColorItem = ({ item }) => {
    const dispatch = useDispatch();
    const { currentColor } = useSelector(activeColor);
    const { selectedSize } = useSelector(sizeData);
    const tempCartState = useSelector(userTempCart);

    const handleItemPress = () => {
        dispatch(setCurrentColor(item));
    };

    const [qty, setQty] = useState(1);

    const selectedColorEntry = tempCartState.temporalCart.find(
        (entry) => entry.color === item.color && entry.size.label === selectedSize.label
    );

    const isItemChosen = !!selectedColorEntry;

    const qtyNew = selectedColorEntry ? selectedColorEntry.qty : 0;

    //const itemCount = tempCartState.temporalCart.length;



    const handleAddItem = () => {

        const newData = {
            id: item.id,
            color: item.color,
            //itemsInStock: 387,
            price: item.basePrice,
            image: item.v_image,
            qty: 1,
            size: selectedSize
        }
        handleItemPress()
        dispatch(addItem(newData));

        //console.log("Data==>", newData)
    };

    const handleRemoveItem = () => {

        const data = {
            color: item.color,
            size: selectedSize
        }
        handleItemPress()
        dispatch(removeItem(data));
    };

    useEffect(() => {
        setQty(qtyNew);
        //console.log("itemCount==>", itemCount)
    }, [selectedSize, tempCartState.temporalCart]);

    // useEffect(() => {
    //     console.log("temporalCart==>", tempCartState.temporalCart)
    // }, [tempCartState]);

    return (
        <>
            {qty > 0 && (
                <View style={styles.badge}>
                    <Badge>{qty}</Badge>
                </View>
            )}

            <Pressable
                //onPress={handleItemPress}
                style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <View style={[styles.imageWrapper, isItemChosen && styles.selectItem]}>
                        <Image source={item.v_image} resizeMode="contain" style={{ width: 50, height: 50 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        <Text style={{ fontWeight: '400', fontSize: 15, color: '#000000' }}>{item.color}</Text>
                        {currentColor.color === item.color && (
                            <MaterialCommunityIcons
                                name="hand-pointing-left"
                                color={item.color.toLowerCase()}
                                size={15} style={{ marginLeft: 20 }}
                            />
                        )}
                    </View>
                </View>

                <View style={styles.qtyControlWrapper}>
                    <Pressable onPress={handleRemoveItem} style={styles.buttons}>
                        <Feather name="minus" size={15} color={'#000000'} />
                    </Pressable>

                    <Text style={{ color: '#000000' }}>{qty}</Text>

                    <Pressable onPress={handleAddItem} style={styles.buttons}>
                        <Feather name="plus" size={15} color={'#000000'} />
                    </Pressable>
                </View>
            </Pressable>
        </>
    );
};

export default ProductColorItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 3,
    },
    qtyControlWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3,
        gap: 12,
        borderWidth: 1,
        borderColor: '#00000019',
    },
    buttons: {
        padding: 6,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
    },
    imageWrapper: {
        backgroundColor: '#e4e4e4',
        padding: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e4e4e4',
    },
    selectItem: {
        borderColor: '#ff6501',
    },
    badge: {
        position: 'absolute',
        top: 0,
        left: 50,
        zIndex: 1,
    },
});
