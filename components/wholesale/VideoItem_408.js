import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';
import { View, Text, Image, StyleSheet } from 'react-native';

const VideoItem_408 = ({ item, index, data, setVideoData, setShowPlayer, showPlayer }) => {

    // Determine the height based on the column and item index
    const isLeftColumn = index % 4 === 0 || index % 4 === 3;
    const itemHeight = isLeftColumn ? 200 : 250;
    const isLastTwoElements = index >= data.length - 2;

    const handlePlayer = () => {
        setShowPlayer(!showPlayer)
        setVideoData(item)
    }


    return (
        <Pressable
            onPress={handlePlayer}
            style={[
                styles.container,
                { height: itemHeight },
                !isLeftColumn && index >= 2 && { marginTop: -5 },
                index === 2 && { marginTop: -20 },
                isLeftColumn && index >= 2 && { marginTop: 20 },
                index === 5 && { marginTop: 15 },
                index === 6 && { marginTop: -20 },
                !itemHeight && index >= 2 && { marginTop: -8 }
                //isLastTwoElements && { height: itemHeight + 0 }
            ]}>
            <Image source={item.video_cover} style={styles.image} />
            <View style={styles.topPlay}>
                <Ionicons
                    name={'play-outline'}
                    size={15}
                    color={"#ffffff"}
                />

                <Text style={{ color: "#ffffff" }}>00:{item.duration}</Text>

            </View>

            <Text
                numberOfLines={2}
                style={styles.title}>{item.title}
            </Text>

            <View style={[styles.rowFlex, { width: "60%", }]}>
                <Image
                    source={item.uploader_image}
                    style={{ width: 20, height: 20, borderRadius: 25 }}
                    resizeMode='contain'
                />

                <Text
                    numberOfLines={1}
                    style={[styles.title, { fontWeight: '500', width: "90%", fontSize: 13 }]}>{item.uploader_name}</Text>

                <Pressable style={styles.rowFlex}>
                    <MaterialCommunityIcons
                        name={'thumb-up-outline'}
                        size={15}
                        color={"#00000099"}
                    />
                    <Text style={{ fontSize: 11, color: "#00000099" }}>{item.like_count}</Text>
                </Pressable>
            </View>

            {
                isLastTwoElements && <View style={{ backgroundColor: 'red', margin: 200 }}></View>
            }

        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
        marginHorizontal: 5,
        borderRadius: 8,
        //overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '77%',
        borderRadius: 6
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent overlay
        padding: 10,
        justifyContent: 'flex-end',
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    title: {
        color: '#000000',
        fontSize: 12,
        marginVertical: 5

    },

    topPlay: {
        position: 'absolute',
        backgroundColor: '#00000099',
        width: 70,
        alignItems: "center",
        gap: 5,
        flexDirection: "row",
        zIndex: 1,
        borderRadius: 15,
        top: 10,
        right: 10,
        justifyContent: 'center',
        padding: 3
    },
    rowFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    }
});

export default VideoItem_408;
