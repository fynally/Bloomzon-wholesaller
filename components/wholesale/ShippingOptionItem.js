import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Checkbox, Divider } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { setShipping } from '../../globals/shipping/shippingSlice';

const ShippingOptionItem = ({ item, checkedItem, setCheckedItem }) => {

    const dispatch = useDispatch()

    const handlePress = () => {
        setCheckedItem(item.id);
        dispatch(setShipping({ shipMethod: item }));
    }

    return (
        <Pressable onPress={handlePress} style={styles.container}>
            <Divider style={{ marginTop: 5 }} />
            <View style={styles.checkBoxHolder}>
                <Checkbox
                    color='#F67F00'
                    status={checkedItem === item.id ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setCheckedItem(item.id);
                    }}
                />
            </View>
            <View style={{ marginVertical: 5 }}>
                <Text style={{ color: '#000000', fontSize: 13 }}>{item.name} {item.offeredBy && <Text style={{ fontSize: 11, color: '#44cdc8' }}>{item.offeredBy} <Text style={{ color: '#00000099' }}>Logistics</Text> </Text>} </Text>

                {
                    item.notice &&
                    <Text style={{ color: '#00000099', fontSize: 13.5, marginTop: 10 }}>{item.notice}</Text>
                }

            </View>

            <View style={[styles.section, { marginVertical: 0 }]}>
                <View>
                    <Text style={[styles.value, { fontSize: 18 }]}>{item.estDelivery}</Text>
                    <Text style={[styles.label, { fontSize: 13.5, color: item.isGuaranteed ? "#F67F00" : "#00000099" }]}>{item.deliveryResponse}</Text>
                </View>
                <View>
                    <Text style={[styles.value, { fontSize: 18 }]}>{item.estCost}</Text>
                    <Text style={[styles.label, { fontSize: 12 }]}>Duty included</Text>
                    <Text style={[styles.label, { fontSize: 12 }]}>Estimated cost</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ShippingOptionItem

const styles = StyleSheet.create({
    container: {
        marginVertical: 2
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    label: {
        color: '#00000099'
    },
    value: {
        fontWeight: 'bold',
        color: '#000000'
    },
    justInline: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkBoxHolder: {
        alignItems: 'flex-end',
        position: 'absolute',
        width: '100%',
        top: -3,
        right: -18,
        zIndex: 1,
        //padding: 2
    }
})