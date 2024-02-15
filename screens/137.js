import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import HeaderFile2 from '../headers/HeaderFile2'
import { Divider } from '@rneui/themed'
import { Feather, Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native'
import { ScrollView } from 'react-native'
import Screen_151 from './151'

const Screen_137 = ({ navigation }) => {

    const [showViolation, setShowViolation] = React.useState(false)
    const [showUpload, setShowUpload] = React.useState(false)

    const handleModal = () => {
        setShowViolation(true)
    }

    const handleSelectUpload = (channel) => {
        setShowUpload(false)
        alert(channel)
    }

    const handleSubmit = () => {
        alert("Submit function called")
    }

    React.useEffect(() => {
        console.log("Screen No:==> 137")
    }, [])

    const uploadMenu = () => (
        <View style={styles.uploadMenuWrapper}>
            <Pressable
                onPress={() => handleSelectUpload("Photo Library")}
                style={styles.uploadMenuItem}>
                <Text style={{ fontSize: 13 }}>Photo Library</Text>
                <Ionicons
                    name={'images'}
                    color={'#000000'}
                    size={20}
                />
            </Pressable>

            <Divider />

            <Pressable
                onPress={() => handleSelectUpload("Take Photo")}
                style={styles.uploadMenuItem}>
                <Text style={{ fontSize: 13 }}>Take Photo</Text>
                <Ionicons
                    name={'camera-outline'}
                    color={'#000000'}
                    size={20}
                />
            </Pressable>

            <Divider />

            <Pressable
                onPress={() => handleSelectUpload("Choose File")}
                style={styles.uploadMenuItem}>
                <Text style={{ fontSize: 13 }}>Choose File</Text>
                <Ionicons
                    name={'folder-outline'}
                    color={'#000000'}
                    size={20}
                />
            </Pressable>
        </View>
    )


    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 30, }}>
            <View style={styles.container}>
                <ScrollView
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}>
                    <StatusBar
                        style={'dark'}
                        backgroundColor={'#ffffff'}
                    />
                    <HeaderFile2
                        navigation={navigation}
                        title={"Bloomzon Video Report"}
                    />

                    <View style={{ padding: 15 }}>
                        <Text style={{ color: "#00000099" }}>Content ID</Text>
                        <Text style={{ color: "#000000", fontWeight: 'bold' }}>1389214322</Text>
                    </View>

                    <Divider />

                    <Pressable
                        onPress={handleModal}
                        style={styles.rowElement}>
                        <Text style={{ color: "#00000099", fontSize: 13 }}>Please select the type of violation</Text>
                        <Feather
                            name={'chevron-right'}
                            color={"#00000099"}
                            size={22}
                        />
                    </Pressable>

                    <Divider />

                    <Pressable
                        onPress={() => setShowUpload(!showUpload)}
                        style={styles.rowElement}>
                        <Text style={{ color: "#00000099", fontSize: 13 }}>Please upload your evidence</Text>
                        <Feather
                            name={'camera'}
                            color={"#00000099"}
                            size={22}
                        />
                    </Pressable>

                    <Divider />

                    <View style={{ padding: 15 }}>
                        <Text style={{ color: "#00000099", fontSize: 13 }}>Cause description</Text>

                        <TextInput
                            placeholder={'Please input'}
                            style={{ paddingVertical: 1 }}
                            multiline
                        />

                    </View>

                </ScrollView>

                <Pressable
                    onPress={handleSubmit}
                    style={styles.submitButton}>
                    <Text style={{ color: '#ffffff' }}>Submit</Text>
                </Pressable>

            </View>

            <Screen_151
                navigation={navigation}
                setShowViolation={setShowViolation}
                showViolation={showViolation}
            />
            {showUpload && uploadMenu()}

        </SafeAreaView>
    )
}

export default Screen_137

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    rowElement: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    submitButton: {
        padding: 12,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: "#F67F00",
        margin: 15
    },
    uploadMenuWrapper: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        top: '34%',
        right: '3%',
        width: 160,
        borderRadius: 4,
        elevation: 5
    },
    uploadMenuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 6
    }
})