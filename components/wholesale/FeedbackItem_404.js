import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'

const FeedbackItem_404 = ({ item }) => {
    return (
        <Pressable style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Image
                    source={item.image}
                    resizeMode={'contain'}
                    style={{ width: 20, height: 20, borderRadius: 30 }}
                />
                <Text style={{ fontSize: 12, fontWeight: '600' }}>{item.name}</Text>
                <Image
                    source={item.countryFlag}
                    resizeMode={'contain'}
                    style={{ width: 22, height: 12, }}
                />
            </View>
            <View>

                <Text style={{ fontSize: 13, marginLeft: 25, color: "#00000099" }}>{item.reviewDate}</Text>

                <View style={{ marginVertical: 5 }}>
                    <Text style={{ fontWeight: "600", fontSize: 14.5, color: "#000000" }}>{item.review}</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.gallery}>
                    {item.gallery.map((item) => (
                        <Pressable
                            key={item.id}
                            style={{ marginRight: 8 }}
                        >
                            <Image
                                resizeMode={'cover'}
                                source={item.image}
                                style={{ width: 70, height: 70 }}
                            />
                        </Pressable>
                    ))}
                </ScrollView>
            </View>
        </Pressable>
    )
}

export default FeedbackItem_404

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    }
})