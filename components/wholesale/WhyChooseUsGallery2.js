import { Dimensions, Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WhyChooseUsGallery2 = ({ item }) => {

    const windowWidth = Dimensions.get('window').width;


    const handleClick = () => {
        const product = JSON.stringify(item, 0, 2)
        alert(product)
    }

    return (
        <Pressable onPress={handleClick}>

            <View style={styles.image}>

                <Image
                    source={item.image}
                    resizeMode='contain'
                    style={{ width: windowWidth / 3, height: windowWidth / 3 }}
                />

            </View>

        </Pressable>
    )
}

export default WhyChooseUsGallery2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    image: {

        marginRight: 8,
        borderRadius: 8,
    }
});
