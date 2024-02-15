import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const TopRankingSliderItem = ({ item }) => {
    return (
        <Pressable
            style={styles.container}
        >


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
                    style={{ width: 130, height: 130, borderRadius: 4 }}
                />
            </View>

            <View style={{ paddingVertical: 5, padding: 5, justifyContent: 'center', width: '60%' }}>

                <Text numberOfLines={3} style={{ color: '#00000099', fontSize: 13 }}>{item.desc}</Text>

                <Text style={{ fontWeight: 'bold', color: '#000000', marginVertical: 3 }}>{`${item.priceFrom} - ${item.priceTo}`}</Text>

                <Text style={{ color: '#000000', fontSize: 13 }}>{item.moq} pieces (MOQ)</Text>

            </View>

        </Pressable>
    )
}

export default TopRankingSliderItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        gap: 5,
        marginHorizontal: 10
    },
    innerWrapper: {
        margin: 3,
        //backgroundColor: '#f5f5f5f5'
    }
})