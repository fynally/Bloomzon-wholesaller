import { FlatList, StyleSheet, Text, View, Image, Dimensions, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopMenuItem from '../components/wholesale/TopMenuItem'
import { CATEGORIES, COMPANIES, SHORT_CATEGORIES, TOP_FACTORY, TOP_WHOLESALE, WHOLESALE_MENU } from '../data/data';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import TopFactoryItem from '../components/wholesale/TopFactoryItem';
import CategoryItem from '../components/wholesale/CategoryItem';
import { Divider } from '@rneui/themed';
import ShortCategoryItem from '../components/wholesale/ShortCategoryItem';
import CompanyInfoItem from '../components/wholesale/CompanyInfoItem';
import TopWholesaleItem from '../components/wholesale/TopWholesaleItem';

const WholesaleTab_21 = ({ navigation }) => {

    const [menuData, setMenuData] = useState(WHOLESALE_MENU);
    const [topFactories, setTopFactories] = useState(TOP_FACTORY);
    const [topWholesale, setTopWholesale] = useState(TOP_WHOLESALE);
    const [categories, setCategories] = useState(CATEGORIES);
    const [shortCategories, setShortCategories] = useState(SHORT_CATEGORIES);
    const [activeCategory, setActiveCategory] = useState(1)
    const [companies, setCompanies] = useState(COMPANIES)
    const [activeShortCategory, setActiveShortCategory] = useState(1)

    const filteredCompanies = COMPANIES.filter(company => company.category === activeCategory);

    const allCategory = () => {
        navigation.navigate("Screen_268", { companyData: companies[0] })
    }

    React.useEffect(() => {
        console.log("Screen No:==> 21")
    }, [])

    return (
        <View style={{}}>
            <View style={{ paddingLeft: 10, backgroundColor: '#ADE5E3', }}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={menuData}
                    renderItem={({ item }) => (
                        <TopMenuItem
                            item={item}
                            navigation={navigation}
                        />
                    )}
                />
            </View>

            <View style={{ marginBottom: 15 }}>

                <Text style={[styles.sectionTitle, { padding: 10, }]}>Online factory tours</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5, }}>

                    <Pressable
                        onPress={() => navigation.navigate("Screen_23")}
                        style={styles.tourItem}>
                        <View style={styles.card}>
                            <View>

                                <View style={styles.topBadge}>
                                    <Feather
                                        name='radio'
                                        color={'#ffffff'}
                                        size={18}
                                    />
                                    <Text style={{ color: '#ffffff' }}>Live</Text>
                                </View>

                                <View style={styles.factoryShortView}>
                                    <Image
                                        source={require("../assets/wholesale/shirt.jpg")}
                                        resizeMode={'contain'}
                                        style={{ width: 50, height: 50 }}
                                    />
                                </View>

                                <Image
                                    source={require("../assets/wholesale/backgrounds/worker.jpg")}
                                    resizeMode={'cover'}
                                    style={styles.tourImage}
                                />
                            </View>

                            <View style={styles.tourLabelHolder}>
                                <Text style={styles.tourLabel}>Factory LIVE</Text>
                            </View>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => navigation.navigate("Screen_24")}
                        style={styles.tourItem}>
                        <View style={styles.card}>
                            <View>

                                <View style={[styles.topBadge, {
                                    backgroundColor: '#00000099',
                                    width: 100,
                                    justifyContent: 'center'
                                }]}>
                                    <MaterialCommunityIcons
                                        name='rotate-360'
                                        color={'#ffffff'}
                                        size={28}
                                    />
                                </View>

                                <View style={styles.factoryShortView}>
                                    <Image
                                        source={require("../assets/wholesale/icons/scooter1.png")}
                                        resizeMode={'contain'}
                                        style={{ width: 50, height: 50 }}
                                    />
                                </View>

                                <Image
                                    source={require("../assets/wholesale/backgrounds/worker.jpg")}
                                    resizeMode={'cover'}
                                    style={styles.tourImage}
                                />
                            </View>

                            <View style={styles.tourLabelHolder}>

                                <Text style={styles.tourLabel}>Virtual Reality Showroom</Text>
                            </View>

                        </View>

                    </Pressable>

                </View>
            </View>

            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Top manufacturers & factory</Text>
                    <Text onPress={() => alert('See all factory')} style={styles.sectionMore}>See more</Text>
                </View>

                {/* Top Factory section */}
                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={topFactories}
                        renderItem={({ item }) => (
                            <TopFactoryItem
                                item={item}
                                navigation={navigation}
                            />
                        )}
                    />
                </View>

            </View>

            {/* Top Wholesalers section */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Top Wholesalers</Text>
                    <Text onPress={() => alert("See all top Wholesalers")} style={styles.sectionMore}>See more</Text>
                </View>

                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={topWholesale}
                        renderItem={({ item }) => (
                            <TopWholesaleItem
                                item={item}
                                navigation={navigation}
                            />
                        )}
                    />
                </View>

            </View>

            {/* Categories section */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Categories</Text>
                    <Text onPress={allCategory} style={styles.sectionMore}>See more</Text>
                </View>

                <View style={{ marginLeft: 10 }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={categories.slice(0, 4)}
                        renderItem={({ item }) => (
                            <CategoryItem
                                item={item}
                                navigation={navigation}
                                activeItem={activeCategory}
                                setActiveItem={setActiveCategory}
                            />
                        )}
                    />
                </View>

                <Divider style={{ marginVertical: 10 }} />

                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={shortCategories}
                        renderItem={({ item }) => (
                            <ShortCategoryItem
                                item={item}
                                navigation={navigation}
                                activeItem={activeShortCategory}
                                setActiveItem={setActiveShortCategory}
                            />
                        )}
                    />
                </View>

            </View>

            {/* All Factories section */}
            <View>
                <FlatList
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    data={activeCategory > 1 ? filteredCompanies : companies}
                    renderItem={({ item }) => (
                        <CompanyInfoItem
                            item={item}
                            navigation={navigation}
                        />
                    )}
                />
            </View>

        </View>
    )
}

export default WholesaleTab_21

const styles = StyleSheet.create({
    contentWrapper: {

    },
    sectionTitle: {
        color: '#000000',
        fontSize: 16,
        //padding: 10,
        fontWeight: 'bold'
    },
    tourItem: {
        width: Dimensions.get('screen').width / 2 - 5,
        height: 200,
    },
    card: {
        margin: 5,
    },
    tourImage: {
        width: '100%',
        height: 150,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6
    },
    tourLabelHolder: {
        padding: 10,
        height: 60,
        backgroundColor: '#ffffff',
    },
    tourLabel: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15
    },
    topBadge: {
        position: 'absolute',
        right: 10,
        top: 6,
        zIndex: 1,
        backgroundColor: '#F67F00',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        borderRadius: 20,
        paddingVertical: 3
    },
    factoryShortView: {
        position: 'absolute',
        left: 10,
        bottom: 6,
        zIndex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 6,
        padding: 3
    },
    section: {
        marginTop: 5,
        backgroundColor: '#ffffff',
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    sectionMore: {
        color: '#F67F00',
        fontSize: 16
    }
})