import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const NewTrendingProductItem = ({ item }) => {

    const handleClick = () => {
        const category = JSON.stringify(item, 0, 2)
        alert(category)
    }

    return (
        <Pressable
            onPress={handleClick}
            style={styles.container}
        >
            <View style={styles.innerWrapper}>



                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign
                        name='playcircleo'
                        color={'#ffffff'}
                        size={30}
                        style={{ position: 'absolute', zIndex: 1 }}
                    />
                    <Image
                        source={item.image}
                        resizeMode='cover'
                        style={{ width: 105, height: 105, borderRadius: 5 }}
                    />
                </View>


                <Text style={{ fontWeight: 'bold', color: '#000000', marginVertical: 3, fontSize: 10, width: '95%' }}>{`${item.priceFrom} - ${item.priceTo}`}/Piece</Text>


            </View>

        </Pressable>
    )
}

export default NewTrendingProductItem

const styles = StyleSheet.create({
    container: {
        width: '33.3%'
    },
    innerWrapper: {
        margin: 3,
        //backgroundColor: '#f5f5f5f5'
    }
})