import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { setCompany } from '../../globals/company/companySlice'
import { useDispatch } from 'react-redux'
import { COMPANIES } from '../../data/data'

const TopFactoryItem = ({ item, navigation }) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        const selected = JSON.stringify(item, 0, 2)
        alert(selected)
        //navigation.navigate("Screen_76")

        dispatch(setCompany(COMPANIES[0]))
        navigation.navigate("MainTabsController", { companyData: item, page: 0 })
    }

    return (
        <Pressable onPress={handleClick} style={styles.container}>

            <Image
                source={item.menuIcon}
                resizeMode={'contain'}
                style={{ width: 100, height: 100 }}
            />

            <Text style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold' }}>{item.title}</Text>

            <View style={{ padding: 5, alignSelf: 'center' }}>
                <Text style={{ color: '#000000', textAlign: 'center' }}>{item.category}</Text>
            </View>

        </Pressable>
    )
}

export default TopFactoryItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        margin: 5,
        padding: 10,
        alignItems: 'center',
        borderRadius: 5
    }
})