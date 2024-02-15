import { SafeAreaView, StyleSheet, Text, View, FlatList, ScrollView, Dimensions, Animated } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import HeaderFile2 from '../headers/HeaderFile2'
import ManufacturerTopInfo_226 from '../resources/ManufacturerTopInfo_226'
import { CATEGORIES, COMPANIES, MAIN_CATEGORY_226 } from '../data/data'
import { Divider } from '@rneui/themed'
import MiniMenuItem_258 from '../components/wholesale/MiniMenuItem_258'
import FilterMenuItem_258 from '../components/wholesale/FilterMenuItem_258'
import SubCategoryItem from '../components/wholesale/SubCategoryItem'
import WholesaleBottomComponent from '../components/wholesale/WholesaleBottomComponent'
import Screen_73 from './73'
import { companyState } from '../globals/company/companySlice'
import { useSelector } from 'react-redux'

const miniMenu = [
    { id: 1, name: "Men Pants/Trouser" },
    { id: 2, name: "Men set/Tracksuit" },
    { id: 3, name: "Men Shorts" },
    { id: 4, name: "Men Tops/Sleeveless" },
    { id: 5, name: "Men Tops/Long sleeve" },
]

const filterMenu = [
    { id: 1, name: "Recommended" },
    { id: 2, name: "New" },
    { id: 3, name: "Men Shorts" },
    { id: 4, name: "Orders" },
    { id: 5, name: "Supplier Selected" },
]

const Screen_341 = ({ companyData, navigation }) => {
    const { products, minMOQ } = useSelector(companyState)
    const [selectedMenu, setSelectedMenu] = React.useState(miniMenu[0])
    const [selectedFilter, setSelectedFilter] = React.useState(filterMenu[0])
    const [customizeTab, setCustomizeTab] = React.useState(0)

    const handleCustomizeTab = (index) => {
        setCustomizeTab(index)
        console.log("Tab index==>", index)
    }

    React.useEffect(() => {
        console.log("Screen No:==> 341")
    }, [])

    React.useEffect(() => {

        //console.log("minMOQ:==>", minMOQ)
    }, [])

    return (

        <View style={styles.container}>

            <ScrollView
                stickyHeaderIndices={[3]}
                showsVerticalScrollIndicator={false}
                style={{
                    //marginBottom: Dimensions.get("screen").height - 420
                }}
            >

                <ManufacturerTopInfo_226
                    companyData={companyData}
                />

                <View style={{ flexDirection: "row", alignItems: 'center', gap: 10, paddingHorizontal: 10 }}>

                    <Text
                        onPress={() => handleCustomizeTab(0)}
                        style={{ color: customizeTab === 0 ? "#F67F00" : "#343a40", fontSize: 15 }}>All Products</Text>

                    <Text
                        onPress={() => handleCustomizeTab(1)}
                        style={{ color: customizeTab === 1 ? "#F67F00" : "#343a40", fontSize: 15 }}>Customizable</Text>
                </View>

                <Divider style={{ marginVertical: 15 }} />

                <View style={{ paddingHorizontal: 10, backgroundColor: "#ffffff" }}>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={miniMenu}
                        renderItem={({ item }) => (
                            <MiniMenuItem_258
                                item={item}
                                data={miniMenu}
                                selectedMenu={selectedMenu}
                                setSelectedMenu={setSelectedMenu}
                            />
                        )}
                    />

                    <View style={{ marginTop: 5, }}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={filterMenu}
                            renderItem={({ item }) => (
                                <FilterMenuItem_258
                                    item={item}
                                    data={filterMenu}
                                    selectedFilter={selectedFilter}
                                    setSelectedFilter={setSelectedFilter}
                                />
                            )}
                        />
                    </View>
                </View>


                <View style={{ padding: 10 }}>
                    <FlatList
                        numColumns={2}
                        scrollEnabled={false}
                        data={products}
                        renderItem={({ item }) => (
                            <SubCategoryItem
                                item={item}
                                navigation={navigation}
                                data={companyData}
                            />
                        )}
                    />
                </View>



            </ScrollView>

            <WholesaleBottomComponent navigation={navigation} />
        </View>
    )
}

export default Screen_341

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    }
})