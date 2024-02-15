import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Header_226 from '../headers/Header_226';
import HomeTab_226 from '../resources/HomeTab_226';
import { LinearGradient } from 'expo-linear-gradient';
import ManufacturerTopInfo_226 from '../resources/ManufacturerTopInfo_226';
import { PRODUCTS } from '../data/data';

const Screen_76 = ({ navigation, companyData }) => {
  //const { companyData } = route.params
  //const [tabIndex, setTabIndex] = useState(0);

  React.useEffect(() => {
    console.log("Screen No:==> 76")
  }, [])

  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: 30,
      //backgroundColor: '#ADE5E3'
    }}>
      <StatusBar backgroundColor={'#D5F2F1'}
        style={'dark'}
      />

      <ManufacturerTopInfo_226 companyData={companyData} />

      {/* <LinearGradient
        colors={['#D5F2F1', '#D5F2F159', '#ffffff69', '#ffffff']}
        style={styles.gradientContainer}>

        <Header_226
          navigation={navigation}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
        />
       <ManufacturerTopInfo_226 companyData={companyData} /> 
      </LinearGradient>
      {tabIndex === 0 &&
        <HomeTab_226
          navigation={navigation}
          products={PRODUCTS}
          companyData={companyData}
        />
      } */}
    </SafeAreaView>
  );
};

export default Screen_76;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    //flex: 1,
    //height: 190,
  },
});
