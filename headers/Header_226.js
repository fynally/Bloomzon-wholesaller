import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { Divider } from '@rneui/themed'

const Header_226 = ({ navigation, tabIndex, setTabIndex }) => {

    const handleTabSwitch = (id) => {
        setTabIndex(id)
    }

    return (
        <View style={styles.container}>
            <Feather
                name='arrow-left'
                color={'#000000'}
                size={25}
                onPress={() => navigation.goBack()}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '65%' }}>
                <Text
                    onPress={() => handleTabSwitch(0)}
                    style={[styles.menuLabel, tabIndex === 0 && styles.activeTab]}>Home</Text>

                <Text
                    onPress={() => handleTabSwitch(1)}
                    style={[styles.menuLabel, tabIndex === 1 && styles.activeTab]}>Products</Text>

                <Text
                    onPress={() => handleTabSwitch(2)}
                    style={[styles.menuLabel, tabIndex === 2 && styles.activeTab]}>Profile</Text>

                <Text
                    onPress={() => handleTabSwitch(3)}
                    style={[styles.menuLabel, tabIndex === 3 && styles.activeTab]}>Videos</Text>
            </View>
            <Divider orientation='vertical' />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '20%' }}>
                <Feather
                    name='search'
                    color={'#000000'}
                    size={22}
                />
                <MaterialIcons
                    name='open-in-new'
                    color={'#000000'}
                    size={22}
                />
            </View>
        </View>
    )
}

export default Header_226

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingVertical: 15,
        marginTop: 10,
    },
    menuLabel: {
        color: '#00000099',
        paddingBottom: 5
    },
    activeTab: {
        borderBottomWidth: 2,
        borderColor: '#00000099',
        fontWeight: 'bold'

    }
})