import { StyleSheet, Text, View, Modal, Pressable, TextInput, Keyboard } from 'react-native'
import React from 'react'
import SearchBar from '../headers/SearchBar'
import { AntDesign, EvilIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Divider } from '@rneui/themed'

const searchData = [
    {
        id: 1,
        query: "Gucci fashion clothing store"
    },
    {
        id: 2,
        query: "Albertina electronics international"
    },
    {
        id: 3,
        query: "Crystal ultra modern surf"
    },
]

const Screen_419 = ({ showSearch, setShowSearch, navigation }) => {

    const [searchQuery, setSearchQuery] = React.useState('')
    const [showHistory, setShowHistory] = React.useState(false)
    const searchInputRef = React.useRef(null);

    const closeModal = () => {
        //Keyboard.dismiss();
        setSearchQuery('')
        setShowSearch(false)
    }

    const handleTyping = (text) => {
        setSearchQuery(text)
        !showHistory && setShowHistory(true)
    }

    const searchFromHistory = (text) => {
        setSearchQuery(text)
        setShowHistory(false)
    }

    React.useEffect(() => {
        if (showSearch) {
            searchInputRef.current.focus();
            setShowHistory(true)
        }
    }, [showSearch]);

    React.useEffect(() => {
        console.log("Screen No:==> 419")
    }, [])

    return (
        <Modal
            visible={showSearch}
            transparent={true}
            animationType='none'
            statusBarTranslucent={true}
            onRequestClose={closeModal}

        >
            <View style={styles.modalContainer}>

                <Pressable
                    style={{ height: '100%', }}
                    onPress={closeModal} />

                <View style={styles.modalContent}>
                    {/* <SearchBar navigation={navigation} /> */}

                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, gap: 10, }}>

                        <View style={[styles.searchWrapper]}>

                            <View style={[styles.leftSearchItems, { paddingHorizontal: 10, gap: 5, width: '70%', }]}>

                                <Ionicons
                                    name={'search-outline'}
                                    size={22}
                                    color={'#000000'}
                                />
                                <TextInput
                                    ref={searchInputRef}
                                    placeholder='Search...'
                                    value={searchQuery}
                                    style={styles.searchBox}
                                    numberOfLines={1}
                                    onChangeText={handleTyping}
                                    autoFocus={true}
                                />

                            </View>
                            <View style={[styles.leftSearchItems, { width: '28%' }]}>
                                <Pressable
                                    //onPress={scanCode}
                                    style={{ padding: 10, }}>

                                    <MaterialCommunityIcons
                                        name={'line-scan'}
                                        size={22}
                                        color={'#00000099'}
                                    />
                                </Pressable>

                                <Divider orientation='vertical' width={1} />

                                <Pressable
                                    //onPress={takePicture}
                                    style={{ padding: 10, }}>
                                    <EvilIcons
                                        name={'camera'}
                                        size={30}
                                        color={'#00000099'}
                                    />
                                </Pressable>

                            </View>
                        </View>

                    </View>

                    {
                        showHistory && searchData.length &&
                        <View style={styles.searchHistoryWrapper}>

                            {
                                searchData.slice(0, 3).map((search, index) => (
                                    <Pressable
                                        key={index}
                                        onPress={() => searchFromHistory(search.query)}
                                        style={styles.historyContainer}>
                                        <AntDesign
                                            name='clockcircleo'
                                            color={"#00000099"}
                                            size={13}
                                        />
                                        <Text style={styles.history}>{search.query}</Text>
                                    </Pressable>
                                ))
                            }

                        </View>
                    }


                </View>
            </View>
        </Modal>
    )
}

export default Screen_419

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "#00000099",
        flex: 1
    },
    modalContent: {
        // backgroundColor: "#ffffff",
        //padding: 10,
        position: "absolute",
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        top: 50,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        //height: "70%"
    },
    searchWrapper: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%"
    },
    searchBox: {
        width: '95%',
        justifyContent: 'center',
        height: 40
    },
    leftSearchItems: {
        flexDirection: 'row',
        alignItems: 'center',
        // gap: 10
    },
    searchHistoryWrapper: {
        paddingHorizontal: 12,
        backgroundColor: "#ffffff",
        marginTop: 7,
        width: '93%',
        marginHorizontal: 20,
        alignSelf: "center",
        borderRadius: 2.5,
    },
    historyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginVertical: 10
    },
    history: {
        fontSize: 13
    }
})