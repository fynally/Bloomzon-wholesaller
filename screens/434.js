import { StyleSheet, Text, View, Modal, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { isLastElement } from '../helper/Helper'
import { Divider } from '@rneui/themed'

const Screen_434 = ({ showSpecs, setShowSpecs, specsData }) => {

    const handleModal = () => {
        setShowSpecs(false)
    }

    React.useEffect(() => {
        console.log("Screen No:==> 434")
    }, [])

    const ListSpecs = ({ label, value, isLast }) => (

        <>
            <View style={styles.specListsWrapper}>
                <View style={{ width: '35%' }}>
                    <Text style={styles.specLabel}>{label}</Text>
                </View>
                <View style={{ width: '60%' }}>
                    <Text style={styles.specValue}>{value}</Text>
                </View>
            </View>
            {!isLast && <Divider />}
        </>
    )

    return (
        <Modal
            animationType={'slide'}
            visible={showSpecs}
            transparent={true}
            statusBarTranslucent={true}
            onRequestClose={handleModal}>

            <View style={styles.modalBackground}>
                <Pressable
                    onPress={handleModal}
                    style={{ flex: 1 }} />

                <View style={styles.modalContent}>

                    {/* <View style={styles.topLine} /> */}

                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between' }}>

                        <View style={{ alignItems: 'center', }}>
                            <Text style={{ color: "#000000", fontWeight: 'bold', fontSize: 15 }}>Product spacifications</Text>
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

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <ListSpecs
                            label={"Department Name"}
                            value={specsData.product_department}
                        />

                        <ListSpecs
                            label={"Pant Length"}
                            value={specsData.product_length}
                        />

                        <ListSpecs
                            label={"Fit"}
                            value={specsData.product_fit}
                        />

                        <ListSpecs
                            label={"Fabric Type"}
                            value={specsData.fabric_type}
                        />

                        <ListSpecs
                            label={"Closure Type"}
                            value={specsData.closure_type}
                        />

                        <ListSpecs
                            label={"Gender"}
                            value={specsData.gender}
                        />

                        <ListSpecs
                            label={"Material"}
                            value={specsData.material}
                        />

                        <ListSpecs
                            label={"Brand Name"}
                            value={specsData.brand_name}
                        />

                        <ListSpecs
                            label={"Origin"}
                            value={specsData.origin}
                        />

                        <ListSpecs
                            label={"Item Type"}
                            value={specsData.product_type}
                        />

                        <ListSpecs
                            label={"Sport Type"}
                            value={specsData.sports_type}
                            isLast={true}
                        />


                    </ScrollView>
                </View>
            </View>

        </Modal>
    )
}

export default Screen_434

const styles = StyleSheet.create({
    modalBackground: {
        height: '100%',
        backgroundColor: '#00000099',
        //position: 'absolute',
        //width: '100%',
    },
    modalContent: {
        height: '70%',
        backgroundColor: '#ffffff',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

    },
    specListsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    specLabel: {
        color: "#00000099",
        fontSize: 13
    },
    specValue: {
        color: "#000000",
        fontSize: 13
    },
    topLine: {
        width: 40,
        backgroundColor: 'grey',
        height: 4,
        alignSelf: 'center',
        borderRadius: 30,
        marginTop: 10,

    },

})