import { StyleSheet, Text, View, Modal, Pressable, Platform } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import RelatedProductItem from '../components/wholesale/RelatedProductItem';

const Screen_231 = ({ showCartModal, setShowCartModal, relatedProducts, navigation }) => {


    const continueWithOrder = () => {
        //alert('Continue function called');
        setShowCartModal(false);
        navigation.navigate("Screen_232")
    };

    const viewCart = () => {
        alert('View cart function called');
        setShowCartModal(false);
    };

    React.useEffect(() => {
        console.log("Screen No:==> 231")
    }, [])

    return (
        <Modal
            visible={showCartModal}
            animationType="slide"
            transparent={true}
            statusBarTranslucent={true}
            onRequestClose={() => setShowCartModal(false)}>
            <View style={{ flex: 1, backgroundColor: '#00000099' }}>
                <Pressable
                    onPress={() => setShowCartModal(false)}
                    style={styles.modalBackground}></Pressable>

                <View style={styles.modalContent}>
                    <View style={styles.header}>
                        <View></View>
                        <Text style={{ fontSize: 15, color: '#F67F00' }}>
                            Added to cart!
                        </Text>
                        <Ionicons
                            onPress={() => setShowCartModal(false)}
                            name="close-outline"
                            size={28}
                            color={'#000000'}
                        />
                    </View>

                    <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: '#000000',
                                fontSize: 13,
                                letterSpacing: 0.5,
                            }}>
                            Related products from this supplier
                        </Text>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ padding: 8 }}>
                            <FlatList
                                numColumns={3}
                                scrollEnabled={false}
                                data={relatedProducts}
                                renderItem={({ item }) => <RelatedProductItem item={item} />}
                            />
                        </View>
                    </ScrollView>

                    <View style={styles.bottomContent}>
                        <View
                            style={[
                                styles.buttonHolder,
                                Platform.OS === 'ios' && { marginBottom: 10 },
                            ]}>
                            <Pressable
                                onPress={continueWithOrder}
                                style={styles.cartButton}>
                                <Text style={{ color: '#ff6501' }}>continue</Text>
                            </Pressable>
                            <Pressable
                                onPress={viewCart}
                                style={[styles.cartButton, { backgroundColor: '#ff6501' }]}>
                                <Text style={{ color: '#ffffff' }}>View cart</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default Screen_231

const styles = StyleSheet.create({
    modalBackground: {
        position: 'absolute',
        width: '100%',
        height: '40%',
        top: 0,
    },
    modalContent: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        height: '60%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    buttonHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomContent: {
        padding: 10,
        bottom: 0,
    },
    cartButton: {
        width: '48%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#F67F00',
        borderWidth: 1,
    },
})