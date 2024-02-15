import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { isLastElement } from '../../helper/Helper'

const SubCategoryItem_268 = ({ item, navigation, data }) => {

    //const lastElement = isLastElement(data, item)

    const handleClick = () => {
        console.log("category==>", item)
    }

    return (
        <Pressable
            onPress={handleClick}
            style={styles.container}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={item.categoryIcon}
                    resizeMode={'contain'}
                    style={{ width: 30, height: 30 }}
                />
            </View>
            <Text style={styles.label}>{item.title}</Text>
        </Pressable>
    )
}

export default SubCategoryItem_268

const styles = StyleSheet.create({
    container: {
        width: 100,
        alignItems: 'center',
        padding: 5
    },
    imageContainer: {
        backgroundColor: "#eeeeee",
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8
    },
    label: {
        fontSize: 13,
        textAlign: 'center'
    }
})