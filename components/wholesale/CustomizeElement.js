import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { updateExtras } from '../../globals/customization/customizationSlice'

const CustomizeElementItem = ({ item, label, activeData, setActiveData }) => {

    const dispatch = useDispatch()

    const handleSelect = () => {

        dispatch(updateExtras({ ...item, label: label }))

        setActiveData(item)
    }

    return (
        <Pressable
            style={styles.container}
            onPress={handleSelect}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '60%' }}>
                <RadioButton
                    value={item.id}
                    color={"#F67F00"}
                    status={item.id === activeData.id ? 'checked' : 'unchecked'}
                    onPress={handleSelect}
                />
                <Text>{item.name}</Text>
            </View>
            <Text>+{item.price}</Text>

        </Pressable>
    )
}

export default CustomizeElementItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})