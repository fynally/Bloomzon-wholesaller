import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WhyChooseUsGallery1 = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContent}>
                <ImageBackground
                    source={item.image}
                    style={styles.imageBackground}>
                    <View style={{ backgroundColor: '#00000059', height: '100%', alignItems: 'center', justifyContent: 'center', paddingVertical: 3, alignSelf: 'center', paddingHorizontal: 26 }}>

                        <Text style={[styles.text, { fontWeight: 'bold', textAlign: 'center' }]}>{item.activityDuration}</Text>
                        <Text style={[styles.text, { fontSize: 10, textAlign: 'center' }]}>{item.activityDesc}</Text>
                    </View>
                </ImageBackground>

            </View>
        </View>
    )
}

export default WhyChooseUsGallery1

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    innerContent: {
        backgroundColor: 'yellow',
        //margin: 0.5,
        alignItems: 'center',
        flex: 1,
        height: 120,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#ffffff'
        //justifyContent: 'center'
    },

    imageBackground: {
        flex: 1,
        resizeMode: 'contain', // or 'stretch' or 'contain'
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 13,

    },
})