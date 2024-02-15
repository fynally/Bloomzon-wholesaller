import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    Image,
    Pressable,
} from 'react-native';
import React from 'react';
import {
    AntDesign,
    Feather,
    MaterialCommunityIcons,
    MaterialIcons,
} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Divider } from '@rneui/themed';
import { TextInput } from 'react-native';
import { useState } from 'react';
import Screen_90 from './90';
import Screen_164 from './164';
import Screen_124 from './124';
import { CATEGORIES, COMPANIES } from '../data/data';
import Screen_73 from './73';
//import Video from 'react-native-video';
import { Video, ResizeMode } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';

const Screen_57 = ({ navigation, route }) => {
    const { liveData } = route.params ?? {}
    const [showChatPanel, setShowChatPanel] = useState(true);
    const [showContactUs, setShowContactUs] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [showCategory, setShowCategory] = React.useState(false);
    const [company, setCompany] = useState(COMPANIES[0]);
    const [videoStatus, setVideoStatus] = React.useState({});

    const videoRef = React.useRef(null);

    const data = [
        'Brand Concept',
        'Discount information',
        'Exclusive service',
        'Sample service',
        'View more',
    ];

    const startOrder = () => {
        navigation.navigate('Screen_197');
    };

    const handleAllPackage = () => {
        navigation.navigate('Screen_258', { companyData: company });
    };

    const followSeller = () => {
        alert(`Follow ${company.name}`);
    };

    const visitStore = () => {
        alert(`Visiting ${company.name} store`);
    };

    const handleCategory = () => {
        setShowCategory(true);
    };

    React.useEffect(() => {
        setTimeout(() => {
            setShowCard(true);
        }, 1000);

        console.log('Screen No:==> 57');
    }, []);

    React.useEffect(() => {

    }, []);

    useFocusEffect(
        React.useCallback(() => {
            // Page is focused

            if (videoRef.current) {
                videoRef.current.playAsync();
            }

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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
                style={'light'}
                backgroundColor={'#000000'}
                translucent={true}
            />

            {/* ///////////////////// */}

            <Video
                ref={videoRef}
                style={{ height: "100%" }}
                source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                posterSource={require("../assets/wholesale/backgrounds/lights.png")}
                useNativeControls={liveData.isOnline ? false : true}
                usePoster={true}
                resizeMode={ResizeMode.COVER}
                //isLooping
                onPlaybackStatusUpdate={status => setVideoStatus(() => status)}

            />

            {/* ///////////////////// */}




            <View
                style={[styles.container, { zIndex: 1, position: 'absolute', width: '100%', height: "100%", pointerEvents: 'box-none' }]}>


                <View style={{}}>
                    <View style={{ alignItems: 'flex-end', padding: 15 }}>
                        <AntDesign
                            name={'close'}
                            color={'#ffffff'}
                            size={25}
                            onPress={() => navigation.goBack()}
                        />
                    </View>

                    <View style={styles.topSection}>
                        <View style={styles.companyFollowSection}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 5,
                                    width: '70%',
                                }}>
                                <View
                                    style={{
                                        backgroundColor: '#ffffff',
                                        width: 40,
                                        height: 40,
                                        borderRadius: 50,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <Image
                                        source={company.logo}
                                        style={{ width: 25, height: 25, borderRadius: 30 }}
                                    />
                                </View>

                                <Text
                                    numberOfLines={2}
                                    style={{
                                        color: '#ffffff',
                                        fontSize: 13.5,
                                        width: '55%',
                                        lineHeight: 15,
                                    }}>
                                    {company.name}
                                </Text>
                            </View>
                            <Pressable onPress={followSeller} style={styles.followButton}>
                                <Text style={{ color: '#ffffff', fontSize: 14 }}>Follow</Text>
                            </Pressable>
                        </View>

                        <MaterialIcons name={'open-in-new'} size={20} color={'#ffffff'} />

                        <Pressable onPress={visitStore} style={styles.goToStoreButton}>
                            <Text style={{ fontSize: 13, color: '#ffffff' }}>
                                Visit Store
                            </Text>
                        </Pressable>
                    </View>

                    <View style={{ padding: 15 }}>
                        <Pressable
                            onPress={() => setShowCard(true)}
                            style={styles.q_and_a_live}>
                            <Text style={{ fontSize: 13.5, color: '#ffffff' }}>Q&A LIVE</Text>
                        </Pressable>
                    </View>
                </View>

                {/* {  !videoStatus.isPlaying &&} */}

                <View style={styles.bottomContents}>
                    {showChatPanel && !showCard && (
                        <>
                            <View style={[styles.chatBubble, { backgroundColor: '#F68001' }]}>
                                <Text style={styles.chatText}>
                                    Streamer replied to k**(Cl). I already sent you please check.
                                    Thankd
                                </Text>
                            </View>

                            <View style={styles.chatBubble}>
                                <Text style={styles.chatText}>
                                    Streamer replied to k**(Cl). I already sent you please check.
                                    Thanks
                                </Text>
                            </View>

                            <View style={styles.chatBubble}>
                                <Text style={styles.chatText}>
                                    Streamer replied to k**(Cl). I already sent you please check.
                                    Thanks
                                </Text>
                            </View>

                            <View style={styles.chatBubble}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        gap: 8,
                                    }}>
                                    <Image
                                        source={require('../assets/wholesale/customer_care.png')}
                                        resizeMode={'contain'}
                                        style={{ width: 25, height: 25, borderRadius: 50 }}
                                    />

                                    <View style={{ width: '75%' }}>
                                        <Text style={styles.chatText}>
                                            Hello, are you interested in the following service
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.quickServicesContainer}>
                                    {data.map((item) => (
                                        <Pressable
                                            onPress={() => alert(item)}
                                            key={item}
                                            style={styles.serviceItem}>
                                            <Text style={styles.serviceItemLabel}>{item}</Text>
                                        </Pressable>
                                    ))}
                                </View>
                            </View>
                        </>
                    )}

                    <Pressable
                        onPress={() => setShowChatPanel(!showChatPanel)}
                        style={styles.dropDownButton}>
                        <Feather
                            name={showChatPanel ? 'chevron-down' : 'chevron-up'}
                            color={'#ffffff'}
                            size={22}
                        />
                    </Pressable>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 10,
                            marginTop: 15,
                        }}>
                        <TextInput
                            placeholder={'Text here...'}
                            placeholderTextColor={'#ffffff'}
                            style={styles.chatInputBox}
                        />

                        <Pressable
                            onPress={() => alert('like')}
                            style={[
                                styles.dropDownButton,
                                { marginTop: 0, backgroundColor: '#747780' },
                            ]}>
                            <MaterialCommunityIcons
                                name={'thumb-up'}
                                color={'#ffffff'}
                                size={20}
                            />
                        </Pressable>
                    </View>
                </View>





                <View style={styles.sideMenu}>
                    <Pressable onPress={startOrder} style={styles.menuItem}>
                        <MaterialCommunityIcons name={'cube'} color={'#ffffff'} size={34} />
                        <Text style={styles.sideMenuLabel}>Start Order</Text>
                    </Pressable>

                    <Pressable onPress={handleAllPackage} style={styles.menuItem}>
                        <MaterialCommunityIcons
                            name={'archive'}
                            color={'#ffffff'}
                            size={32}
                        />
                        <Text style={styles.sideMenuLabel}>All Products</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => setShowContactUs(true)}
                        style={styles.menuItem}>
                        <AntDesign name={'customerservice'} color={'#ffffff'} size={32} />
                        <Text style={styles.sideMenuLabel}>Contact us</Text>
                    </Pressable>

                    <Pressable onPress={handleCategory} style={styles.menuItem}>
                        <AntDesign name={'appstore1'} color={'#ffffff'} size={32} />
                        <Text style={styles.sideMenuLabel}>Category</Text>
                    </Pressable>

                    <Pressable onPress={() => setShowMore(true)} style={styles.menuItem}>
                        <Feather
                            name={'more-horizontal'}
                            color={'#ffffff'}
                            size={32}
                            style={{ marginBottom: -12 }}
                        />
                        <Text style={styles.sideMenuLabel}>more</Text>
                    </Pressable>
                </View>


            </View>

            <Screen_90
                setShowContactUs={setShowContactUs}
                showContactUs={showContactUs}
                navigation={navigation}
            />

            <Screen_164
                setShowCard={setShowCard}
                showCard={showCard}
                navigation={navigation}
                businessCard={company.business_card}
            />

            <Screen_73
                categories={CATEGORIES}
                setShowCategory={setShowCategory}
                showCategory={showCategory}
            />

            <Screen_124
                setShowMore={setShowMore}
                showMore={showMore}
                navigation={navigation}
            />
        </SafeAreaView>
    );
};

