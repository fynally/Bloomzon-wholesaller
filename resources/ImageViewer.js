import { Image, View, StyleSheet } from "react-native"
import { AntDesign } from "@expo/vector-icons"

export const ImageViewer = (src, func) => {

    return (
        <View style={{}}>

            <AntDesign
                name='closecircleo'
                size={30}
                color={'#ff6501'}
                onPress={() => func(false)}
                style={styles.closeImageView}
            />

            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', height: '100%' }}>
                <Image
                    source={src}
                    resizeMode='contain'
                    style={{ width: 200, height: 200 }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    closeImageView: {
        position: 'absolute',
        right: 15,
        zIndex: 1,
        top: 40
    }
})