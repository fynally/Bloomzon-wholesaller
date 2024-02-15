import { StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { isLastElement } from '../../helper/Helper'
import { AntDesign } from '@expo/vector-icons'

const ProductGalleryItem_474 = ({ item, data, selectedImage, setSelectedImage }) => {
    const iseLastElement = isLastElement(data, item)
    const handleClick = () => {
        selectedImage === item
            ? setSelectedImage({})
            : setSelectedImage(item)
    }

    return (
        <Pressable
            onPress={handleClick}
            style={[styles.container, !iseLastElement && { marginRight: 6 }, selectedImage.id === item.id && styles.selectedImage]}
        >
            <Image
                source={item.v_image}
                resizeMode={'contain'}
                style={{ width: 50, height: 50 }}
            />
            {
                selectedImage.id === item.id &&
                <AntDesign
                    name='checksquare'
                    size={13}
                    color={"#F67F00"}
                    style={styles.checked}
                />
            }
        </Pressable>
    )
}

export default ProductGalleryItem_474

const styles = StyleSheet.create({
    container: {
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#eeeeee",
        borderRadius: 3
    },
    selectedImage: {
        borderWidth: 1,
        borderColor: "#F67F00"
    },
    checked: {
        position: 'absolute',
        bottom: 0,
        right: 0
    }
})