export default Screen_57;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "#525667",
        paddingTop: 30,
    },
    followButton: {
        backgroundColor: '#F67F00',
        padding: 5,
        width: 68,
        alignItems: 'center',
        borderRadius: 20,
        right: 10,
    },
    goToStoreButton: {
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        padding: 5,
        width: 75,
        borderColor: '#ffffff',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    companyFollowSection: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
        backgroundColor: '#8E8F9869',
        width: '66%',
        borderRadius: 25,
    },
    q_and_a_live: {
        backgroundColor: '#8E8F9869',
        width: 80,
        alignItems: 'center',
        borderRadius: 35,
        padding: 5,
    },
    bottomContents: {
        position: 'absolute',
        width: '75%',
        bottom: '1%',
        padding: 10,
        //backgroundColor: "red"
    },
    sideMenu: {
        position: 'absolute',
        right: 5,
        bottom: '1%',
        width: 55,
    },
    menuItem: {
        alignItems: 'center',
        marginVertical: 13,
    },
    sideMenuLabel: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 13.5,
        marginTop: 4,
    },
    chatBubble: {
        backgroundColor: '#8E8F9899',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginVertical: 2,
    },
    chatText: {
        fontSize: 14,
        color: '#ffffff',
    },

    quickServicesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        marginTop: 10,
    },
    serviceItem: {
        //width: '48%',
        marginBottom: 4,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 6,
        paddingVertical: 3,
    },
    serviceItemLabel: {
        fontSize: 12,
        color: '#ffffff',
    },
    dropDownButton: {
        width: 35,
        height: 35,
        borderRadius: 30,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        backgroundColor: '#8E8F9869',
    },
    chatInputBox: {
        backgroundColor: '#747780',
        paddingHorizontal: 10,
        width: '80%',
        borderRadius: 25,
        height: 37,
    },
});
