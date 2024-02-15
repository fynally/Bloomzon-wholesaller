import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Ionicons, Octicons } from '@expo/vector-icons'

const ManufacturerTopInfo_226 = ({ companyData }) => {
    const [hearted, setHearted] = useState(false)
    const likeProduct = () => {
        setHearted(!hearted)
    }

    //console.log("companyData==><", companyData)

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: companyData?.isVerified ? '#F67F00' : 'red', fontSize: 14 }}>
                    {
                        companyData?.isVerified
                            ? "Verified Custom Manufacturer"
                            : "Manufacturer not verified"
                    }
                </Text>
                <AntDesign
                    name={companyData?.isVerified ? 'check' : 'close'}
                    size={15}
                    color={companyData?.isVerified ? "#5CD3CF" : 'red'}
                />
            </View>

            <View style={styles.wrapper}>
                <Text numberOfLines={2} style={{ fontSize: 18, color: '#000000', width: '72%' }}>{companyData?.name}</Text>

                <Pressable
                    onPress={likeProduct}
                    style={styles.heartView}>
                    <AntDesign
                        name={hearted ? "heart" : "hearto"}
                        size={20}
                        color={hearted ? "#F67F00" : "#000000"}
                    />
                    <Text style={{ color: hearted ? "#F67F00" : "#000000" }}>{hearted ? companyData?.follower + 1 : companyData?.follower}</Text>
                </Pressable>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginVertical: 5 }}>
                <Ionicons
                    name='basket'
                    size={22}
                    color={'#FAC632'}
                />
                <Text style={{ color: '#343a40', fontSize: 15 }}>{companyData?.veri_date} years</Text>
                <Octicons name='dot-fill' size={7} color={'#343a40'} />

                <Text style={{ color: '#343a40', fontSize: 15 }}>{companyData?.shortDesc}</Text>

            </View>

        </View>
    )
}

export default ManufacturerTopInfo_226

const styles = StyleSheet.create({
    container: {
        padding: 10,
        //marginBottom: 15
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    heartView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
})