import { StyleSheet, Text, View, Pressable, Image, FlatList } from 'react-native'
import React from 'react'
import { isLastElement } from '../../helper/Helper'
import SubCategoryItem_268 from './SubCategoryItem_268'

const CategoryItem_268 = ({ item, navigation, data }) => {

    //const lastElement = isLastElement(data, item)
    //onsole.log("category==>", item.menu)
    const handleClick = () => {
        console.log("category==>", item)
    }

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={true}
                data={item.menu}
                renderItem={({ item }) => (
                    <SubCategoryItem_268
                        data={item.menu}
                        item={item}
                        navigation={navigation}
                    />
                )}
            />
        </View>
    )
}

export default CategoryItem_268

const styles = StyleSheet.create({
    container: {
        width: 100,
        alignItems: 'center'
    },
    imageContainer: {
        backgroundColor: "#eeeeee",
        width: 90,
        height: 90,
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