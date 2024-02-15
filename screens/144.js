import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
  Feather,
  FontAwesome5,
  Ionicons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { Checkbox, Divider } from 'react-native-paper';
import { SHIPPINGS } from '../data/data';
import ShippingMethodItem from '../components/wholesale/ShippingMethodItem';
import { useSelector } from 'react-redux';
import { shippingData } from '../globals/shipping/shippingSlice';
import { Alert } from 'react-native';

const Screen_144 = ({ navigation, route }) => {
  const { shipping } = useSelector(shippingData)
  const [checkedItem, setCheckedItem] = React.useState(null);

  const handleApply = () => {
    alert('You called Apply function');
  };

  const shippingOrigin = () => {
    navigation.navigate("Screen_165", { side: 'from' })
    //alert('Change shipping destination');
  };

  const shippingDestination = () => {
    if (!shipping.shipFrom.id) {
      return Alert.alert("Required", "Please select your shipping origin first")
    } else {
      navigation.navigate("Screen_165", { side: 'to' })
    }
    //alert('Change shipping destination');
  };

  React.useEffect(() => {
    console.log("Screen No:==> 144")
  }, [])

  React.useEffect(() => {
    console.log("checkedItem:==>", checkedItem)
  }, [checkedItem])

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <StatusBar backgroundColor={'#FFFFFF'} style={'dark'} />

      <View style={styles.container}>
        <View style={styles.header}>
          <View></View>
          <Text style={{ fontSize: 15, color: '#000000' }}> Shipping</Text>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="close-outline"
            size={28}
            color={'#000000'}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 5 }}>
          <View style={styles.card}>
            <Pressable onPress={shippingOrigin} style={styles.section}>
              <Text style={styles.label}>Ship from</Text>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <Text style={styles.value}>{shipping.shipFrom.name ?? "Select origin"}</Text>
                <Feather name="chevron-right" size={20} color={'#000000'} />
              </View>
            </Pressable>

            <Divider style={{ marginVertical: 10 }} />

            <Pressable onPress={shippingDestination} style={styles.section}>
              <Text style={styles.label}>Ship to</Text>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <Text style={styles.value}>{shipping.shipTo.name ?? "Select destination"}</Text>
                <Feather name="chevron-right" size={20} color={'#000000'} />
              </View>
            </Pressable>

            <Divider style={{ marginVertical: 10 }} />

            <View style={styles.section}>
              <Text style={styles.label}>Lead time</Text>
              <Text style={styles.value}>7 days</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.section}>
              <Text style={styles.label}></Text>
              <Text style={styles.value}>Min.order: 30 pairs</Text>
            </View>
            <View style={styles.section}>
              <View style={{ width: '30%' }}>
                <Text style={styles.label}>Ship from</Text>
                <Text style={styles.label}></Text>
              </View>
              <View style={{ width: '70%', alignItems: 'flex-end' }}>
                <Text
                  style={[styles.label, { fontSize: 13, textAlign: 'right' }]}>
                  Add product quantity in variation to see exact shipping fee
                </Text>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.card,
              {
                backgroundColor: 'transparent',
                marginHorizontal: 0,
                marginTop: 5,
              },
            ]}>
            <View style={{}}>
              <Text style={[styles.value, { marginBottom: 10 }]}>
                Select shipping method
              </Text>
              <Text style={styles.label}>
                Your order is protected by On-time Dispatch Guarantee
              </Text>
              <Text style={styles.label}>
                Upgrade your protection to On-time Delivery Guarantee by
                selecting the logistics method with "Guarantee Delivery."{' '}
                <SimpleLineIcons
                  name="question"
                  size={11}
                  color={'#00000099'}
                />{' '}
              </Text>
            </View>
          </View>

          <FlatList
            scrollEnabled={false}
            data={SHIPPINGS}
            renderItem={({ item }) => (
              <ShippingMethodItem
                item={item}
                checkedItem={checkedItem}
                setCheckedItem={setCheckedItem}
              />
            )}
          />

          <View style={styles.card}>
            <View style={[styles.justInline, { gap: 5, marginBottom: 5 }]}>
              <Text style={{ color: '#44cdc8', fontSize: 14 }}>Bloomzon.com </Text>
              <Text style={{ color: '#343a40', fontSize: 14 }}>Logistics</Text>
            </View>

            <View style={[{ gap: 5 }]}>
              <Text
                style={{ color: '#000000', fontWeight: 'bold', fontSize: 13 }}>
                {' '}
                Bloomzon.com Logistics{' '}
                <Text style={{ color: '#343a40', fontWeight: '400' }}>
                  cost-effective, efficient, reliable, and trackable
                </Text>{' '}
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottomSection}>
          <Pressable onPress={handleApply} style={styles.button}>
            <Text style={{ color: '#ffffff' }}>Apply</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Screen_144;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    color: '#343a40',
    fontSize: 13.5
  },
  value: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 14
  },
  bottomSection: {
    backgroundColor: '#ffffff',
    padding: 10,
  },
  button: {
    backgroundColor: '#F67F00',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  justInline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxHolder: {
    alignItems: 'flex-end',
    position: 'absolute',
    width: '100%',
    top: 37,
    right: 0,
    zIndex: 1,
    padding: 2,
  },
});
