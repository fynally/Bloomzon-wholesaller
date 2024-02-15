import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Entypo, Feather, Octicons } from '@expo/vector-icons'
import Screen_73 from '../../screens/73'

const WholesaleBottomComponent = ({ navigation }) => {

    const [showCategory, setShowCategory] = React.useState(false)

    const placeCall = () => {
        alert('Making a call function');
    };

    const sendTextMessage = () => {
        alert('Send text message');
    };

    const handleCategory = () => {
        setShowCategory(true)
    }

    const chatNow = () => {
        navigation.navigate('Screen_106');
    };

    const startOrder = () => {
        navigation.navigate('Screen_232');
        //Screen_421
    };

    return (
        <View style={{

        }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'absolute',
                    width: '100%',
                    bottom: 62,
                    zIndex: 1,


                }}>
                <Pressable
                    onPress={placeCall}
                    style={[
                        styles.sideActionWrapper,
                        { borderTopRightRadius: 20, borderBottomRightRadius: 20 },
                    ]}>
                    <Feather name="phone-call" size={22} color={'#F5AE62'} />
                </Pressable>
                <Pressable
                    onPress={sendTextMessage}
                    style={[
                        styles.sideActionWrapper,
                        { borderTopLeftRadius: 20, borderBottomLeftRadius: 20 },
                    ]}>
                    <Entypo name="chat" size={22} color={'#F5AE62'} />
                </Pressable>
            </View>

            <View style={styles.bottomContent}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 6,
                    }}>
                    <Pressable
                        onPress={handleCategory}
                        style={{ alignItems: 'center', padding: 6 }}>
                        <Octicons name="apps" size={22} color={'#343a40'} />
                        <Text style={{ color: '#000000', fontSize: 13.5 }}>Categories</Text>
                    </Pressable>
                    <View
                        style={{
                            width: '70%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <Pressable onPress={chatNow} style={styles.cartButton}>
                            <Text style={{ color: '#F67F00' }}>Chat now</Text>
                        </Pressable>
                        <Pressable
                            onPress={startOrder}
                            style={[styles.cartButton, { backgroundColor: '#F67F00' }]}>
                            <Text style={{ color: '#ffffff' }}>Start Order</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <Screen_73
                setShowCategory={setShowCategory}
                showCategory={showCategory}
            />
        </View>
    )
}

export default WholesaleBottomComponent

const styles = StyleSheet.create({
    bottomContent: {
        bottom: 0,
        backgroundColor: '#ffffff',
    },
    cartButton: {
        width: '48%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#F67F00',
        borderWidth: 1,
    },
    sideActionWrapper: {
        //padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 33,
        backgroundColor: '#F5DDC4',
    },
})