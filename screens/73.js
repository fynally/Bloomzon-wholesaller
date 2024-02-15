import { StyleSheet, Text, View, Modal, Pressable, FlatList } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Divider } from '@rneui/themed'
import CategoryWithRadioItem from '../components/wholesale/CategoryWithRadioItem'
import { CATEGORIES } from '../data/data'

const Screen_73 = ({ showCategory, setShowCategory }) => {

    const [activeCategory, setActiveCategory] = React.useState(1);

    const handleModal = () => {
        setShowCategory(false)
    }

    React.useEffect(() => {
        console.log("Screen No:==> 73")
    }, [])


    return (
        <Modal
            animationType={'slide'}
            visible={showCategory}
            transparent={true}
            statusBarTranslucent={true}
            onRequestClose={handleModal}>

            <View style={styles.modalBackground}>
                <Pressable
                    onPress={handleModal}
                    style={{ flex: 1 }} />

                <View style={styles.modalContent}>
                    <View style={{ alignItems: 'flex-end', padding: 10 }}>
                        <AntDesign
                            name={'close'}
                            color={'#000000'}
                            size={28}
                            onPress={handleModal}
                        />
                    </View>

                    <Divider style={{ marginBottom: 10 }} />

                    <View style={{ marginBottom: 80 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={CATEGORIES}
                            renderItem={({ item }) => (
                                <CategoryWithRadioItem
                                    item={item}
                                    setShowCategory={setShowCategory}
                                    activeCategory={activeCategory}
                                    setActiveCategory={setActiveCategory}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>

        </Modal>
    )
}

export default Screen_73

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