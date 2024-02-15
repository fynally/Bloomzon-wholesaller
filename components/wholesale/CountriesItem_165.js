import { Feather } from '@expo/vector-icons';
import { Divider } from '@rneui/themed';
import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setShipping, shippingData } from '../../globals/shipping/shippingSlice';

const CountriesItem_165 = ({ item, isLastItemInSection, navigation, isTop_4, side }) => {

    const { shipping } = useSelector(shippingData)

    const dispatch = useDispatch()

    const handleSelect = () => {

        if (side === 'from') {
            dispatch(setShipping({ shipFrom: item }));
        } else if (side === 'to') {
            dispatch(setShipping({ shipTo: item }));
        }
        navigation.goBack()
    };

    return (
        <>
            <Pressable
                onPress={handleSelect}
                style={[styles.container]}>
                <Image source={item.flag} resizeMode="contain" style={{ width: 20, height: 20, borderRadius: 28 }} />
                <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, isTop_4 && { width: '85%' }]}>
                    <Text style={{ fontSize: 15 }}>{item.name}</Text>
                    {
                        shipping.shipFrom.id === item.id || shipping.shipTo.id === item.id &&
                        <Feather
                            name={isTop_4 ? "check" : 'check-circle'}
                            color={"#F67F00"}
                            size={isTop_4 ? 20 : 15}
                            style={{ marginLeft: !isTop_4 ? 10 : 0 }}
                        />
                    }
                </View>
            </Pressable>

            {isLastItemInSection && <Divider style={{ marginVertical: 10 }} color='#00000029' />}
        </>
    );
};

export default CountriesItem_165;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 8, // Adjust as needed
        paddingHorizontal: 16, // Adjust as needed
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
