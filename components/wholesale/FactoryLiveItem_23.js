import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { selectProduct } from '../../globals/cart/tempCartSlice'
import { useDispatch } from 'react-redux'
import { COMPANIES } from '../../data/data'

const FactoryLiveItem_23 = ({ item, navigation, setShowWatch }) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        //setShowWatch(true)
        dispatch(selectProduct(item))
        navigation.navigate("Screen_57", { liveData: item })

    }

    return (
        <Pressable
            onPress={handleClick}
            style={styles.container}
        >

            <View style={{ margin: 2, }}>

                <View style={item.id === 2 ? styles.replayBadge : styles.topBadge}>

                    {
                        !item.isOnline
                            ? <MaterialCommunityIcons
                                name={'replay'}
                                size={22}
                                color={"#ffffff"}
                            />
                            : <Feather
                                name='radio'
                                color={'#ffffff'}
                                size={20}
                            />
                    }


                    {
                        item.id === 2 &&
                        <Text style={{ color: '#ffffff' }}>{"Replay"}</Text>
                    }

                </View>

                <Image
                    source={item.image}
                    resizeMode={'cover'}
                    style={{ width: '100%', height: 196, borderRadius: 5 }}
                />

                <FlatList
                    data={item.variations.colors}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <Pressable style={{ marginTop: 6, width: 55 }}>
                            <View style={{ margin: 2, }}>
                                <Image
                                    source={item.v_image}
                                    resizeMode='cover'
                                    style={{ width: '100%', height: 55, borderRadius: 6 }}

                                />
                            </View>
                        </Pressable>
                    )}
                />

                <View>
                    <Text numberOfLines={2} style={{ color: "#343a40", fontSize: 14, fontWeight: "500" }}>{item.name}</Text>
                    <Text>
                        <Text style={{ color: "#F67F00", fontSize: 14 }}>Verified </Text>
                        <Text style={{ color: "#343a40" }}>{COMPANIES[0].veri_date} yrs </Text>
                        <FontAwesome
                            name='circle'
                            color={"#000000"}
                            size={3}
                        />
                        <Text style={{ color: "#343a40", fontSize: 14 }}> {item.rating}/5</Text>
                    </Text>

                </View>

            </View>


        </Pressable>
    )
}

export default FactoryLiveItem_23

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: 330,
    },
    topBadge: {
        position: 'absolute',
        left: 10,
        top: 6,
        zIndex: 1,
        width: 30,
        height: 30,
        backgroundColor: '#F67F00',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    replayBadge: {
        position: 'absolute',
        left: 10,
        top: 6,
        zIndex: 1,
        backgroundColor: '#00000099',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        padding: 3,
        gap: 2,
        paddingHorizontal: 10,

    }
})