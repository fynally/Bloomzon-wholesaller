import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../headers/SearchBar';
import { BarCodeScanner } from 'expo-barcode-scanner';
import RetailScreen from '../screens/RetailScreen';
import WholesaleTab_21 from '../resources/WholesaleTab_21';
import Screen_419 from '../screens/419';
import FakeSearchBar from '../headers/FakeSearchBar';
import { useDispatch } from 'react-redux';
import { setCurrentMoqData, setMOQ } from '../globals/variations/moqSlice';
import { setSelectedSize, setSizes } from '../globals/variations/sizesSlice';
import { setColors, setCurrentColor } from '../globals/variations/colorsSlice';
import { COMPANIES } from '../data/data';
import { setCompanies } from '../globals/company/companySlice';

const Screen_21 = ({ navigation }) => {
  const dispatch = useDispatch();
  const [hasPermission, setHasPermission] = useState(null);
  const [showSearch, setShowSearch] = useState(false)
  const [tabIndex, setTabIndex] = useState(1);

  const switchIndex = (index) => {
    setTabIndex(index);
  };


  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 30, backgroundColor: '#ADE5E3' }}>
      <StatusBar backgroundColor="#ADE5E3" style="dark" />
      <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <View
          style={[
            styles.upperView,
            { paddingBottom: 8, paddingHorizontal: 0, alignItems: 'center' },
          ]}>
          <FakeSearchBar
            navigation={navigation}
            setShowSearch={setShowSearch}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.upperView}>
            <View style={styles.tabHolder}>
              <Pressable
                onPress={() => switchIndex(0)}
                style={[styles.tabs, tabIndex === 0 && styles.activeTab]}>
                <Text
                  style={[
                    styles.tabLabel,
                    tabIndex === 1 && { color: '#ffffff' },
                  ]}>
                  RETAIL
                </Text>
                <Text
                  style={[
                    styles.tabLabel,
                    tabIndex === 1 && { color: '#ffffff' },
                  ]}>
                  PRODUCTS
                </Text>
              </Pressable>

              <Pressable
                onPress={() => switchIndex(1)}
                style={[styles.tabs, tabIndex === 1 && styles.activeTab]}>
                <Text
                  onPress={() => setShowSearch(true)}
                  style={[
                    styles.tabLabel,
                    tabIndex === 0 && { color: '#ffffff' },
                  ]}>
                  WHOLESALE &
                </Text>
                <Text
                  style={[
                    styles.tabLabel,
                    tabIndex === 0 && { color: '#ffffff' },
                  ]}>
                  MANUFACTURERS
                </Text>
              </Pressable>
            </View>
          </View>
          {tabIndex === 1 ? (
            <WholesaleTab_21 navigation={navigation} />
          ) : tabIndex === 0 ? (
            <RetailScreen />
          ) : null}
        </ScrollView>

        {/* <Text onPress={() => setCanScan(false)}>Close</Text> */}

        {/* {
                canScan &&
                <View style={{ flex: 1, }}>

                    <BarCodeScanner

                        onBarCodeScanned={!canScan ? setCanScan(false) : handleBarCodeScanned}

                        style={{ position: 'absolute', width: '100%', height: '100%' }}
                    />
                </View>
            } */}
      </View>

      <Screen_419
        setShowSearch={setShowSearch}
        showSearch={showSearch}
        navigation={navigation}
      />

    </SafeAreaView>
  );
};

export default Screen_21;

const styles = StyleSheet.create({
  upperView: {
    backgroundColor: '#ADE5E3',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  tabHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  tabs: {
    borderBottomWidth: 1,
    width: '50%',
    paddingHorizontal: 14,
    paddingBottom: 10,
    borderBottomColor: '#ffffff',
  },
  tabLabel: {
    fontSize: 13,
    textAlign: 'center',
  },
  activeTab: {
    borderBottomColor: '#000000',
  },
});
