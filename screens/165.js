import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Pressable, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HeaderFile2 from '../headers/HeaderFile2';
import { Ionicons } from '@expo/vector-icons';
import { Divider } from '@rneui/themed';
import { COUNTRIES } from '../data/data';
import CountriesItem_165 from '../components/wholesale/CountriesItem_165';
import { Rect } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { shippingData } from '../globals/shipping/shippingSlice';

const Screen_165 = ({ navigation, route }) => {
    const { shipping } = useSelector(shippingData)
    const { side } = route.params
    const [selectedAlphabet, setSelectedAlphabet] = React.useState(null);
    const flatListRef = React.useRef(null);
    const alphabetIndex = Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));

    const scrollToSection = (letter) => {
        const sectionIndex = sortedSegmentedData.findIndex((section) => section.letter === letter);
        if (sectionIndex !== -1 && flatListRef.current) {
            flatListRef.current.scrollToIndex({ index: sectionIndex });
        }
    };

    const groupAndSortCountries = (countries) => {
        // Sort countries by name
        countries.sort((a, b) => a.name.localeCompare(b.name));

        // Group countries by first letter
        const groupedCountries = countries.reduce((result, country) => {
            const firstLetter = country.name.charAt(0).toUpperCase();
            if (!result[firstLetter]) {
                result[firstLetter] = [];
            }
            result[firstLetter].push(country);
            return result;
        }, {});

        // Sort sections by letter
        const sortedSections = Object.entries(groupedCountries).sort(([a], [b]) => a.localeCompare(b));

        // Sort countries within each section
        const sortedSegmentedData = sortedSections.map(([letter, countries]) => ({
            letter,
            data: countries.sort((a, b) => a.name.localeCompare(b.name)),
        }));

        return sortedSegmentedData;
    };

    const sortedSegmentedData = groupAndSortCountries(COUNTRIES);


    React.useEffect(() => {
        console.log("Screen No:==> 165")
    }, [])

    const renderSectionHeader = ({ section: { letter } }) => (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{letter}</Text>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
            <StatusBar backgroundColor={'#FFFFFF'} style={'dark'} />
            <HeaderFile2 navigation={navigation} title={'Select Country'} />
            <View style={styles.container}>
                <View style={styles.rowFlex}>
                    <View style={styles.rowFlex}>
                        <Ionicons
                            name='location-outline'
                            size={20}
                            color={"#343a40"}
                        />
                        <Text style={{ color: "#343a40", fontSize: 15 }}>{side === 'from' ? 'Shipping from' : 'Shipping to'}: </Text>
                    </View>
                    {
                        shipping.shipFrom.id && side === "from" &&
                        <View style={styles.rowFlex}>
                            <Image
                                source={shipping.shipFrom.flag}
                                resizeMode='contain'
                                style={{ width: 16, height: 16, borderRadius: 25 }}
                            />
                            <Text style={{ color: "#000000" }}>{shipping.shipFrom.name}</Text>
                        </View>
                    }

                    {
                        shipping.shipTo.id && side === "to" &&
                        <View style={styles.rowFlex}>
                            <Image
                                source={shipping.shipTo.flag}
                                resizeMode='contain'
                                style={{ width: 16, height: 16, borderRadius: 25 }}
                            />
                            <Text style={{ color: "#000000" }}>{shipping.shipTo.name}</Text>
                        </View>
                    }
                </View>

                <Divider style={{ marginVertical: 15 }} />

                <View>
                    <Text style={{ color: "#343a40", fontSize: 14 }}>Popular countries/Regions </Text>


                    <FlatList
                        data={COUNTRIES.slice(0, 4)}
                        renderItem={({ item, index }) => (
                            <CountriesItem_165
                                isLastItemInSection={index === COUNTRIES.slice(0, 4).length - 1}
                                item={item}
                                side={side}
                                navigation={navigation}
                                isTop_4={true}
                            />
                        )}
                    />
                </View>

                <FlatList
                    ref={flatListRef}
                    showsVerticalScrollIndicator={false}
                    data={sortedSegmentedData}
                    renderItem={({ item, index }) => (
                        <React.Fragment>
                            {renderSectionHeader({ section: { letter: item.letter } })}
                            {item.data.map((country, countryIndex) => (
                                <CountriesItem_165
                                    key={countryIndex}
                                    item={country}
                                    side={side}
                                    navigation={navigation}
                                    isLastItemInSection={countryIndex === item.data.length - 1}
                                />
                            ))}
                        </React.Fragment>
                    )}
                    keyExtractor={(item) => item.letter}
                />

                <View style={styles.alphabetIndex}>
                    {alphabetIndex.map((letter) => (
                        <Pressable
                            key={letter}
                            onPress={() => scrollToSection(letter)}
                            style={{ marginVertical: 2 }}
                        >
                            <Text style={selectedAlphabet === letter ? styles.selectedAlphabet : styles.alphabet}>{letter}</Text>
                        </Pressable>
                    ))}
                </View>

            </View>

        </SafeAreaView>
    );
};

export default Screen_165;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 10,
    },
    rowFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    sectionHeader: {
        //backgroundColor: '#eee',
        padding: 8,
    },
    sectionHeaderText: {
        fontSize: 16,
        color: "#F67F00"
        //fontWeight: 'bold',
    },
    alphabetIndex: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 10,
        position: 'absolute',
        width: 50,
        top: 40,
        right: 12,

    },
    alphabet: {
        color: '#F67F00',
        fontSize: 14,
    },
    selectedAlphabet: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
