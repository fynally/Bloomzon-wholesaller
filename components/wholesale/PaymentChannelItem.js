import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const PaymentChannelItem = ({ item, showLess }) => {

    const handleClick = () => {
        console.log(item)
    }

    return (
        <View
            //onPress={handleClick}
            style={[styles.container, { width: !showLess ? 50 : 40 }]}
        >
            {
                showLess && item.id === 5
                    ? <Text style={{ alignSelf: 'center', marginBottom: 8, fontSize: 14 }}>...</Text>
                    : <Image
                        source={item.channel}
                        resizeMode={!showLess ? 'cover' : 'contain'}
                        style={{ width: 35, height: !showLess ? 15 : 20 }}
                    />
            }
        </View>
    )
}

export default PaymentChannelItem

const styles = StyleSheet.create({
    container: {
        //width: 40,
        height: 25,
        borderRadius: 3,
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'center',
        marginRight: 5,
        marginTop: 6,
        borderColor: "#00000039",
        backgroundColor: "#ffffff"
    }
})