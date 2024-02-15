import { StyleSheet, Text, View, ScrollView, Image, Pressable, FlatList } from 'react-native'
import React from 'react'
import ManufacturerTopInfo_226 from '../resources/ManufacturerTopInfo_226'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import { Divider } from '@rneui/themed'
import { AntDesign, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons'
import { Video, ResizeMode } from 'expo-av';
import WholesaleBottomComponent from '../components/wholesale/WholesaleBottomComponent'
import Reviews from '../resources/Reviews'
import { CATEGORIES, FEEDBACKS } from '../data/data'
import FeedbackItem_404 from '../components/wholesale/FeedbackItem_404'
import CategoryItem_440 from '../components/wholesale/CategoryItem_440'
import CategoryImageItem_440 from '../components/wholesale/CategoryImageItem_440'

const imagesData = [
    {
        id: 1,
        image: require("../assets/wholesale/backgrounds/scooters.png")
    },
    {
        id: 2,
        image: require("../assets/wholesale/backgrounds/scooters.png")
    },
    {
        id: 3,
        image: require("../assets/wholesale/backgrounds/scooters.png")
    },
    {
        id: 4,
        image: require("../assets/wholesale/backgrounds/scooters.png")
    },
    {
        id: 5,
        image: require("../assets/wholesale/backgrounds/scooters.png")
    },
    {
        id: 6,
        image: require("../assets/wholesale/backgrounds/scooters.png")
    },
]

const Screen_440 = ({ companyData, navigation }) => {

    const [feedbacks, setFeedbacks] = React.useState(FEEDBACKS);
    const [categories, setCategories] = React.useState(CATEGORIES);
    const [status, setStatus] = React.useState({});
    const [moreOverview, setMoreOverview] = React.useState(false);
    const [moreServices, setMoreServices] = React.useState(false);
    const [activeCategory, setActiveCategory] = React.useState(CATEGORIES[5]);
    const [startFollow, setStartFollow] = React.useState(false);

    const video = React.useRef(null);

    // React.useEffect(() => {
    //     console.log("video==>", status)
    // }, [status])
    const handleMoreOverview = () => {
        setMoreOverview(!moreOverview)
    }

    const handleMoreServices = () => {
        setMoreServices(!moreServices)
    }

    const handleFollow = () => {
        setStartFollow(!startFollow)
    }
    const handleAbout = () => {
        alert("This is about")
    }

    React.useEffect(() => {
        console.log("Screen No:==> 440")
    }, [])

    const SectionList = ({ label, value, lastElement }) => (
        <>

            <View style={[styles.rowFlex, { marginVertical: !lastElement ? 15 : 0 }]}>
                <View style={{ width: "60%" }}>
                    <Text style={styles.listLabel}>{label}</Text>
                </View>
                <View style={{ alignItems: 'flex-end', }}>
                    <Text style={styles.listValue}>{value}</Text>
                </View>

            </View>

            {!lastElement && <Divider />}

        </>

    )

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#FFFFFF'} style={'dark'} />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View>
                    <View style={[styles.rowFlex, { position: 'absolute', zIndex: 1, width: '100%' }]}>

                        <View style={{ top: 15, width: '30%', height: 70, alignItems: 'center', justifyContent: 'center', }}>
                            <Image
                                source={require("../assets/wholesale/woman.png")}
                                resizeMode='center'
                                style={{ width: 68, height: 68, borderRadius: 50 }}
                            />
                        </View>

                        <View style={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center', width: '70%' }}>

                            <View style={styles.rowGap}>
                                <Text style={{ color: "#ffffff", fontWeight: '600', fontSize: 16, marginVertical: 10 }}>Douglas Ventures</Text>

                                <MaterialCommunityIcons
                                    name='shield-star'
                                    size={16}
                                    color={'#264653'}
                                />
                            </View>

                            <View style={[styles.rowFlex, { gap: 10 }]}>
                                <Pressable
                                    onPress={handleAbout}
                                    style={styles.profileButton}>
                                    <Text style={styles.profileLabel}>About</Text>
                                </Pressable>
                                <Pressable
                                    onPress={handleFollow}
                                    style={[styles.profileButton, styles.rowGap, { justifyContent: 'center' }]}>
                                    <Text style={styles.profileLabel}>{startFollow ? "Following" : "Follow"}</Text>
                                    {
                                        startFollow &&
                                        <Feather
                                            name={'chevron-down'}
                                            color={"#ffffff"}
                                            size={18}
                                        />
                                    }
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    <Image
                        source={require("../assets/wholesale/woman.png")}
                        resizeMode='cover'
                        style={{ width: '100%', height: 160 }}
                    />

                    <View style={[styles.rowFlex, { position: 'absolute', width: '90%', alignSelf: 'center', bottom: 12, }]}>
                        <View style={styles.activityWrapper}>
                            <Text style={styles.profileValueLabel}>4304</Text>
                            <Text style={[styles.profileLabel, { fontWeight: '400' }]}>Listings</Text>
                        </View>

                        <View style={styles.activityWrapper}>
                            <Text style={styles.profileValueLabel}>280k</Text>
                            <Text style={[styles.profileLabel, { fontWeight: '400' }]}>Shares</Text>
                        </View>

                        <View style={styles.activityWrapper}>
                            <Text style={styles.profileValueLabel}>203k</Text>
                            <Text style={[styles.profileLabel, { fontWeight: '400' }]}>Followers</Text>
                        </View>

                        <View style={styles.activityWrapper}>
                            <Text style={styles.profileValueLabel}>74k</Text>
                            <Text style={[styles.profileLabel, { fontWeight: '400' }]}>Following</Text>
                        </View>

                    </View>

                </View>

                <View style={{ backgroundColor: "#ffffff", height: 15 }}></View>

                <View style={styles.videoPlayerWrapper}>


                    {
                        !status.isPlaying &&
                        <AntDesign
                            name={'playcircleo'}
                            color={"#ffffff"}
                            size={50}
                            style={{ position: 'absolute', zIndex: 1, alignSelf: 'center', top: "40%" }}
                            onPress={() => {
                                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
                            }}
                        />
                    }


                    <Video
                        ref={video}
                        style={{ height: "100%" }}
                        source={{
                            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        }}
                        posterSource={require("../assets/wholesale/backgrounds/lights.png")}
                        useNativeControls={true}
                        usePoster={status.isBuffering ? true : false}
                        resizeMode={ResizeMode.COVER}
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />

                    {
                        !status.isPlaying &&
                        <View style={styles.videoControllersWrapper}>
                            <Pressable style={styles.controllerItem}>
                                <Text style={{ color: "#ffffff" }}>VR</Text>
                            </Pressable>

                            <Pressable style={styles.controllerItem}>
                                <MaterialIcons
                                    name={'360'}
                                    size={20}
                                    color={"#ffffff"}
                                />
                            </Pressable>

                            <Pressable style={styles.controllerItem}>
                                <Octicons
                                    name={'device-camera-video'}
                                    size={20}
                                    color={"#ffffff"}
                                />
                            </Pressable>

                            <Pressable
                                style={[styles.controllerItem, { flexDirection: 'row', alignItems: 'center', gap: 4 }]}
                            >
                                <Ionicons
                                    name={'images-outline'}
                                    size={17}
                                    color={"#ffffff"}
                                />
                                <Text style={{ color: "#ffffff", fontSize: 15 }}>19</Text>
                            </Pressable>
                        </View>
                    }

                </View>

                <LinearGradient
                    colors={['#D9F3F299', '#eeeeee']} >
                    <ManufacturerTopInfo_226 companyData={companyData} />
                </LinearGradient>

                <Divider
                    width={1}
                    color='#00000019'
                    style={{ marginHorizontal: 10 }}
                />

                <View style={styles.section}>
                    <Text style={{ marginBottom: 5 }}>
                        <Text style={styles.blackColor}>Main Categories: </Text>

                        <Text style={styles.greyColor}>Apparel</Text>
                    </Text>

                    <Text>
                        <Text style={styles.blackColor}>Ranked #2 </Text>
                        <Text style={[styles.greyColor, { textDecorationLine: 'underline' }]}>most popular in Men's Sets</Text>
                    </Text>

                </View>

                <Divider
                    width={1}
                    //color='#00000019'
                    style={{ margin: 10 }}
                />



                <View style={styles.section}>
                    <Text >
                        <Text style={[styles.blackColor, { fontSize: 17, }]}>4.1/5: </Text>

                        <Text style={styles.greyColor}>reviews</Text>
                    </Text>

                    <View style={styles.rowGap}>
                        <FontAwesome5
                            name={"less-than-equal"}
                            size={10}
                            color={"#000000"}
                        />
                        <View style={styles.rowGap}>
                            <Text style={styles.blackColor}>9h</Text>
                            <Text style={styles.greyColor}>
                                average response time
                            </Text>
                        </View>
                    </View>

                    <View style={{ marginVertical: 5 }}>
                        <Text>
                            <Text style={styles.blackColor}>95.0% </Text>
                            <Text style={styles.greyColor}>on-time delivery rate</Text>
                        </Text>
                    </View>

                    <View style={{ marginVertical: 5 }}>
                        <Text>
                            <Text style={styles.blackColor}>$410,000+ </Text>
                            <Text style={styles.greyColor}>387 order(s)</Text>
                        </Text>
                    </View>
                </View>

                <Divider
                    width={1}
                    //color='#00000019'
                    style={{ marginHorizontal: 10 }}
                />

                <View style={styles.section}>
                    <View style={[styles.rowGap, { gap: 10 }]}>
                        <MaterialCommunityIcons
                            name={'check-decagram'}
                            size={18}
                            color={"#F67F00"}
                        />
                        <Text style={[styles.greyColor, { fontWeight: "500" }]}>Minor Customization</Text>
                    </View>

                    <View style={[styles.rowGap, { gap: 10, marginTop: 10 }]}>
                        <MaterialCommunityIcons
                            name={'check-decagram'}
                            size={18}
                            color={"#F67F00"}
                        />
                        <Text style={[styles.greyColor, { fontWeight: "500" }]}>Design-based Customization</Text>
                    </View>

                    <Text style={[styles.thickText, { fontWeight: 'bold', textDecorationLine: 'underline', fontSize: 14, marginVertical: 10 }]}>See all verified capabilities</Text>

                </View>

                <Divider
                    width={1}
                    //color='#00000019'
                    style={{ margin: 10 }}
                />

                <LinearGradient
                    colors={['#D5F2F1', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']}
                    style={styles.gradientContainer}
                >
                    <View>
                        <View style={styles.rowGap}>
                            <Text style={{ color: "#F67F00" }}>Verified Profile</Text>
                            <Feather
                                name={'info'}
                                color={"#F67F00"}
                                size={15}
                            />
                        </View>
                        <Text style={{ marginVertical: 5 }}>All the information here has been verified</Text>
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.sectionTitle}>Overview</Text>
                    </View>

                    <View>
                        <SectionList
                            label={"Company registration date"}
                            value={"2018-12-27"}
                        />

                        <SectionList
                            label={"Floor space (m)"}
                            value={"1655"}
                        />

                        <SectionList
                            label={"Annual export revenue (USD)"}
                            value={"35000000"}
                        />

                        <SectionList
                            label={"Accepted language"}
                            value={"English"}
                        />

                        <SectionList
                            label={"Years exporting"}
                            value={"4"}
                        />

                        <SectionList
                            label={"Years in industry"}
                            value={"4"}
                        />

                        <SectionList
                            label={"Production lines"}
                            value={"4"}
                        />

                        <SectionList
                            label={"Total annual output (unit)"}
                            value={"1000000"}
                        />

                        {
                            moreOverview &&

                            <>
                                <SectionList
                                    label={"Product support traceability of raw material"}
                                    value={"Yes"}
                                />

                                <SectionList
                                    label={"OA/AC Inspectors"}
                                    value={"5"}
                                />

                                <SectionList
                                    label={"Product inspection method"}
                                    value={"All products 100%"}
                                />

                                <SectionList
                                    label={"Main markets"}
                                    value={
                                        <View style={{ alignItems: 'flex-end' }}>
                                            <Text style={styles.listValue}>North America (23%)</Text>
                                            <Text style={styles.listValue}>Western Europe (17%)</Text>
                                            <Text style={styles.listValue}>Mid East (16%)</Text>
                                        </View>
                                    }
                                />

                                <SectionList
                                    label={"Main client types"}
                                    value={
                                        <View style={{ alignItems: 'flex-end' }}>
                                            <Text style={styles.listValue}>Retailer</Text>
                                            <Text style={styles.listValue}>Wholesaler</Text>
                                            <Text style={styles.listValue}>Brand business</Text>
                                            <Text style={styles.listValue}>For private use</Text>
                                        </View>
                                    }
                                    lastElement={true}
                                />
                            </>
                        }



                    </View>

                    <Pressable
                        onPress={handleMoreOverview}
                        style={styles.moreLessButton}>
                        <Text style={{ color: "#F67F00" }}>Show {moreOverview ? "less" : "more"}</Text>
                    </Pressable>

                    <View style={{ marginVertical: 6 }}>
                        <Text style={[styles.sectionTitle, { marginBottom: 10 }]}>Services</Text>

                        <View style={[styles.rowGap, { marginVertical: 4 }]}>
                            <Ionicons
                                name={'close'}
                                color={"red"}
                                size={23}
                            />
                            <Text>Customization service for low MOQ orders</Text>
                        </View>

                        <View>
                            <View style={[styles.rowGap, { marginVertical: 4, gap: 8 }]}>
                                <FontAwesome
                                    name={'circle'}
                                    color={"grey"}
                                    size={8}
                                />
                                <Text style={styles.listLabel}>Covering 1 categories</Text>
                            </View>

                            <View style={[styles.rowGap, { marginVertical: 4, gap: 8 }]}>
                                <FontAwesome
                                    name={'circle'}
                                    color={"grey"}
                                    size={8}
                                />
                                <Text style={styles.listLabel}>Including 1 products</Text>
                            </View>

                            {
                                moreServices &&
                                <>
                                    <View style={[styles.rowGap, { marginVertical: 4, gap: 8 }]}>
                                        <FontAwesome
                                            name={'circle'}
                                            color={"grey"}
                                            size={8}
                                        />
                                        <Text style={styles.listLabel}>Including 1 other stuff</Text>
                                    </View>

                                    <View style={[styles.rowGap, { marginVertical: 4, gap: 8 }]}>
                                        <FontAwesome
                                            name={'circle'}
                                            color={"grey"}
                                            size={8}
                                        />
                                        <Text style={styles.listLabel}>And also many other inclusion</Text>
                                    </View>
                                </>
                            }

                            <Text
                                onPress={handleMoreServices}
                                style={[styles.blackColor, { textDecorationLine: 'underline', marginTop: 6, }]}>View {moreServices ? "less" : "more"}</Text>

                        </View>
                    </View>

                </LinearGradient>

                <View style={[styles.section, { backgroundColor: '#ffffff' }]}>
                    <View style={styles.rowFlex}>
                        <Text style={styles.sectionTitle}>Reviews</Text>
                        <Feather
                            name={'chevron-right'}
                            size={18}
                            color={"#000000"}
                        />
                    </View>

                    <View style={[styles.rowGap, { marginTop: 15, gap: 10 }]}>
                        <View>
                            <Text>
                                <Text style={[styles.thickText, { fontSize: 17, color: "#000000" }]}>4.1</Text>
                                <Text style={{ fontSize: 14, color: "#000000" }}>/5</Text>
                            </Text>
                        </View>
                        <View style={{ marginVertical: 6 }}>
                            <Text style={styles.blackColor}>Satisfied</Text>
                            <View style={{ marginVertical: 3 }}></View>
                            <Text style={[styles.listLabel, { textDecorationLine: "underline" }]}>124 reviews</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 8 }}>
                        <View style={{ marginVertical: 5 }}>
                            {Reviews("Supplier service", 4.2)}
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            {Reviews("On-time shipment", 3.7)}
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            {Reviews("Product quality", 4.2)}
                        </View>
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <FlatList
                            scrollEnabled={false}
                            data={feedbacks}
                            renderItem={({ item }) => (
                                <FeedbackItem_404
                                    item={item}
                                />
                            )}
                        />
                    </View>

                </View>

                <View style={[styles.section, { backgroundColor: "#ffffff", marginTop: 6 }]}>
                    <View style={styles.rowFlex}>
                        <Text style={styles.sectionTitle}>All products</Text>
                        <Text style={{ fontWeight: "500", color: "#F67F00" }}>See more</Text>
                    </View>

                    <View>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={categories.slice(5, 8)}
                            renderItem={({ item }) => (
                                <CategoryItem_440
                                    item={item}
                                    activeCategory={activeCategory}
                                    setActiveCategory={setActiveCategory}
                                />
                            )}
                        />
                    </View>

                    <View>
                        <FlatList
                            scrollEnabled={false}
                            data={imagesData}
                            numColumns={3}
                            renderItem={({ item }) => (
                                <CategoryImageItem_440
                                    item={item}
                                    data={imagesData}
                                />
                            )}

                        />
                    </View>

                </View>

            </ScrollView>

            {/* <WholesaleBottomComponent navigation={navigation} /> */}
        </View>
    )
}

