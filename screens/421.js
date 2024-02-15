import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons';
import ProductMOQItem from '../components/wholesale/ProductMOQItem';
import { PRODUCT } from '../data/data';
import ProductSizeItem from '../components/wholesale/ProductSizeItem';
import ProductColorItem from '../components/wholesale/ProductColorItem';
import { ImageViewer } from '../resources/ImageViewer';
import { currencyFunction } from '../helper/Helper';
import { activeColor, setCurrentColor } from '../globals/variations/colorsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { activeMOQ, setCurrentMoqData } from '../globals/variations/moqSlice';
import { setSelectedSize, sizeData } from '../globals/variations/sizesSlice';
import { selectedCartItems } from '../globals/cart/cartSlice';
import { userTempCart } from '../globals/cart/tempCartSlice';
import { companyState } from '../globals/company/companySlice';
import Screen_90 from './90';

const Screen_421 = ({ navigation }) => {
  const dispatch = useDispatch()
  const { products } = useSelector(companyState)
  const { currentMoqData } = useSelector(activeMOQ);
  const { allSizes } = useSelector(sizeData);
  const { currentColor } = useSelector(activeColor);
  const tempCartState = useSelector(userTempCart);
  const cartItems = useSelector(selectedCartItems);
  const [showSizes, setShowSizes] = useState(false);
  const [expandImage, setExpandImage] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);

  const selectedProduct = tempCartState?.selectedProduct;
  const sampleMOQ = selectedProduct?.moqs?.sample
  const totalPrice = tempCartState.temporalItems * parseFloat(currentMoqData.price);

  const totalInStock = selectedProduct.variations.colors

  const startOrder = () => {

    const uniqueObjectsSet = new Set(tempCartState.temporalCart.map(item => JSON.stringify({ id: item.id, size: item.size.label, color: item.color, v_image: item.image })));

    const uniqueObjects = Array.from(uniqueObjectsSet).map(str => JSON.parse(str));

    const customizeData = {
      selected_moq: currentMoqData,
      //selected_sizes: uniqueSizes,
      selected_color: uniqueObjects
    }
    navigation.navigate('Screen_474', { dataToCustomize: customizeData, is_sample: true });
  };

  React.useEffect(() => {
    dispatch(setCurrentMoqData(sampleMOQ[0]))
    dispatch(setSelectedSize(selectedProduct.variations.sizes[0]))
    dispatch(setCurrentColor(selectedProduct.variations.colors[0]));
    console.log("Screen No:==> 421")
  }, [])

  React.useEffect(() => {
    console.log("selectedProduct==>", tempCartState.selectedProduct)
  }, [tempCartState])

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <StatusBar backgroundColor={'#FFFFFF'} style={'dark'} />

      <View style={styles.container}>
        <View style={styles.header}>
          <View></View>
          <Text style={{ fontSize: 15, color: '#000000' }}>
            Sample Variations
          </Text>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="close-outline"
            size={28}
            color={'#000000'}
          />
        </View>

        <View style={styles.productTag}>
          <Pressable
            onPress={() => setExpandImage(true)}
            style={{ padding: 5, borderRadius: 5, backgroundColor: '#e4e4e4' }}>
            <View style={styles.expander}>
              <Entypo name="resize-full-screen" size={15} color={'#ffffff'} />
            </View>

            <Image
              source={currentColor.v_image}
              resizeMode="contain"
              style={{ width: 70, height: 70 }}
            />
          </Pressable>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={sampleMOQ}
            renderItem={({ item }) => (
              <ProductMOQItem
                item={item}
              />
            )}
          />
        </View>

        <View style={styles.ramSectionWrapper}>
          <View style={styles.ramLabelArea}>
            <Text style={{ color: '#00000099' }}>Size</Text>
          </View>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={selectedProduct.variations.sizes}
            renderItem={({ item }) => (
              <ProductSizeItem
                item={item}
                setShowSizes={setShowSizes}
              />
            )}
          />

          <Pressable
            onPress={() => setShowSizes(!showSizes)}
            style={styles.selectCategory}>
            <Feather
              name={showSizes ? 'chevron-up' : 'chevron-down'}
              size={20}
              color={'#00000099'}
            />
          </Pressable>
        </View>

        {showSizes && (
          <View
            style={{
              //position: 'absolute',
              //width: '100%',
              //top: 200,
              backgroundColor: '#ffffff',
              zIndex: 1,
              elevation: 1,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              numColumns={6}
              data={selectedProduct.variations.sizes}
              renderItem={({ item }) => (
                <ProductSizeItem
                  item={item}
                  setShowSizes={setShowSizes}
                />
              )}
            />
          </View>
        )}

        <Text
          style={{
            marginVertical: 10,
            marginHorizontal: 10,
            color: '#00000099',
            fontSize: 13,
          }}>
          Color Variations
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingHorizontal: 10 }}>
            <FlatList
              scrollEnabled={false}
              data={selectedProduct.variations.colors}
              renderItem={({ item }) => (
                <ProductColorItem
                  item={item}
                />
              )}
            />
          </View>
        </ScrollView>

        {
          tempCartState.selectedProduct.is_customizable
            ? <View style={styles.bottomContent}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  backgroundColor: '#f5f5f5',
                  padding: 10,
                }}>
                <AntDesign name="infocirlceo" color={'red'} size={15} />
                <Text>Only {totalInStock.length} piece in stock</Text>
              </View>
              <Pressable style={styles.listWrapper}>
                <Text style={styles.shippingLabel}>
                  Subtotal ({tempCartState.temporalTypes} type, {tempCartState.temporalItems} item)
                </Text>
                <Text style={styles.shippingValues}>
                  {currencyFunction(totalPrice)}
                </Text>
              </Pressable>

              <View style={{ marginTop: 10 }}>
                <Pressable
                  onPress={startOrder}
                  style={[styles.sampleButton, { backgroundColor: '#ff6501' }]}>
                  <Text style={{ color: '#ffffff' }}>Start Sample Order</Text>
                </Pressable>
              </View>
            </View>
            : <View style={[styles.rowFlex, { padding: 10 }]}>
              <Pressable
                onPress={() => setShowContactUs(true)}
                style={[styles.cartButton, { borderWidth: 0, width: "25" }]}>
                <Entypo
                  name='chat'
                  color={"#00000099"}
                  size={18}
                />
                <Text style={{ color: '#00000099', fontSize: 12 }}>Chat or call</Text>
              </Pressable>

              <Pressable
                onPress={() => alert("Enquiry about this product")}
                style={[styles.cartButton]}>
                <Text style={{ color: '#F67F00' }}>Send enquiry</Text>
              </Pressable>

              <Pressable
                onPress={() => alert("You are paying for this product")}
                style={[styles.cartButton, { backgroundColor: '#F67F00' }]}>
                <Text style={{ color: '#ffffff' }}>Pay</Text>
              </Pressable>
            </View>
        }


      </View>
      <Screen_90
        setShowContactUs={setShowContactUs}
        showContactUs={showContactUs}
        navigation={navigation}
      />
      {expandImage && ImageViewer(currentColor.v_image, setExpandImage)}
    </SafeAreaView>
  );
};

export default Screen_421;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  productTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
  expander: {
    width: 22,
    height: 22,
    backgroundColor: '#00000069',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    right: 8,
    top: 8,
    zIndex: 1,
  },
  ramSectionWrapper: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#00000039',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ramLabelArea: {
    borderRightWidth: 0.5,
    padding: 8,
    width: 55,
    borderColor: '#00000039',
    alignContent: 'center',
  },
  H_categoryWrapper: {
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectCategory: {
    borderLeftWidth: 1,
    borderLeftColor: '#dddddd',
    padding: 4,
    alignItems: 'center',
    marginLeft: 5,
  },
  bottomContent: {
    backgroundColor: '#ffffff',
    bottom: 0,
  },
  listWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  shippingValues: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  shippingLabel: {
    fontSize: 13,
  },
  sampleButton: {
    // width: '48%',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#F67F00',
    borderWidth: 1,
  },
  closeImageView: {
    position: 'absolute',
    right: 15,
    zIndex: 1,
    top: 20,
  },
  rowFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cartButton: {
    // width: '48%',
    //margin: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 3,
    borderColor: '#F67F00',
    borderWidth: 1,
    width: "35%",
    paddingVertical: 7
  },
});
