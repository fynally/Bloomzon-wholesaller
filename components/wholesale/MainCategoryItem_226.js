import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MainCategoryItem_226 = ({ item }) => {

    const handleClick = () => {
        const product = JSON.stringify(item, 0, 2)
        alert(product)
    }

    return (
        <Pressable
            onPress={handleClick}
            style={styles.container}>

            <View style={styles.innerContent}>
                <ImageBackground
                    source={item.image}
                    style={styles.imageBackground}>
                    <View style={{ backgroundColor: '#00000079', position: 'absolute', width: '100%', bottom: 0, alignItems: 'center', paddingVertical: 3 }}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                </ImageBackground>

            </View>

        </Pressable>
    )
}

export default MainCategoryItem_226

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    innerContent: {
        backgroundColor: 'yellow',
        margin: 3,
        alignItems: 'center',
        flex: 1,
        height: 120,
        borderRadius: 5,
        //justifyContent: 'center'
    },
    label: {
        backgroundColor: '#00000099',
        paddingVertical: 4,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center'
    },


    imageBackground: {
        flex: 1,
        resizeMode: 'contain', // or 'stretch' or 'contain'
        alignItems: 'center',
        width: '100%',
        borderRadius: 20,
    },
    text: {
        color: 'white',
        fontSize: 13,
    },

})