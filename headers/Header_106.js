import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, Feather, Octicons } from '@expo/vector-icons'

const Header_106 = ({ chatCount, navigation }) => {

    const currentDate = new Date();

    const handleGoBack = () => {
        navigation.goBack()
    }

    const handleVideo = () => {
        alert("Video function called")
    }

    const handleBroadcast = () => {
        alert("Broadcast function called")
    }

    const handleAddUser = () => {
        alert("Add user function called")
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, backgroundColor: '#ffffff', marginTop: 15 }}>
            <View style={styles.leftView}>
                <AntDesign
                    name='arrowleft'
                    color={'#000000'}
                    size={25}
                    onPress={handleGoBack}
                />
                <View>
                    <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 14 }}>ABC Mobile Phones</Text>
                    <Text style={{ color: '#00000099', fontSize: 12 }}>Local time {currentDate.toLocaleTimeString()}</Text>
                </View>
            </View>

            <View style={styles.rightView}>

                {
                    chatCount > 0 &&
                    <View style={{ width: 24, height: 22, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff6501', borderRadius: 5 }}>
                        <Feather
                            name='radio'
                            size={20}
                            color={'#ffffff'}
                            onPress={handleBroadcast}
                        />
                    </View>
                }

                <Octicons
                    name='device-camera-video'
                    size={23}
                    color={'#000000'}
                    onPress={handleVideo}
                />

                <Octicons
                    name='person-add'
                    size={23}
                    color={'#000000'}
                    onPress={handleAddUser}
                />

            </View>

        </View>
    )
}

export default Header_106

const styles = StyleSheet.create({
    leftView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    rightView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    }
})