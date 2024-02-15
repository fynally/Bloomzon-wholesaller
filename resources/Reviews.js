import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Reviews = (title, rating) => {
    return (

        <View style={styles.container}>
            <Text style={{ color: "#343a40", fontSize: 14 }}>{title}</Text>

            <View style={styles.progressWrapper}>
                <View style={styles.progressBackground}>
                    <View style={[styles.progress, { width: `${(rating / 5) * 100}%` }]}></View>
                </View>

                <Text style={{ fontSize: 13.5, color: "#000000" }}>{rating.toFixed(1)}</Text>
            </View>
        </View>
    )
}

export default Reviews

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    progressWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    progressBackground: {
        backgroundColor: "#FEECD9",
        height: 10,
        borderRadius: 15,
        width: 120
    },
    progress: {
        backgroundColor: "#F67F00",
        height: '100%',
        borderRadius: 15
    }
})