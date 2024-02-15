import { SafeAreaView, StyleSheet, Text, View, FlatList, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import HeaderFile2 from '../headers/HeaderFile2'
import ManufacturerTopInfo_226 from '../resources/ManufacturerTopInfo_226'
import { CATEGORIES, COMPANIES, MAIN_CATEGORY_226, PRODUCTS } from '../data/data'
import { Divider } from '@rneui/themed'
import MiniMenuItem_258 from '../components/wholesale/MiniMenuItem_258'
import FilterMenuItem_258 from '../components/wholesale/FilterMenuItem_258'
import SubCategoryItem from '../components/wholesale/SubCategoryItem'
import WholesaleBottomComponent from '../components/wholesale/WholesaleBottomComponent'
import Screen_73 from './73'

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

const Screen_258 = ({ navigation, route }) => {
    const { companyData } = route.params ?? {}
    //const [companyData, setCompanyData] = React.useState(COMPANIES[1])
    const [productsData, setProductsData] = React.useState(MAIN_CATEGORY_226);
    const [selectedMenu, setSelectedMenu] = React.useState(miniMenu[0])
    const [selectedFilter, setSelectedFilter] = React.useState(filterMenu[2])
    const [showCategory, setShowCategory] = React.useState(false)

    React.useEffect(() => {
        console.log("Screen No:==> 258")
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
            <StatusBar backgroundColor={'#FFFFFF'} style={'dark'} />
            <View style={styles.container}>
                <HeaderFile2
                    navigation={navigation}
                    title={'Products'}
                    hasSearch={true}
                    hasLine={true}
                />

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

                    <Divider />

                    <View style={{ padding: 10, marginBottom: -10 }}>
                        <Text style={{ fontWeight: 'bold', color: "#000000" }}>All Products</Text>
                    </View>

                    <View style={{ padding: 10, backgroundColor: "#ffffff" }}>

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
                                        data={miniMenu}
                                        selectedFilter={selectedFilter}
                                        setSelectedFilter={setSelectedFilter}
                                    />
                                )}
                            />
                        </View>
                    </View>

                    <View style={{ paddingHorizontal: 10 }}>
                        <FlatList
                            numColumns={2}
                            scrollEnabled={false}
                            data={PRODUCTS}
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

                <WholesaleBottomComponent navigation={navigation} setShowCategory={setShowCategory} />
            </View>
        </SafeAreaView>
    )
}

export default Screen_258

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    }
})