export default Screen_440

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eeeeee"
    },
    videoPlayerWrapper: {
        height: 250,
        backgroundColor: "#00000099"
    },
    videoControllersWrapper: {
        //backgroundColor: 'indigo',
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 25,
        gap: 5
    },
    controllerItem: {
        backgroundColor: "#00000049",
        width: 60,
        alignItems: 'center',
        borderRadius: 20,
        padding: 3,
        justifyContent: 'center'
    },
    section: {
        padding: 10
    },
    blackColor: {
        color: "#000000",
        fontWeight: "600",
        fontSize: 15,
        //letterSpacing: 0.3
    },
    greyColor: {
        color: "#343a40",
        fontSize: 15
    },
    rowGap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2
    },
    rowFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    thickText: {
        color: "#343a40",
        fontSize: 15,
        fontWeight: "500"
    },
    gradientContainer: {
        margin: 10,
        borderRadius: 10,
        padding: 10
    },
    listLabel: {
        color: "#495057",
        fontSize: 13.5,
        // width: "80%"
    },
    listValue: {
        color: "#000000",
        fontSize: 13.5,
        fontWeight: '500'
    },
    sectionTitle: {
        fontSize: 17,
        color: "#000000",
        fontWeight: 'bold'
    },
    moreLessButton: {
        marginVertical: 10,
        marginHorizontal: 5,
        padding: 13,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#F67F00",
        backgroundColor: "#ffffff",
        marginTop: 25
    },
    profileButton: {
        borderWidth: 1,
        borderColor: "#ffffff",
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 3,
        width: 110,
        borderRadius: 3
    },
    activityWrapper: {
        alignItems: 'center'
    },
    profileLabel: {
        color: "#ffffff",
        fontSize: 13
    },
    profileValueLabel: {
        color: "#ffffff",
        fontWeight: '600',
        fontSize: 15
    }
})