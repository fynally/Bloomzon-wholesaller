import { Pressable, StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { PRODUCTS } from '../../data/data'
import ProductsItem from './ProductsItem'
import { useDispatch, useSelector } from 'react-redux'
import { companyState, setCompany, setProducts } from '../../globals/company/companySlice'

const CompanyInfoItem = ({ item, navigation }) => {

    const dispatch = useDispatch()

    const handleClick = () => {

        dispatch(setCompany(item))

        dispatch(setProducts(compony_products))

        navigation.navigate("MainTabsController", { companyData: item, page: 1 })
        //navigation.navigate("Screen_76", { companyData: item })
    }


    const compony_products = PRODUCTS.filter(product => product.sellerCode === item.code);

    React.useEffect(() => {
        //dispatch(setProducts(compony_products))
        //console.log(compony_products)
    }, [])


    return (
        <Pressable onPress={handleClick} style={styles.container}>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 1, marginVertical: 5, padding: 5 }}>
                <View style={{ borderWidth: 2, borderRadius: 5, padding: 5, borderColor: '#eeeeee' }}>
                    <Image
                        source={item.logo}
                        resizeMode={'contain'}
                        style={{ width: 25, height: 25 }}
                    />
                </View>

                <View style={{ padding: 5, width: '70%', }}>
                    <Text
                        numberOfLines={1}
                        style={{ fontWeight: 'bold', color: '#000000', fontSize: 16 }}>{item.name}</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3, width: "60%", }}>
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

                        <Text style={{ color: '#343a40', fontSize: 13.5 }}>{item.netWorth}</Text>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3, width: "80%", }}>

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

            <View style={{}}>
                <FlatList
                    data={compony_products.slice(0, 6)}
                    renderItem={({ item }) => (
                        <ProductsItem
                            item={item}
                            navigation={navigation}
                        />
                    )}
                    numColumns={3}
                />

            </View>

        </Pressable>
    )
}

export default CompanyInfoItem

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: '#ffffff',
        padding: 6

    }
})