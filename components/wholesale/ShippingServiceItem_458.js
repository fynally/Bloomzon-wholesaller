import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { isLastElement } from '../../helper/Helper'
import { Divider } from '@rneui/themed'
import { RadioButton } from 'react-native-paper'

const ShippingServiceItem_458 = ({ item, data, activeServices, setActiveServices }) => {

    const [checked, setChecked] = React.useState('');
    const lastElement = isLastElement(data, item)

    const handleSelect = () => {
        setActiveServices(item)
        setChecked(item.id)
    }

    return (
        <>
            <Pressable
                onPress={handleSelect}
                style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.values}>{item.name} ({item.level})</Text>
                </View>

                <View style={styles.wrapper}>
                    <Text style={styles.values}>
                        {item.duration_from}/{item.duration_to}
                    </Text>
                    <Text style={styles.labels}>Estimated Delivery</Text>
                </View>

                <View style={[styles.wrapper, { alignItems: 'flex-end', flexDirection: 'row', alignItems: 'center', gap: 5 }]}>
                    <View style={{ alignItems: 'flex-end', width: "65%" }}>
                        <Text style={styles.values}>USD {item.price}</Text>
                        <Text style={styles.labels}>DAP</Text>
                    </View>

                    <RadioButton
                        value={item.id}
                        status={item.id === activeServices.id ? 'checked' : 'unchecked'}
                        onPress={handleSelect}
                        color={'#F67F00'}
                    />

                </View>

            </Pressable>
            {!lastElement && <Divider style={{ marginVertical: 8 }} />}
        </>
    )
}

export default ShippingServiceItem_458

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    wrapper: {
        width: "28%"
    },
    labels: {
        fontSize: 11,
        color: "#00000099"
    },
    values: {
        fontSize: 12.5,
        color: "#000000",
        fontWeight: "400"
    }
})