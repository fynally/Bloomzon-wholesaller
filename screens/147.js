import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed'
import { AntDesign } from '@expo/vector-icons'
import AllProductItem_147 from '../components/wholesale/AllProductItem_147'

const Screen_147 = ({ showProducts, setShowProducts, products }) => {

    const handleModal = () => {
        setShowProducts(false)
    }

    React.useEffect(() => {
        console.log("Screen No:==> 147")
    }, [])

    return (
        <Modal
            animationType={'slide'}
            visible={showProducts}
            transparent={true}
            statusBarTranslucent={true}
            onRequestClose={handleModal}>

            <View style={styles.modalBackground}>
                <Pressable
                    onPress={handleModal}
                    style={{ flex: 1 }} />

                <View style={styles.modalContent}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between' }}>
                        <View style={{ backgroundColor: "yellow", width: "25%" }} />
                        <View style={{ alignItems: 'center', }}>
                            <Text style={{ color: "#F67F00", fontWeight: 'bold', fontSize: 15 }}>Products</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end', width: "25%" }}>
                            <AntDesign
                                name={'close'}
                                color={'#000000'}
                                size={22}
                                onPress={handleModal}
                            />
                        </View>
                    </View>

                    <Divider style={{ marginBottom: 10 }} />

                    <View style={{ flex: 1, padding: 10 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={products}
                            renderItem={({ item }) => (
                                <AllProductItem_147
                                    item={item}
                                    setShowProducts={setShowProducts}
                                    products={products}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>

        </Modal>
    )
}

export default Screen_147

const styles = StyleSheet.create({
    modalBackground: {
        height: '100%',
        backgroundColor: '#00000099',
        //position: 'absolute',
        //width: '100%',
    },
    modalContent: {
        height: '65%',
        backgroundColor: '#ffffff',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

    },
})