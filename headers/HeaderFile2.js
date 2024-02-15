import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, Feather } from '@expo/vector-icons'
import { Divider } from '@rneui/themed'

const HeaderFile2 = ({ navigation, title, hasModal, hasSearch, hasLine }) => {

    const canGoBack = navigation.canGoBack()
    return (
        <>

            <View style={styles.container}>

                <View style={{}}>
                    {
                        canGoBack === true &&
                        <Feather
                            onPress={() => hasModal ? hasModal(false) : navigation.goBack()}
                            name='arrow-left'
                            size={24}
                            color={'#000000'}
                        />
                    }

                </View>

                <Text style={styles.title}>{title}</Text>

                <View>
                    {
                        hasSearch &&
                        <Feather
                            onPress={() => alert("Search")}
                            name={'search'}
                            color={"#000000"}
                            size={22}
                        />
                    }
                </View>

            </View>

            {
                !hasLine && <Divider />
            }
        </>
    )
}

export default HeaderFile2

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
    },
    title: {
        color: '#000000',
        fontSize: 15
    },
    // counter: {
    //     position: 'absolute',
    //     right: -5,
    //     zIndex: 2,
    //     top: -8,
    //     padding: 2
    // }
})