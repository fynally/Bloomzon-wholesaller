import {
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Entypo, Feather, Ionicons, Octicons } from '@expo/vector-icons';
import { PRODUCT, RELATED_PRODUCTS } from '../data/data';
import ProductColorItem from '../components/wholesale/ProductColorItem';
import ProductMOQItem from '../components/wholesale/ProductMOQItem';
import ProductSizeItem from '../components/wholesale/ProductSizeItem';
import { ImageViewer } from '../resources/ImageViewer';
import Screen_231 from './231';
import { currencyFunction } from '../helper/Helper';
import { useDispatch, useSelector } from 'react-redux';
import { activeMOQ, setCurrentMoqData } from '../globals/variations/moqSlice';
import { setSelectedSize, sizeData } from '../globals/variations/sizesSlice';
import { activeColor, setCurrentColor } from '../globals/variations/colorsSlice';
import { addItem, selectedCartItems } from '../globals/cart/cartSlice';
import { userTempCart } from '../globals/cart/tempCartSlice';
import { useFocusEffect } from '@react-navigation/native';


const Screen_197 = ({ navigation }) => {
  const dispatch = useDispatch()
  const { data, currentMoqData, lowestMin } = useSelector(activeMOQ);
  const { allSizes } = useSelector(sizeData);
  const { currentColor } = useSelector(activeColor);
  const tempCartState = useSelector(userTempCart);
  const cartItems = useSelector(selectedCartItems);

  const [showCartModal, setShowCartModal] = useState(false);
  const [expandImage, setExpandImage] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState(RELATED_PRODUCTS);
  const [showSizes, setShowSizes] = useState(false);

  const totalPrice = currentMoqData.price * parseFloat(tempCartState.temporalItems)

  const selectedProduct = tempCartState?.selectedProduct;
  const baseMOQ = selectedProduct?.moqs?.base

  const addToCart = () => {
    const newItem = {
      id: cartItems.length + 1,
      name: "Mens top",
      total_inStock: 2588,
      image: require("../assets/wholesale/products/clothe.png"),
      discount: 50,
      min_order: 6,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      variation: tempCartState.temporalCart
    }

    dispatch(addItem(newItem))
    setShowCartModal(true);
  };

  const startOrder = () => {
    navigation.navigate('Screen_421');
  };

  React.useEffect(() => {
    console.log("Screen No:==> 197")
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      // Page is focused
      dispatch(setCurrentMoqData(baseMOQ[0]))
      dispatch(setSelectedSize(selectedProduct.variations.sizes[0]))
      dispatch(setCurrentColor(selectedProduct.variations.colors[0]));

      // Cleanup function
      return () => {
        // Additional cleanup code if needed
      };
    }, [])
  );

  React.useEffect(() => {
    console.log("lowestMin:==>", lowestMin)
  }, [tempCartState])

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <StatusBar backgroundColor={'#FFFFFF'} style={'dark'} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View></View>
          <Text style={{ fontSize: 15, color: '#000000' }}>Variations</Text>
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
            data={baseMOQ}
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
              alignItems: 'center',
              position: 'absolute',
              width: '100%',
              top: 200,
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
          Available color(s)
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

        <View style={styles.bottomContent}>
          <Pressable style={styles.listWrapper}>
            <Text style={[styles.shippingLabel, { fontWeight: 'bold' }]}>
              Ship from
            </Text>
            <View style={styles.innerListItem}>
              <Text style={styles.shippingValues}>China</Text>
              <Octicons name="chevron-right" size={15} color={'#000000'} />
            </View>
          </Pressable>

          <Pressable style={styles.listWrapper}>
            <Text style={[styles.shippingLabel, { fontWeight: 'bold' }]}>
              Shipping fee
            </Text>
            <View style={styles.innerListItem}>
              <Text style={styles.shippingValues}>EST. $1,123.19</Text>
              <Octicons name="chevron-right" size={15} color={'#000000'} />
            </View>
          </Pressable>

          <Pressable style={styles.listWrapper}>
            <Text style={styles.shippingLabel}>Subtotal ({tempCartState.temporalItems} type, {tempCartState.temporalTypes} item)</Text>
            <Text style={styles.shippingValues}>{currencyFunction(totalPrice)}</Text>
          </Pressable>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Pressable onPress={addToCart} style={styles.cartButton}>
              <Text style={{ color: '#ff6501' }}>Add to cart</Text>
            </Pressable>
            <Pressable
              onPress={startOrder}
              style={[styles.cartButton, { backgroundColor: '#ff6501' }]}>
              <Text style={{ color: '#ffffff' }}>Start Order</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {expandImage && ImageViewer(currentColor.itemImage, setExpandImage)}
      <Screen_231
        setShowCartModal={setShowCartModal}
        showCartModal={showCartModal}
        relatedProducts={relatedProducts}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default Screen_197;

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
    gap: 10,
  },
  ramLabelArea: {
    borderRightWidth: 0.5,
    padding: 8,
    width: 55,
    borderColor: '#00000039',
    alignContent: 'center',
  },
  bottomContent: {
    padding: 10,
    bottom: 0,
  },
  listWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  innerListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  shippingValues: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  shippingLabel: {
    fontSize: 13,
  },
  cartButton: {
    width: '48%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#F67F00',
    borderWidth: 1,
  },
  selectCategory: {
    borderLeftWidth: 1,
    borderLeftColor: '#dddddd',
    padding: 4,
    alignItems: 'center',
    marginLeft: 5,
  },
  // modalBackground: {
  //   position: 'absolute',
  //   width: '100%',
  //   height: '40%',
  //   top: 0,
  // },
  // modalContent: {
  //   backgroundColor: '#ffffff',
  //   position: 'absolute',
  //   width: '100%',
  //   bottom: 0,
  //   height: '60%',
  //   borderTopRightRadius: 10,
  //   borderTopLeftRadius: 10,
  // },
  // buttonHolder: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
});
