import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-paper';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import ShippingOptionItem from './ShippingOptionItem';

const ShippingMethodItem = ({ item, checkedItem, setCheckedItem }) => {


    const [options, setOptions] = React.useState(item.options.slice(0, 1));

    const loadMoreItems = (allData, stateData, setter) => {
        const currentLength = stateData.length;
        const newLength = currentLength + allData.length;
        const newData = allData.slice(0, newLength);
        setter(newData);
    };

    const showLessItems = (allData, stateData, setter) => {
        const currentLength = stateData.length;
        const newLength = Math.floor(currentLength / 2)

        if (newLength > 0) {
            const newData = allData.slice(0, newLength);
            setter(newData);
        }
    };

    return (

        <View style={styles.card}>
            <View style={styles.section}>
                <View style={[styles.justInline, { gap: 5 }]}>
                    <FontAwesome5
                        name={item.shippingIcon}
                        size={20}
                        color={'#000000'}
                    />
                    <Text style={styles.value}>{item.name}</Text>
                </View>

                {
                    item.options.length &&
                    <Pressable
                        onPress={() => item.options.length > options.length ? loadMoreItems(item.options, options, setOptions) : showLessItems(item.options, options, setOptions)}
                        style={[styles.justInline, { gap: 5 }]}>
                        <Text style={{ color: '#F67F00', fontSize: 14 }}>
                            {item.options.length > options.length ? `${item.options.length - 1} more` : "Show less"}</Text>
                        <Ionicons
                            name={item.options.length === options.length ? "chevron-up-circle-outline" : "chevron-down-circle-outline"}
                            size={20}
                            color={'#F67F00'}
                        />
                    </Pressable>
                }


            </View>
            {/* <Divider style={{ marginTop: 5 }} /> */}
            <View style={{}}>

                <FlatList
                    data={options}
                    renderItem={({ item }) => (
                        <ShippingOptionItem
                            item={item}
                            checkedItem={checkedItem}
                            setCheckedItem={setCheckedItem}
                        />
                    )}
                />

            </View>

        </View>
    )
}

export default ShippingMethodItem

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        marginHorizontal: 10
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
        color: '#000000',
        fontSize: 15,
        letterSpacing: 0.5
    },
    justInline: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})