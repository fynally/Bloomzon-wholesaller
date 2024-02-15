import { StyleSheet, Text, View, SafeAreaView, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import HeaderFile2 from '../headers/HeaderFile2'
import ManufacturerTopInfo_226 from '../resources/ManufacturerTopInfo_226'
import { ALL_CATEGORY, CATEGORIES } from '../data/data'
import CategoryItem_268 from '../components/wholesale/CategoryItem_268'

const Screen_268 = ({ navigation, route }) => {
    const { companyData } = route.params
    const [categories, setCategories] = React.useState(ALL_CATEGORY)

    React.useEffect(() => {
        console.log("Screen No:==> 268")
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
            <StatusBar backgroundColor={'#FFFFFF'} style={'dark'} />
            <HeaderFile2 navigation={navigation} title={'Category'} />
            <View style={styles.container}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* <ManufacturerTopInfo_226
                        companyData={companyData}
                    /> */}

                    <View style={{ padding: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Category</Text>
                    </View>

                    <View style={{ paddingHorizontal: 10, paddingBottom: 15 }}>
                        <FlatList
                            scrollEnabled={false}
                            showsVerticalScrollIndicator={false}
                            data={categories.slice(0, 2)}
                            renderItem={({ item }) => (
                                <CategoryItem_268
                                    item={item}
                                    navigation={navigation}
                                    data={categories}
                                />
                            )}
                        />

                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Screen_268

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    }
})