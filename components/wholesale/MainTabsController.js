import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Screen_341 from '../../screens/341';
import Header_226 from '../../headers/Header_226';
import Screen_226 from '../../screens/226';
import { COMPANIES } from '../../data/data';
import Screen_408 from '../../screens/408';
import Screen_440 from '../../screens/440';
import { companyState } from '../../globals/company/companySlice';
import { useSelector } from 'react-redux';

const MainTabsController = ({ navigation, route }) => {

    const { company } = useSelector(companyState)

    const { companyData, page } = route.params ?? {};
    const companyInfo = companyData

    //const companyInfo = COMPANIES[0];
    const [tabIndex, setTabIndex] = useState(page);

    React.useEffect(() => {
        //console.log("company==>", company);
        //console.log("products==>", products);
    }, [])

    return (
        <SafeAreaView style={{ paddingTop: 30, flex: 1, backgroundColor: "#ffffff" }}>
            <StatusBar backgroundColor={'#D5F2F1'} style={'dark'} />

            <LinearGradient
                colors={
                    tabIndex !== 2
                        ? ['#D5F2F1', '#D5F2F199', '#D5F2F159', '#ffffff']
                        : ['#ffffff', '#ffffff']
                }
                style={styles.gradientContainer}
            >
                <Header_226
                    navigation={navigation}
                    tabIndex={tabIndex}
                    setTabIndex={setTabIndex}
                />
            </LinearGradient>

            {tabIndex === 0 && companyInfo && (
                <Screen_226
                    navigation={navigation}
                    companyData={company}
                />
            )}
            {tabIndex === 1 && companyInfo && (
                <Screen_341
                    navigation={navigation}
                    companyData={company}
                />
            )}
            {tabIndex === 2 && companyInfo && (
                <Screen_440
                    navigation={navigation}
                    companyData={companyInfo}
                />
            )}
            {tabIndex === 3 && companyInfo && (
                <Screen_408
                    navigation={navigation}
                    companyData={companyInfo}
                />
            )}
        </SafeAreaView>
    )
}

export default MainTabsController

const styles = StyleSheet.create({

})