import { ImageBackground, Image, Pressable, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import Screen_116 from './116'
import { Badge, Divider } from '@rneui/themed'
import Screen_147 from './147'
import Screen_90 from './90'
import { formatMoney, isLastElement } from '../helper/Helper'
import { Video, ResizeMode } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native'
import { COMPANIES, PRODUCTS, VIDEOS } from '../data/data'
import { useDispatch } from 'react-redux'
import { selectProduct } from '../globals/cart/tempCartSlice'


const areas = [
    {
        id: 1,
        image: require("../assets/wholesale/backgrounds/scooters.png"),
        label: "p2"
    },
    {
        id: 2,
        image: require("../assets/wholesale/backgrounds/scooters.png"),
        label: "p5"
    },
    {
        id: 3,
        image: require("../assets/wholesale/backgrounds/scooters.png"),
        label: "p8"
    },

]

const tourMenu = ["Our Menu", "Scooters", "Television", "Our Stuffs"]

const Screen_101 = ({ route, navigation }) => {

    const { company } = route.params
    const dispatch = useDispatch()
    const [showShortPopup, setShowShortPopup] = React.useState(false)
    const [showProduct, setShowProduct] = React.useState(false)
    const [showAllProducts, setShowAllProducts] = React.useState(false)
    const [showContactUs, setShowContactUs] = React.useState(false)
    const [activeMenu, setActiveMenu] = React.useState("Our Menu")
    const [videoStatus, setVideoStatus] = React.useState({})
    const [tabIndex, setTabIndex] = React.useState(0)

    const videoRef = React.useRef(null);

    //console.log("company==>", company)
    const startOrder = () => {
        dispatch(selectProduct(PRODUCTS[8]))
        navigation.navigate("Screen_197")
    }

    const switchTabs = (index) => {
        setTabIndex(index)
    }

    const handleTourMenu = (menu) => {
        setActiveMenu(menu)
    }

    const handleShowProducts = () => {
        setShowAllProducts(true)
    }

    const handleShowContactUs = () => {
        setShowContactUs(true)
    }

    React.useEffect(() => {
        setTimeout(() => {
            setShowShortPopup(true)
        }, 1000);
    }, [])

    React.useEffect(() => {
        console.log("Screen No:==> 101")
    }, [])
    React.useEffect(() => {
        console.log("videoStatus==>", videoStatus)
    }, [videoStatus])

    useFocusEffect(
        React.useCallback(() => {
            // Page is focused

            // if (videoRef.current) {
            //     videoRef.current.playAsync();
            // }

            return () => {
                if (videoRef.current) {
                    videoRef.current.pauseAsync();
                }
            };

            // Cleanup function
            return () => {
                // Additional cleanup code if needed
            };
        }, [])
    );

    const shortPopUp = () => (
        <Pressable
            onPress={() => setShowProduct(true)}
            style={styles.shortPopUp}>
            <View style={styles.shortPopUpImageWrapper}>
                <Image
                    source={PRODUCTS[0].image}
                    resizeMode={'cover'}
                    style={{ width: 55, height: 60 }}
                />
            </View>
            <View style={{ width: "70%", height: '100%', paddingTop: 5 }}>
                <Text numberOfLines={2} style={{ fontSize: 13, color: "#ffffff" }}>{PRODUCTS[0].desc}</Text>

                <Text style={{ fontSize: 15, color: "#ffffff", fontWeight: "bold", marginTop: 3 }}>{formatMoney(PRODUCTS[0].basePrice)} - {formatMoney(PRODUCTS[0].samplePrice)}</Text>

            </View>

            <AntDesign
                name={'close'}
                color={"#ffffff"}
                size={18}
                style={{ position: 'absolute', right: 3, top: 3 }}
                onPress={() => setShowShortPopup(false)}
            />
        </Pressable>
    )

    const Screen_162 = () => (
        <View style={styles.Screen_162_Container}>

            <View style={{ paddingVertical: 10, flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                <Text style={{ color: "#ffffff" }}>Explore areas ({areas.length}) </Text>
                <Feather
                    name={'chevron-up'}
                    color={"#ffffff"}
                    size={18}
                    onPress={() => setTabIndex(0)}
                />
            </View>

            <View style={{ gap: 10, }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {areas.map((area, index) =>
                        <Pressable
                            onPress={() => { alert(JSON.stringify(area, 0, 2)) }}
                            style={[styles.pano_3dItem, !isLastElement(areas, area) && { marginRight: 10 }]}
                            key={index}>
                            <Image
                                source={area.image}
                                resizeMode='cover'
                                style={{ width: 75, height: 80, borderRadius: 5 }}
                            />
                            <Text style={{ color: "#ffffff", marginVertical: 8, fontSize: 14 }}>{area.label}</Text>
                        </Pressable>
                    )}
                </ScrollView>
            </View>

        </View>
    )

    const Screen_177 = () => (
        <View style={styles.Screen_177_Container}>

            <View style={{ paddingVertical: 10, flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                <Text numberOfLines={2} style={{ color: "#ffffff", width: "90%", fontSize: 13.5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                <Feather
                    name={'chevron-up'}
                    color={"#ffffff"}
                    size={18}
                    onPress={() => setTabIndex(0)}
                />
            </View>

            <View style={{ gap: 10, paddingBottom: 10 }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {tourMenu.map((menu, index) =>
                        <Pressable
                            onPress={() => handleTourMenu(menu)}
                            style={[styles.tourMenu, !isLastElement(tourMenu, menu) && { marginRight: 10 }, activeMenu === menu && styles.activeTourMenu]}
                            key={index}>

                            <Text style={{ color: "#ffffff", marginVertical: 8, fontSize: 13.5 }}>{menu}</Text>
                        </Pressable>
                    )}
                </ScrollView>
            </View>

        </View>
    )

    const tabPanel = () => (
        <View style={{ height: "67%" }}>
            {tabIndex === 1 ? Screen_162() : tabIndex === 2 ? Screen_177() : null}
        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar
                style={"dark"}
                backgroundColor={'#ffffff'}
                translucent={true}
            />

            {/* ///////////////////// */}

            <Video
                ref={videoRef}
                style={{ height: "100%" }}
                source={{
                    uri: VIDEOS[0].video_file,
                }}
                posterSource={VIDEOS[0].video_cover}
                useNativeControls={true}
                usePoster={true}
                resizeMode={ResizeMode.COVER}
                isLooping
                onPlaybackStatusUpdate={status => setVideoStatus(() => status)}
            />

            {/* ///////////////////// */}

            <View
                style={styles.container}
            >
                <View style={styles.dimmingOverlay} />

                <View style={{ padding: 10, flex: 1 }}>
                    <View style={styles.headerPart}>
                        <View style={{ width: "77%" }}>
                            <Text numberOfLines={1} style={{ fontWeight: "bold", fontSize: 18, color: "#ffffff" }}>{company.name}</Text>

                            <View>

                                <View style={{ flexDirection: "row", alignItems: 'center', gap: 2, }}>
                                    <Text style={{ color: "#F67F00", fontWeight: 'bold', marginRight: 2 }}>{company.isVerified ? "Verified" : "Unverfied"}</Text>
                                    <Text style={{ color: "#ffffff", fontSize: 13 }}>{company.veri_date} yrs <FontAwesome name='circle' color={"#ffffff"} size={4} /> {company.staffCount}+ staff <FontAwesome name='circle' color={"#ffffff"} size={4} /> {company.netWorth}</Text>
                                </View>

                                <Text style={{ color: "#ffffff", fontSize: 13 }}>
                                    <Text> {company.slogan} </Text>
                                    <FontAwesome name='circle' color={"#ffffff"} size={4} />
                                    <Text> {company.shortDesc}</Text>
                                </Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center', height: '100%' }}>
                            <AntDesign
                                name={'questioncircleo'}
                                size={22}
                                color={"#ffffff"}
                            />
                        </View>

                        <Pressable
                            onPress={() => navigation.goBack()}
                            style={{ alignItems: 'flex-end', height: '100%' }}>
                            <AntDesign
                                name={'close'}
                                size={25}
                                color={"#ffffff"}
                            />
                        </Pressable>
                    </View>

                    <View style={styles.bottomContainer}>

                        <View style={styles.quickMenu}>

                            <Pressable
                                onPress={handleShowProducts}
                                style={styles.quickMenuItem}>
                                <View style={styles.badge}>
                                    <Text style={{ color: "#ffffff", fontSize: 11 }}>{PRODUCTS.length}</Text>
                                </View>
                                <MaterialCommunityIcons
                                    name={'archive-outline'}
                                    color={"#ffffff"}
                                    size={22}
                                />
                                <Text style={styles.quickMenuItemLabel}>Products</Text>
                            </Pressable>

                            <Pressable
                                onPress={() => switchTabs(1)}
                                style={styles.quickMenuItem}>
                                <MaterialCommunityIcons
                                    name={'cube-outline'}
                                    color={tabIndex === 1 ? "#F67F00" : "#ffffff"}
                                    size={22}
                                />
                                <Text style={[styles.quickMenuItemLabel, tabIndex === 1 && styles.activeTab]}>3D_Pano</Text>
                            </Pressable>

                            <Pressable
                                onPress={() => switchTabs(2)}
                                style={styles.quickMenuItem}>
                                <MaterialCommunityIcons
                                    name={'compass-outline'}
                                    color={tabIndex === 2 ? "#F67F00" : "#ffffff"}
                                    size={22}
                                />
                                <Text style={[styles.quickMenuItemLabel, tabIndex === 2 && styles.activeTab]}>AI tour</Text>
                            </Pressable>

                            <Pressable
                                onPress={handleShowContactUs}
                                style={[styles.quickMenuItem, { borderRightWidth: 0 }]}>
                                <AntDesign
                                    name={'customerservice'}
                                    color={"#ffffff"}
                                    size={22}
                                />
                                <Text style={styles.quickMenuItemLabel}>Products</Text>
                            </Pressable>

                        </View>

                        <Pressable
                            onPress={startOrder}
                            style={styles.startOrder}>
                            <Text style={styles.quickMenuItemLabel}>Start order</Text>
                        </Pressable>
                    </View>
                    {tabPanel()}
                    {showShortPopup && tabIndex === 0 && shortPopUp()}
                    <Screen_116
                        navigation={navigation}
                        productData={company}
                        setShowProduct={setShowProduct}
                        showProduct={showProduct}
                    />

                    <Screen_147
                        products={PRODUCTS}
                        setShowProducts={setShowAllProducts}
                        showProducts={showAllProducts}
                    />

                    <Screen_90
                        navigation={navigation}
                        setShowContactUs={setShowContactUs}
                        showContactUs={showContactUs}
                    />
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Screen_101

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        paddingTop: 30,
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    dimmingOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#2B2B2B59',
    },
    headerPart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginVertical: 10
    },
    shortPopUp: {
        backgroundColor: "#00000099",
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        width: 240,
        borderRadius: 4,
        position: "absolute",
        right: 10,
        top: "45%",
        zIndex: 1
    },
    shortPopUpImageWrapper: {
        backgroundColor: "#ffffff",
        padding: 6,
        width: 55,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    bottomContainer: {
        //backgroundColor: 'red',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignSelf: 'center',
        marginBottom: 10

    },
    quickMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#00000099",
        justifyContent: "space-between",
        borderRadius: 5,
        paddingVertical: 10,
    },
    quickMenuItem: {
        alignItems: 'center',
        //paddingVertical: 10,
        borderRightWidth: 1,
        justifyContent: 'center',
        width: "25%",
        borderRightColor: "#ffffff49"
    },
    quickMenuItemLabel: {
        color: "#ffffff",
        fontSize: 14
    },
    startOrder: {
        backgroundColor: "#F67F00",
        padding: 13,
        alignItems: "center",
        borderRadius: 5,
        marginVertical: 8
    },
    badge: {
        position: 'absolute',
        right: 25,
        top: -5,
        width: 17,
        height: 17,
        backgroundColor: "red",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center',
        zIndex: 1
    },
    activeTab: {
        color: "#F67F00"
    },
    pano_3dItem: {
        alignItems: 'center'
    },
    Screen_162_Container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: "#00000099",
        paddingHorizontal: 10,
        borderRadius: 5
    },
    Screen_177_Container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: "#00000099",
        paddingHorizontal: 10,
        borderRadius: 5
    },
    tourMenu: {
        //width: 80,
        //backgroundColor: "#F67F00",
        paddingHorizontal: 10,
        alignItems: "center",
        borderRadius: 4
    },
    activeTourMenu: {
        backgroundColor: "#F67F00"
    }
})