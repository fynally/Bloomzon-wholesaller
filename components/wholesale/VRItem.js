import { Image, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import VRProductItem from './VRProductItem'

const VRItem = ({ item, navigation }) => {

    const handleClick = () => {
        //const selected = JSON.stringify(item, 0, 2)
        navigation.navigate("Screen_101", { company: item })

        //console.log("item==>", item)
    }

    return (

        <Pressable style={styles.container}>

            {/* Company data */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 1, marginVertical: 5, padding: 5, width: "100%", }}>
                <View style={{ borderWidth: 2, borderRadius: 5, padding: 5, borderColor: '#eeeeee' }}>
                    <Image
                        source={item.logo}
                        resizeMode={'contain'}
                        style={{ width: 25, height: 25 }}
                    />
                </View>

                <View style={{ padding: 5, width: '70%' }}>
                    <Text
                        numberOfLines={1}
                        style={{ fontWeight: 'bold', color: '#000000', fontSize: 16 }}>{item.name}</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3, width: "80%" }}>
                        <Text style={{ color: '#ff6501', fontSize: 13.5 }}>{item.isVerified ? "Verified" : 'Unverified'}</Text>

                        <Text style={{ color: '#343a40', fontSize: 13.5 }}>{item.veri_date} yrs</Text>

                        <MaterialIcons
                            name={'circle'}
                            size={3}
                            color={'#000000'}
                        />

                        <Text style={{ color: '#343a40', fontSize: 13.5 }}>{item.staffCount} + staff</Text>

                        <MaterialIcons
                            name={'circle'}
                            size={3}
                            color={'#000000'}
                        />

                        <Text style={{ color: '#343a40', fontSize: 13.5 }}>{6855}</Text>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3, }}>

                        <Text style={{ color: '#343a40', fontSize: 13.5 }}>{item.shortDesc}</Text>

                        <MaterialIcons
                            name={'circle'}
                            size={3}
                            color={'#000000'}
                        />

                        <Text style={{ color: '#343a40', fontSize: 13.5 }}>{item.slogan}</Text>

                    </View>
                </View>

            </View>


            {/* Images */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, paddingHorizontal: 5 }}>

                <Pressable onPress={handleClick} style={styles.bigImageHolder}>

                    <View style={styles.showroomView}>
                        <Text style={{ color: '#ffffff' }}>Showroom</Text>
                    </View>

                    <View style={styles.VR360View}>
                        <MaterialCommunityIcons
                            name='rotate-360'
                            color={'#ffffff'}
                            size={28}
                        />
                    </View>

                    <Image
                        source={item.logo}
                        resizeMode={'contain'}
                        style={{ width: '100%', height: 200, borderRadius: 6 }}
                    />
                </Pressable>

                <View style={{ width: '30%', alignItems: 'center' }}>

                    <View style={styles.imageItem}>
                        <Image
                            source={item.logo}
                            resizeMode={'contain'}
                            style={{ width: 80, height: 80 }}
                        />
                    </View>

                    <View style={styles.imageItem}>
                        <Image
                            source={item.logo}
                            resizeMode={'contain'}
                            style={{ width: 80, height: 80 }}
                        />
                    </View>

                </View>

            </View>

        </Pressable>
    )
}

export default VRItem

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    imageItem: {
        backgroundColor: '#f5f5f5',
        padding: 7,
        margin: 4
    },
    bigImageHolder: {
        width: '70%',
        backgroundColor: 'teal',
        borderRadius: 6
    },
    showroomView: {
        backgroundColor: '#00000099',
        width: 80,
        height: 30,
        zIndex: 1,
        borderRadius: 20,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 10,
        top: 10,
        padding: 3
    },
    VR360View: {
        backgroundColor: '#00000099',
        width: 50,
        height: 50,
        zIndex: 1,
        borderRadius: 50,
        justifyContent: 'center',
        position: 'absolute',
        alignItems: 'center',
        alignSelf: 'center',
        top: 80
    }
})