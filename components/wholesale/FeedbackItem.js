import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import RatingStars from '../../resources/RatingStars'

const FeedbackItem = ({ item }) => {

    const handleClick = () => {
        Alert.alert(item.name, item.review)
    }

    return (
        <Pressable
            onPress={handleClick}
            style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <View style={{ backgroundColor: '#4F87EB', width: 13, height: 13, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign
                        name='google'
                        color={'#ffffff'}
                        size={9}
                    />
                </View>
                <RatingStars rating={item.rateCount} size={10} />
            </View>
            <Text style={{ fontWeight: 'bold', marginTop: 5, fontSize: 11, color: '#000000' }}>{item.name}</Text>
            <View >
                <Text numberOfLines={1} style={{ fontSize: 11, color: '#000000' }}>{item.review}</Text>
            </View>
        </Pressable>
    )
}

export default FeedbackItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        width: 180,
        padding: 5,
        //borderTopStartRadius: 15,
        //borderTopEndRadius: 15,
        //borderBottomStartRadius: 15,
        borderWidth: 2,
        borderColor: '#f5f5f5',
        borderRadius: 10,
        //height: 65
    }
})