import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { companyState } from '../../globals/company/companySlice'
import { formatMoney } from '../../helper/Helper'

const SubCategoryItem = ({ item, navigation, data }) => {

    const MOQ = item.moqs.base

    const lowest_moq_Min = MOQ.reduce((minMinObject, currentObject) => {
        // Compare the 'min' values of the current object and the minMinObject
        if (currentObject.moq.min < minMinObject.moq.min) {
            return currentObject; // Update minMinObject if the current 'min' is lower
        } else {
            return minMinObject; // Keep the current minMinObject if the 'min' is not lower
        }
    }, MOQ[0]);

    const highest_moq_Min = MOQ.reduce((maxMinObject, currentObject) => {
        // Compare the 'min' values of the current object and the maxMinObject
        if (currentObject.moq.min > maxMinObject.moq.min) {
            return currentObject; // Update maxMinObject if the current 'min' is higher
        } else {
            return maxMinObject; // Keep the current maxMinObject if the 'min' is not higher
        }
    }, MOQ[0]);

    const handleClick = () => {

        navigation.navigate("Screen_261", { item: item, companyData: data })
    }

    return (
        <Pressable
            onPress={handleClick}
            style={styles.container}
        >
            <View style={styles.innerWrapper}>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign
                        name='playcircleo'
                        color={'#ffffff'}
                        size={30}
                        style={{ position: 'absolute', zIndex: 1 }}
                    />
                    <Image
                        source={item.image}
                        resizeMode='cover'
                        style={{ width: 160, height: 160, borderRadius: 4 }}
                    />
                </View>

                <View style={{ paddingVertical: 5 }}>

                    <Text numberOfLines={2} style={{ color: '#343a40', fontSize: 14, fontWeight: '500' }}>{item.desc}</Text>

                    <Text style={{ fontWeight: 'bold', color: '#000000', marginVertical: 5, fontSize: 15 }}>{`${formatMoney(highest_moq_Min.price)} - ${formatMoney(lowest_moq_Min.price)}`}</Text>

                    <Text style={{ color: '#000000', fontSize: 14 }}>{highest_moq_Min.moq.min} pieces (MOQ)</Text>

                </View>

            </View>

        </Pressable>
    )
}

export default SubCategoryItem

const styles = StyleSheet.create({
    container: {
        width: '50%',
        marginTop: 10
    },
    innerWrapper: {
        margin: 3,
        //backgroundColor: '#f5f5f5f5'
    }
})