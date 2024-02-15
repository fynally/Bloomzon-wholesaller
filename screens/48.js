import { StyleSheet, Text, View, Modal, Pressable, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import CustomizeElementItem from '../components/wholesale/CustomizeElement'
import { Divider } from '@rneui/themed'
import { useSelector } from 'react-redux'
import { customizationExtra } from '../globals/customization/customizationSlice'

const Screen_48 = ({ showPrint, setShowPrint, activePrint, setActivePrint }) => {

    const { customizeMenuList } = useSelector(customizationExtra)

    const handleModal = () => {
        setShowPrint(false)
    }

    React.useEffect(() => {
        console.log("Screen No:==> 48")

        console.log("==>", customizeMenuList)
    }, [])


    return (
        <Modal
            animationType={'slide'}
            visible={showPrint}
            transparent={true}
            statusBarTranslucent={true}
            onRequestClose={handleModal}>

            <View style={styles.modalBackground}>
                <Pressable
                    onPress={handleModal}
                    style={{ flex: 1 }} />

                <View style={styles.modalContent}>

                    {/* <View style={styles.topLine} /> */}

                    <View style={{ padding: 10, }}>
                        <Text style={styles.modalTitle}>Printing method</Text>
                    </View>
                    <Divider width={1} />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ padding: 10 }}>
                            <FlatList
                                scrollEnabled={false}
                                data={customizeMenuList.printing.options}
                                renderItem={({ item }) => (
                                    <CustomizeElementItem
                                        item={item}
                                        label={customizeMenuList.printing.label}
                                        activeData={activePrint}
                                        setActiveData={setActivePrint}
                                    />
                                )}
                            />
                        </View>
                    </ScrollView>

                    <Pressable
                        onPress={handleModal}
                        style={styles.confirmButton}>
                        <Text style={{ color: "#ffffff" }}>Confirm</Text>
                    </Pressable>

                </View>
            </View>

        </Modal>
    )
}

export default Screen_48

const styles = StyleSheet.create({
    modalBackground: {
        height: '100%',
        backgroundColor: '#00000099',
    },
    modalContent: {
        //height: '37%',
        backgroundColor: '#ffffff',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: "#000000"
    },
    confirmButton: {
        backgroundColor: "#F67F00",
        padding: 10,
        borderRadius: 6,
        alignItems: 'center',
        margin: 10
    }
})