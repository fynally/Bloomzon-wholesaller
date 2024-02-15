import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { Octicons, Feather, FontAwesome } from '@expo/vector-icons';
import moment from 'moment';
import { Alert } from 'react-native';


const ChatItem = ({ item, businessCard, navigation }) => {

    const handleCardClick = () => {
        const card = JSON.stringify(businessCard, 0, 2)
        Alert.alert("Business Card", card)
    }


    const formattedDate = moment(item.dateSent).format('ddd');

    const date = moment(item.dateSent);

    // Get the current date
    const currentDate = moment();

    // Calculate the difference in days between the input date and the current date
    const daysDiff = currentDate.diff(date, 'days');

    // Determine if it's yesterday, last week, or a custom relative date
    let relativeDate = '';
    if (daysDiff === 1) {
        relativeDate = 'Yesterday';
    } else if (daysDiff >= 2 && daysDiff <= 7) {
        relativeDate = 'Last week';
    } else {
        // You can add custom logic for other relative dates as needed
        // For example, '2 weeks ago', '3 weeks ago', etc.
        relativeDate = `${Math.floor(daysDiff / 7)} weeks ago`;
    }


    const companyCard = () => (
        <Pressable
            onPress={handleCardClick}
            style={{ backgroundColor: "#ffffff" }}>

            <View style={styles.cardHeadSection}>
                <Text style={{ fontWeight: 'bold', color: "#000000", fontSize: 12 }}>Company</Text>
                <Feather
                    name={'chevron-right'}
                    color={"#000000"}
                    size={20}
                />
            </View>

            <View style={{ backgroundColor: "#F5F5F5", padding: 6, borderRadius: 6 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", }}>

                    <Text style={{ fontWeight: "bold", fontSize: 11, width: "70%" }}>{businessCard.name}</Text>

                    <View>
                        <Image
                            source={businessCard.logo}
                            resizeMode={'contain'}
                            style={{ width: 25, height: 25, }}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginVertical: 5 }}>
                    <Text>
                        <Text style={{ color: "#F67F00" }}>Verified </Text>
                        <Text style={styles.cardLabels}>{businessCard.verified_year} yrs</Text>
                    </Text>
                    <FontAwesome
                        name={'circle'}
                        size={5}
                        color={"#00000099"}
                    />
                    <Text style={styles.cardLabels}>{businessCard.country.iso.toUpperCase()}</Text>
                </View>

                <Text style={styles.cardLabels}>Response rate: {businessCard.response_time}</Text>

                <Text style={styles.cardLabels}>Response rate: {businessCard.response_rate}</Text>

            </View>

        </Pressable>
    )

    return (

        <>
            {
                item.sender === "buyer"
                && <View style={styles.rowView}>
                    <View style={styles.rightChatBubbleHolder}>
                        <View style={styles.rightChat}>
                            <Text style={{ color: '#000000', fontSize: 12 }}>{item.message}</Text>
                        </View>
                        <View style={styles.chatDate}>
                            <Text style={styles.dayTime}>{formattedDate}</Text>
                            <FontAwesome
                                name="circle"
                                size={3}
                                color="#000000"
                            />
                            <Text style={styles.dayTime}>{item.timeStamp}</Text>
                        </View>
                    </View>
                </View>
            }

            {
                item.sender === "seller"
                && <View style={[styles.rowView, { flexDirection: 'row' }]}>
                    <Image
                        source={require("../../assets/wholesale/customer_care.png")}
                        resizeMode={'contain'}
                        style={{ width: 36, height: 36, marginTop: 3 }}
                    />

                    <View style={styles.leftChatBubbleHolder}>
                        <View style={styles.cardChatWrapper}>
                            <View style={styles.leftChat}>
                                <Text style={{ color: '#0D1317', fontSize: 12 }}>{item.message}</Text>
                            </View>

                            {
                                businessCard?.name &&
                                <Pressable style={{ backgroundColor: "#ffffff", padding: 5, marginTop: 20, borderRadius: 6 }}>
                                    {companyCard()}
                                </Pressable>
                            }

                        </View>

                        <View style={[styles.chatDate, { justifyContent: 'flex-end' }]}>
                            <Text style={styles.dayTime}>{formattedDate}</Text>
                            <FontAwesome
                                style={{}}
                                name="circle"
                                size={3}
                                color="#0D1317"
                            />
                            <Text style={styles.dayTime}>{item.timeStamp}</Text>
                        </View>
                    </View>

                </View>
            }

        </>

    );
};

export default ChatItem;

const styles = StyleSheet.create({
    rowView: {
        padding: 15,
    },
    rightChatBubbleHolder: {
        width: '80%',
        alignSelf: 'flex-end'
    },
    leftChatBubbleHolder: {
        width: '80%',
        alignSelf: 'flex-start',
        left: 10
    },
    rightChat: {
        backgroundColor: '#FAD48E',
        padding: 10,
        width: '100%',
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 0,
        alignSelf: 'flex-end'
    },
    chatDate: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 5,
        paddingVertical: 5
    },
    dayTime: {
        color: '#454545',
        fontSize: 11
    },
    leftChat: {
        backgroundColor: '#ffffff',
        padding: 10,
        width: '100%',
        borderTopEndRadius: 10,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        alignSelf: 'flex-start',
        //alignItems: 'center'
    },
    cardChatWrapper: {

        padding: 10,
        width: '100%',
        borderRadius: 8,
        alignSelf: 'flex-start',
        //alignItems: 'center'

    },
    cardHeadSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        padding: 5
    },
    cardLabels: {
        color: "#00000099",
        fontSize: 11,
        marginVertical: 2
    }
});
