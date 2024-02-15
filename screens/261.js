import { StyleSheet, Text, View, FlatList, SafeAreaView, Pressable, ScrollView, TextInput, Image } from 'react-native'
import React from 'react'
import { AntDesign, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import Carousel from '../resources/Carousel'
import { Divider } from '@rneui/themed'
import RatingStars from '../resources/RatingStars'
import ProductVariationItem_261 from '../components/wholesale/ProductVariationItem_261'
import { PAYMENTS } from '../data/data'
import PaymentChannelItem from '../components/wholesale/PaymentChannelItem'
import ProductImagesItem_261 from '../components/wholesale/ProductImagesItem_261'
import Reviews from '../resources/Reviews'
import DiscountItem_261 from '../components/wholesale/DiscountItem_261'
import SellerStoreViewItem_261 from '../components/wholesale/SellerStoreViewItem_261'
import { LinearGradient } from 'expo-linear-gradient'
import Screen_345 from './345'
import Screen_181 from './181'
import Screen_198 from './198'
import Screen_434 from './434'
import { formatMoney, isLastElement } from '../helper/Helper'
import { useDispatch, useSelector } from 'react-redux'
import { companyState } from '../globals/company/companySlice'
import { selectProduct, userTempCart } from '../globals/cart/tempCartSlice'
import { activeMOQ, setCurrentMoqData } from '../globals/variations/moqSlice'
import { setSelectedSize } from '../globals/variations/sizesSlice'
import { setCurrentColor } from '../globals/variations/colorsSlice'
import { useFocusEffect } from '@react-navigation/native'
import { shippingData } from '../globals/shipping/shippingSlice'

const discount_coupon = [
    {
        id: 1,
        amount: 5,
        mode: "Discount"
    },
    {
        id: 2,
        amount: 11.09,
        mode: "Coupon"
    },
    {
        id: 3,
        amount: 7.23,
        mode: "Coupon"
    },
    {
        id: 4,
        amount: 5,
        mode: "Discount"
    },

]
const seller_sample_sales = [
    {
        id: 1,
        desc: "iphone 15 pro max case",
        rating_star: 3,
        reviews: 758,
        price: 2750,
        image: require("../assets/wholesale/products/phone.png")
    },
    {
        id: 2,
        desc: "iphone 15 pro max case",
        rating_star: 3,
        reviews: 28,
        price: 15200,
        image: require("../assets/wholesale/products/phone.png")
    },
    {
        id: 3,
        desc: "iphone 15 pro max case",
        rating_star: 5,
        reviews: 111,
        price: 8000,
        image: require("../assets/wholesale/products/phone.png")
    },
    {
        id: 4,
        desc: "iphone 15 pro max case",
        rating_star: 4,
        reviews: 524,
        price: 6100,
        image: require("../assets/wholesale/products/phone.png")
    },
]

const specsData = {
    product_department: "Men",
    product_length: "Full length",
    product_fit: "Fits true to size, take your normal size",
    fabric_type: "BroadCloth",
    closure_type: "Elastic Waist",
    gender: "Men",
    material: "Nylon, Spandex",
    brand_name: "Feionusin",
    origin: "Mainland, China",
    product_type: "Full Length",
    sports_type: "Yoga"
}

const Screen_261 = ({ navigation, route }) => {
    const tempCartState = useSelector(userTempCart);
    const dispatch = useDispatch()
    const { shipping } = useSelector(shippingData)
    const { currentMoqData } = useSelector(activeMOQ);
    const { item, companyData } = route.params ?? {}
    const [moreOption, setMoreOption] = React.useState(false)
    const [activeVariation, setActiveVariation] = React.useState({})
    const [showPayments, setShowPayments] = React.useState(false)
    const [productReturn, setProductReturn] = React.useState(false)
    const [showSpecs, setShowSpecs] = React.useState(false)
    const [selectedDiscount, setSelectedDiscount] = React.useState(discount_coupon[0])

    const canGoBack = navigation.canGoBack()
    //console.log("company==>", companyData.business_card.verified_year)
    const selectedProduct = tempCartState?.selectedProduct;
    //const baseMOQ = selectedProduct?.moqs?.base
    const variations = item.variations;
    const baseMOQ = item.moqs.base
    const sampleMOQ = item.moqs.sample

    // Extract unique sizes
    const uniqueSizes = [...new Set(variations.colors.flatMap(color => color.sizes.map(size => size.value)))];

    // Get the count of unique sizes
    const numberOfUniqueSizes = uniqueSizes.length;

    const sampleLowestMin = sampleMOQ.reduce((minMinObject, currentObject) => {
        if (currentObject.moq.min < minMinObject.moq.min) {
            return currentObject; // Update minMinObject if the current 'min' is lower
        } else {
            return minMinObject; // Keep the current minMinObject if the 'min' is not lower
        }
    }, baseMOQ[0]);

    const objectWithLowestMin = baseMOQ.reduce((minMinObject, currentObject) => {
        if (currentObject.moq.min < minMinObject.moq.min) {
            return currentObject; // Update minMinObject if the current 'min' is lower
        } else {
            return minMinObject; // Keep the current minMinObject if the 'min' is not lower
        }
    }, baseMOQ[0]);

    const handleMoreOption = () => {
        setMoreOption(true)
    }

    const handleGetSample = () => {
        dispatch(selectProduct(item))
        navigation.navigate("Screen_421")

    }

    const handleCustomize = () => {

        const customizeData = {
            selected_moq: baseMOQ,
            //selected_sizes: uniqueSizes,
            selected_color: selectedProduct.variations.colors
        }

        if (currentMoqData.moq.min) {
            navigation.navigate("Screen_474", { dataToCustomize: customizeData, is_sample: false })

        } else {
            alert("Product not set yet")
        }

        //console.log("New data==>", selectedProduct.variations.colors)
    }

    const gotoShipping = () => {
        //alert("Getting sample")
        navigation.navigate("Screen_144")
    }

    const handleOpeLink = () => {
        alert("Open in tab")
    }

    React.useEffect(() => {

        const defaultVariation = variations.colors.find((variation) => variation.is_default === true);

        if (defaultVariation) {
            setActiveVariation(defaultVariation);
        }
    }, []);

    React.useEffect(() => {
        console.log("Screen No:==> 261")
        dispatch(selectProduct(item))
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            // Page is focused

            if (selectedProduct !== undefined && selectedProduct.variations) {
                // Assuming variations.sizes and variations.colors are arrays
                if (selectedProduct.variations.sizes.length > 0) {
                    dispatch(setSelectedSize(selectedProduct.variations.sizes[0]));
                }

                if (selectedProduct.variations.colors.length > 0) {
                    dispatch(setCurrentColor(selectedProduct.variations.colors[0]));
                }

                dispatch(setCurrentMoqData(baseMOQ[0]));
            }

            // Cleanup function
            return () => {
                // Additional cleanup code if needed
            };
        }, [selectedProduct])
    );

    const dynamicSellerSession = (title, section) => (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={[styles.sectionTitle, { marginBottom: 0, width: '70%' }]}>{title}</Text>
                <Text
                    onPress={() => alert(`see more ${section} here`)}
                    style={styles.moreText}
                >See more</Text>
            </View>

            <View style={{ marginTop: 10 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={seller_sample_sales}
                    renderItem={({ item }) => (
                        <SellerStoreViewItem_261
                            data={seller_sample_sales}
                            item={item}
                        />
                    )}
                />
            </View>

        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
            <StatusBar backgroundColor={'#FFFFFF'} style={'dark'} />
            <View style={styles.container}>

                <View style={styles.appBarWrapper}>
                    {
                        canGoBack &&

                        <Feather
                            name={'arrow-left'}
                            color={'#000000'}
                            size={28}
                            onPress={() => navigation.goBack()}
                        />
                    }


                    <View style={styles.searchBox}>
                        <Feather
                            name={'search'}
                            color={'#00000069'}
                            size={22}
                        />
                        <TextInput
                            placeholder={'Search'}
                            placeholderTextColor={"#00000069"}
                        />
                    </View>

                    <MaterialIcons
                        name={'open-in-new'}
                        color={"#000000"}
                        size={25}
                        onPress={handleOpeLink}
                    />

                    <MaterialIcons
                        name={'more-horiz'}
                        color={"#000000"}
                        size={25}
                        onPress={handleMoreOption}
                    />

                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <Carousel
                            data={variations.colors}
                            likes={item.totalLikes.length}
                        />
                    </View>

                    <View style={{ paddingHorizontal: 10 }}>
                        <Text numberOfLines={3} style={{ color: "#000000", fontSize: 18 }}>{item.desc}</Text>
                    </View>

                    <View style={{ padding: 10, flexDirection: "row", alignItems: 'center', gap: 8 }}>
                        <Text style={{ color: "#00000099", fontSize: 15 }}>
                            {item.totalOrders.length} orders</Text>
                        <Divider orientation='vertical' width={2} />
                        <Text style={{ color: "#000000", fontSize: 14, textDecorationColor: "#000000", textDecorationLine: 'underline' }}>See store reviews</Text>
                    </View>

                    <ScrollView horizontal>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, width: '100%' }}>

                            {
                                baseMOQ.map((moq, index) => (
                                    <View key={index} style={[styles.moqContainer, !isLastElement(baseMOQ, moq) && { marginRight: 50 }]}>
                                        <Text style={styles.moqPrice}>{formatMoney(moq.price)}</Text>
                                        <Text style={styles.moqQty}>Min.order: {moq.moq.min}</Text>

                                        <Text style={styles.moqQty}>Max.order: {moq.moq.max}</Text>
                                    </View>
                                ))
                            }


                        </View>
                    </ScrollView>

                    <View style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                        <RatingStars
                            rating={6}
                            size={17}
                            color={"#F67F00"}
                        />
                        <Text style={{ color: "#343a40" }}>({item.ratingCount.length})</Text>
                    </View>

                    <Divider style={{ marginVertical: 15, marginHorizontal: 10 }} />

                    <Pressable
                        onPress={() => alert("more info")}
                        style={[styles.rowFlex, { paddingHorizontal: 10 }]}>
                        <FontAwesome
                            name='diamond'
                            size={17}
                            color={"#000000"}
                        />
                        <View style={{ width: "80%" }}>
                            <Text style={{ color: "#000000", fontSize: 15 }}>Bloomzon Prime Buyer Club</Text>
                            <Text style={{ color: "#000000", fontWeight: "600" }}>5 percent off on your purchase on Bloomzon</Text>
                        </View>
                        <Feather
                            name='chevron-right'
                            size={18}
                            color={"#000000"}
                        />
                    </Pressable>

                    <Divider style={{ marginVertical: 15, marginHorizontal: 10 }} />

                    <View>
                        <View style={[styles.rowFlex, { paddingHorizontal: 10 }]}>
                            <View>
                                <Text style={{ textDecorationColor: "#000000", textDecorationLine: "underline", color: "#000000", fontSize: 16, fontWeight: "500" }}>Start order</Text>
                                <Text style={{ color: "#343a40", fontSize: 14 }}>Select color and size</Text>
                            </View>
                            <View style={{ height: '100%' }}>
                                <Feather
                                    name='chevron-up'
                                    color={"#00000099"}
                                    size={18}
                                />
                            </View>
                        </View>

                        <View style={{ padding: 10 }}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                data={variations.colors}
                                renderItem={({ item }) => (
                                    <ProductVariationItem_261
                                        item={item}
                                        data={variations.sizes}
                                        activeVariation={activeVariation} setActiveVariation={setActiveVariation}
                                    />
                                )}
                            />
                        </View>

                    </View>

                    <Divider width={5} style={{ marginVertical: 10 }} color="#eeeeee" />

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Sample</Text>
                        <Text style={{ color: "#000000" }}>Sample price:</Text>

                        <Text>
                            <Text style={{ color: "#000000", fontWeight: "bold" }}>{formatMoney(sampleMOQ[0].price)} /  piece </Text>

                            <Text style={{ color: "#000000" }}> (Min.order: {sampleLowestMin.moq.min} piece)</Text>
                        </Text>

                        <Text style={{ marginVertical: 5 }}>
                            <Text style={{ color: "#000000", textDecorationLine: 'underline', textDecorationColor: "#000000", fontWeight: '600' }}>Select from </Text>
                            <Text style={{ color: "#000000" }}> Color:{variations.colors.length}, Size {numberOfUniqueSizes} </Text>
                        </Text>

                        <Pressable
                            onPress={handleGetSample}
                            style={styles.buttons}>
                            <Text style={{ color: "#F67F00" }}>Get samples</Text>
                        </Pressable>

                    </View>

                    {
                        item.is_customizable &&
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Online Customization</Text>
                            <Text style={{ color: "#000000" }}>Base Price:</Text>

                            {/* activeVariation.basePrice > 0 ? activeVariation.basePrice : objectWithLowestMin.price */}
                            <Text>
                                <Text style={{ color: "#000000", fontWeight: "bold" }}>
                                    {formatMoney(objectWithLowestMin.price)} / piece </Text>

                                <Text style={{ color: "#000000" }}> (Min.order: {objectWithLowestMin.moq.min} piece(s))</Text>
                            </Text>

                            <Text style={{ marginVertical: 5 }}>

                                <Text style={{ color: "#000000" }}> customizable Logo / text </Text>
                            </Text>

                            <Pressable
                                onPress={handleCustomize}
                                style={styles.buttons}>
                                <Text style={{ color: "#F67F00" }}>Customize now</Text>
                            </Pressable>

                        </View>
                    }



                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { marginBottom: 5 }]}>Product Description</Text>
                        <Text style={{ color: "#000000" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
                        </Text>

                        <Pressable
                            onPress={handleGetSample}
                            style={styles.buttons}>
                            <Text style={{ color: "#F67F00" }}>Show more</Text>
                        </Pressable>

                    </View>

                    <Divider
                        width={5}
                        style={{ marginVertical: 10 }} color="#eeeeee"
                    />

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Product Specification</Text>

                        <View style={styles.specWrapper}>
                            <View style={styles.leftLabelPan}>
                                <Text>Department Name</Text>
                            </View>
                            <View style={styles.rightLabelPan}>
                                <Text style={styles.specValues}>{specsData.product_department}</Text>
                            </View>
                        </View>
                        <View style={styles.specWrapper}>
                            <View style={styles.leftLabelPan}>
                                <Text>Pant Length</Text>
                            </View>
                            <View style={styles.rightLabelPan}>
                                <Text style={styles.specValues}>{specsData.product_length}</Text>
                            </View>
                        </View>
                        <View style={styles.specWrapper}>
                            <View style={styles.leftLabelPan}>
                                <Text>Fit</Text>
                            </View>
                            <View style={styles.rightLabelPan}>
                                <Text style={styles.specValues}>{specsData.product_fit}</Text>
                            </View>
                        </View>

                        <Pressable
                            onPress={() => setShowSpecs(true)}
                            style={styles.buttons}>
                            <Text style={{ color: "#F67F00" }}>Show more</Text>
                        </Pressable>

                    </View>

                    <Divider
                        width={5}
                        style={{ marginVertical: 10 }} color="#eeeeee"
                    />

                    <Pressable

                        style={{ paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={[styles.sectionTitle, { marginBottom: 5 }]}>Support</Text>
                            <Text style={{ color: "#343a40", fontSize: 14 }}>Contact Customer Support</Text>
                        </View>
                        <View style={{ height: "100%" }}>
                            <Feather
                                name={"chevron-right"}
                                color={"#000000"}
                                size={18}
                            />
                        </View>
                    </Pressable>

                    <Divider
                        width={5}
                        style={{ marginVertical: 10 }} color="#eeeeee"
                    />

                    <View style={styles.section}>
                        <View>
                            <Text style={[styles.sectionTitle, { marginBottom: 5 }]}>Purchase Details</Text>

                            <Text>
                                <Text style={{ color: "#343a40", fontSize: 14 }}>protection with </Text>
                                <Ionicons name='basket' color={"#F67F00"} size={18} />
                                <Text style={{ color: "#000000", fontSize: 14, fontWeight: '600' }}>Trade assurance </Text>
                            </Text>

                        </View>

                        <Pressable
                            onPress={gotoShipping}
                            style={styles.purchaseSections}>
                            <View style={{ height: "100%" }}>
                                <FontAwesome5
                                    name={"shipping-fast"}
                                    size={15}
                                    color={"#00000099"}
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 14.5, color: "#000000", fontWeight: "bold" }}>Shipping</Text>
                                <Text>
                                    <Text style={{ textDecorationLine: "underline", color: "#000000", fontSize: 14, fontWeight: "500" }}>Contact supplier </Text>
                                    <Text style={{ color: "#343a40" }}>to negotiate shipping details</Text>
                                </Text>
                                <Text style={{ fontSize: 13.5 }}>
                                    <Text>Enjoy </Text>
                                    <Text style={{ color: "#F67F00" }}> On-Dispatch guarantee</Text>
                                </Text>
                            </View>
                            <View style={{ height: "100%" }}>
                                <Feather
                                    name={"chevron-right"}
                                    color={"#000000"}
                                    size={18}
                                />
                            </View>
                        </Pressable>

                        <Pressable
                            onPress={() => setShowPayments(true)}
                            style={styles.purchaseSections}>
                            <View style={{ height: "100%" }}>
                                <Ionicons
                                    name={"shield-checkmark-outline"}
                                    size={20}
                                    color={"#00000099"}
                                />
                            </View>
                            <View style={{ width: "80%" }}>
                                <Text style={{ fontSize: 14.5, color: "#000000", fontWeight: "bold" }}>Payments</Text>

                                <View style={{ marginTop: 10 }}>

                                    <FlatList
                                        horizontal={true}
                                        data={PAYMENTS.slice(0, 5)}
                                        renderItem={({ item }) => (
                                            <PaymentChannelItem
                                                item={item}
                                                showLess={true}
                                            />
                                        )}
                                    />
                                </View>

                                <Text style={{ color: "#343a40", fontSize: 14, marginTop: 6, }}>Enjoy encrypted and secure payment </Text>

                            </View>
                            <View style={{ height: "100%" }}>
                                <Feather
                                    name={"chevron-right"}
                                    color={"#000000"}
                                    size={18}
                                />
                            </View>
                        </Pressable>

                        <Pressable
                            onPress={() => setProductReturn(true)}
                            style={styles.purchaseSections}>
                            <View style={{ height: "100%" }}>
                                <MaterialCommunityIcons
                                    name={"undo-variant"}
                                    size={20}
                                    color={"#00000099"}
                                />
                            </View>
                            <View style={{ width: "80%" }}>
                                <Text style={{ fontSize: 14.5, color: "#000000", fontWeight: "bold" }}>Returns and Refunds</Text>

                                <Text style={{ color: "#343a40", fontSize: 14, marginTop: 6, }}>Eligible for return and refund </Text>

                            </View>
                            <View style={{ height: "100%" }}>
                                <Feather
                                    name={"chevron-right"}
                                    color={"#000000"}
                                    size={18}
                                />
                            </View>
                        </Pressable>

                    </View>

                    <Divider
                        width={5}
                        style={{ marginBottom: 5 }} color="#eeeeee"
                    />

                    <View style={styles.section}>

                        <Text style={styles.sectionTitle}>Product Image Gallery</Text>

                        <FlatList
                            scrollEnabled={false}
                            data={variations.colors}
                            renderItem={({ item }) => (
                                <ProductImagesItem_261
                                    item={item}
                                    data={variations.colors}
                                />
                            )}
                        />
                    </View>

                    <Divider
                        width={5}
                        style={{ marginVertical: 5 }} color="#eeeeee"
                    />

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Reviews</Text>

                        <View>
                            <Text style={{ fontWeight: "bold", color: "#000000", fontSize: 14.5 }}>Product reviews</Text>

                            <Text style={{ color: "#343a40", fontSize: 14, marginTop: 3 }}>No product reviews yet. See store reviews</Text>
                        </View>

                        <Pressable style={{ marginVertical: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: "bold", color: "#000000", fontSize: 14, }}>Store reviews</Text>
                                <Feather
                                    name='chevron-right'
                                    color={"#000000"}
                                    size={18}
                                />
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 25, marginTop: 10 }}>

                                <Text style={{ color: "#000000", fontWeight: "bold" }}>
                                    <Text style={{ fontSize: 18 }}>4.1</Text>
                                    <Text>/5</Text>
                                </Text>

                                <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 13 }}>Very Satisfied</Text>

                            </View>

                            <View style={{ marginTop: 25, marginBottom: 6 }}>
                                {Reviews("Product Quality", 4.2)}

                                <View style={{ marginVertical: 10 }}>
                                    {Reviews("Suppliers Service", 4)}
                                </View>

                                {Reviews("On-Time Shipment", 4.2)}

                            </View>

                            <Pressable
                                onPress={() => alert("See all reviews here")}
                                style={styles.buttons}>
                                <Text style={{ color: "#F67F00" }}>See all reviews</Text>
                            </Pressable>

                        </Pressable>

                    </View>

                    <Divider
                        width={5}
                        style={{ marginBottom: 1, marginTop: -12 }} color="#eeeeee"
                    />

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Discounts & Coupons</Text>

                        <View>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={discount_coupon}
                                renderItem={({ item }) => (
                                    <DiscountItem_261
                                        data={discount_coupon}
                                        item={item}
                                        selectedDiscount={selectedDiscount}
                                        setSelectedDiscount={setSelectedDiscount}
                                    />
                                )}
                            />
                        </View>

                    </View>

                    <Divider
                        width={4}
                        style={{ marginVertical: 5 }}
                        color="#eeeeee"
                    />

                    <Pressable onPress={gotoShipping} style={styles.section}>
                        <View
                            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                            <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>Delivery</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>

                                {shipping.shipTo.name && <Ionicons
                                    name={"location-outline"}
                                    size={19}
                                    color={"#000000"}
                                />}

                                <Text style={{ color: "#343a40" }}>
                                    {
                                        shipping.shipTo.name ? `To ${shipping.shipTo.name}` : "Select destination"
                                    }
                                </Text>

                                <Feather
                                    name={'chevron-right'}
                                    color={"#000000"}
                                    size={18}
                                />

                            </View>
                        </View>

                        <View style={{ marginVertical: 10 }}>

                            {
                                shipping.shipFrom.name
                                    ? <>
                                        <Text style={{ fontWeight: 'bold', fontSize: 14.5, color: "#000000", marginBottom: 5 }}>Free Shipping</Text>

                                        <Text style={{ width: '85%' }}>
                                            <Text style={{ fontSize: 14, color: "#343a40", }}>From </Text>

                                            <Text style={{ fontSize: 14, color: "#000000", fontWeight: 'bold' }}> {shipping.shipFrom.name} </Text>


                                            <Text style={{ fontSize: 14, color: "#343a40", }}> via {shipping.shipMethod.name ?? "(select shipping method)"}</Text>


                                        </Text>

                                        <Text>
                                            <Text style={{ fontSize: 14, color: "#343a40", }}>Estimated delivery on </Text>
                                            <Text style={{ fontSize: 14, color: "#000000", fontWeight: 'bold' }}>{shipping.shipMethod.estDelivery} </Text>
                                        </Text>
                                    </>
                                    :
                                    <Text style={{ fontSize: 14, color: "#343a40", }}>Select your shipping origin</Text>
                            }


                        </View>

                    </Pressable>

                    <Divider
                        width={4}
                        style={{ marginBottom: 5 }}
                        color="#eeeeee"
                    />

                    <Pressable style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={[styles.sectionTitle, { marginBottom: 5 }]}>Service</Text>
                            <Text style={{ color: "#343a40", fontSize: 14 }}>75-day Buyer Protection</Text>
                        </View>
                        <View style={{ height: "100%" }}>
                            <Feather
                                name={"chevron-right"}
                                color={"#000000"}
                                size={18}
                            />
                        </View>
                    </Pressable>

                    <Divider
                        width={4}
                        style={{ marginBottom: 5 }}
                        color="#eeeeee"
                    />


                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Questions & Answers (0)</Text>

                        <View style={{ flexDirection: "row", alignItems: 'center', gap: 10 }}>
                            <MaterialCommunityIcons
                                name={'message-question-outline'}
                                size={20}
                                color={"#00000099"}
                            />
                            <View style={{ width: "70%" }}>
                                <Text style={{ fontSize: 14, color: "#343a40" }}>Want to know more about the product? Ask other who bought it</Text>

                                <Text
                                    onPress={() => alert("Ask question here")}
                                    style={{ color: "#F67F00", marginVertical: 10, fontSize: 14 }}>Ask Now</Text>

                            </View>
                        </View>

                    </View>

                    <Divider
                        width={4}
                        style={{ marginBottom: 5 }}
                        color="#eeeeee"
                    />

                    {dynamicSellerSession("Sales From This Seller", "sales")}

                    <Divider
                        width={4}
                        style={{ marginBottom: 5 }}
                        color="#eeeeee"
                    />

                    {dynamicSellerSession("New Arrival From This Seller", "arrival")}

                    <Divider
                        width={4}
                        style={{ marginBottom: 5 }}
                        color="#eeeeee"
                    />

                    {dynamicSellerSession("Recommended By This Seller", "recommendation")}

                    <Divider
                        width={4}
                        style={{ marginBottom: 5 }}
                        color="#eeeeee"
                    />

                    {dynamicSellerSession("Similar Products From This Supplier", "similar")}

                    <Divider
                        width={4}
                        style={{ marginBottom: 5 }}
                        color="#eeeeee"
                    />

                    {dynamicSellerSession("Best-Selling Products From This Supplier", "best selling")}

                    <Divider
                        width={4}
                        style={{ marginBottom: 5 }}
                        color="#eeeeee"
                    />

                    {dynamicSellerSession("Discover More Products From This Supplier", "discover")}

                    <Divider
                        width={4}
                        style={{ marginBottom: 5 }}
                        color="#eeeeee"
                    />

                    {dynamicSellerSession("Hot Products From This Supplier", "hot product")}

                    <Divider
                        width={4}
                        style={{ marginBottom: 5 }}
                        color="#eeeeee"
                    />

                    {dynamicSellerSession("Best Rated Products From This Supplier", "similar")}

                    <LinearGradient
                        colors={['#D9F3F2', '#ffffff', '#ffffff', '#ffffff']}
                        style={styles.gradientContainer}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: companyData?.isVerified ? '#F67F00' : 'red', fontSize: 15 }}>
                                {
                                    companyData?.isVerified
                                        ? "Verified Custom Manufacturer"
                                        : "Manufacturer not verified"
                                }
                            </Text>
                            <AntDesign
                                name={companyData?.isVerified ? 'check' : 'close'}
                                size={15}
                                color={companyData?.isVerified ? "#5CD3CF" : 'red'}
                            />
                        </View>

                        <View style={styles.wrapper}>
                            <Text numberOfLines={2} style={{ fontSize: 18, color: '#000000', width: '72%' }}>{companyData?.name}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginVertical: 10 }}>
                            <Image
                                source={companyData.business_card.country.flag}
                                resizeMode={'contain'}
                                style={{ width: 30, height: 20 }}
                            />
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{companyData.business_card.country.iso.toUpperCase()}</Text>


                            <View style={{ width: 40, height: 20, alignItems: 'center', backgroundColor: '#f5f5f5' }}>
                                <Text>{companyData.veri_date} YR</Text>
                            </View>
                        </View>

                        <View style={[styles.rowFlex, { marginVertical: 5 }]}>
                            <View style={[styles.fieldHolder, { alignItems: "flex-start" }]}>
                                <Text style={styles.boldValue}>4.9/5</Text>
                                <Text style={styles.slimLabel}>Store rating</Text>
                            </View>

                            <View style={[styles.fieldHolder]}>
                                <Text style={styles.boldValue}>4.9/5</Text>
                                <Text style={styles.slimLabel}>On-time delivery rate</Text>
                            </View>

                            <View style={[styles.fieldHolder, { alignItems: 'flex-end' }]}>
                                <View style={styles.gapFlex}>
                                    <FontAwesome5
                                        name={"less-than-equal"}
                                        size={12}
                                        color={"#000000"}
                                    />
                                    <Text style={styles.boldValue}>3h</Text>
                                </View>
                                <Text style={styles.slimLabel}>Response time</Text>
                            </View>

                        </View>

                        <View style={[styles.rowFlex, { marginTop: 10 }]}>
                            <View style={[styles.fieldHolder, { alignItems: 'flex-start' }]}>
                                <Text style={styles.boldValue}>$130.000+</Text>
                                <View style={styles.gapFlex}>
                                    <Text style={styles.slimLabel}>Transactions</Text>
                                    <Feather
                                        name='info'
                                        color={"#00000099"}
                                        size={14}
                                    />
                                </View>

                            </View>

                            <View style={[styles.fieldHolder, { alignItems: 'center' }]}>
                                <Text style={styles.boldValue}>4000m</Text>
                                <Text style={styles.slimLabel}>Floor space</Text>
                            </View>

                            <View style={[styles.fieldHolder, { alignItems: 'flex-end' }]}>

                                <Text style={styles.boldValue}>{companyData.staffCount}</Text>
                                <Text style={styles.slimLabel}>Staff</Text>
                            </View>

                        </View>

                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.slimLabel}>Services</Text>

                            <Text style={{ fontSize: 14, fontWeight: '500', color: "#343a40", width: "70%", marginVertical: 6 }}>Minor customization, Design-based customization</Text>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <Text style={[styles.slimLabel, { fontSize: 14 }]}>Quality control</Text>

                            <Text style={{ fontSize: 14, fontWeight: '500', color: "#343a40", width: "70%", marginVertical: 6 }}>{companyData.slogan}</Text>
                        </View>

                    </LinearGradient>

                    <View style={styles.bottomButtonWrapper}>
                        <Pressable
                            onPress={() => alert("follow")}
                            style={styles.bottomButton}>
                            <Text style={{ color: '#F67F00' }}>Follow</Text>
                        </Pressable>

                        <Pressable
                            onPress={() => alert("visit store")}
                            style={styles.bottomButton}>
                            <Text style={{ color: '#F67F00' }}>Visit store</Text>
                        </Pressable>

                    </View>

                </ScrollView>

            </View>
            <Screen_345
                moreOption={moreOption}
                navigation={navigation}
                setMoreOption={setMoreOption}
            />
            <Screen_181
                setShowPayments={setShowPayments}
                showPayments={showPayments}
            />
            <Screen_198
                productReturn={productReturn}
                setProductReturn={setProductReturn}
            />
            <Screen_434
                setShowSpecs={setShowSpecs}
                showSpecs={showSpecs}
                specsData={specsData}
            />
        </SafeAreaView>

    )
}

export default Screen_261

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    appBarWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'space-between',
        padding: 10
    },
    searchBox: {
        borderWidth: 0.5,
        borderColor: "#00000049",
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
        width: "70%",
        padding: 4,
        borderRadius: 3,
        paddingHorizontal: 10
    },
    moqContainer: {
        //width: "40%"
    },
    moqPrice: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#000000"
    },
    moqQty: {
        color: "#343a40",
        fontSize: 13.5
    },
    rowFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    gapFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
        //justifyContent: "space-between"
    },
    section: {
        padding: 10
    },
    sectionTitle: {
        fontWeight: "500",
        fontSize: 16,
        marginBottom: 15
    },
    buttons: {
        borderWidth: 1,
        borderColor: "#F67F00",
        alignItems: 'center',
        borderRadius: 6,
        padding: 12,
        marginVertical: 10
    },
    specWrapper: {
        flexDirection: "row",
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: "#eeeeee"
    },
    leftLabelPan: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        alignItems: "flex-start",
        width: "30%"
    },
    rightLabelPan: {
        alignItems: 'flex-start',
        padding: 10,
        width: '70%'
    },
    specValues: {
        fontWeight: '600',
        color: "#343a40",
        fontSize: 14
    },
    purchaseSections: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    moreText: {
        color: "#F67F00",
        fontSize: 14
    },
    gradientContainer: {
        padding: 10
        //height: 190,
    },
    bottomButtonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        padding: 10,
        marginBottom: 10
    },
    bottomButton: {
        alignItems: "center",
        borderRadius: 4,
        padding: 6,
        width: "49%",
        borderWidth: 1,
        borderColor: "#F67F00"
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    boldValue: {
        fontWeight: 'bold',
        fontSize: 17,
        color: "#000000"
    },
    slimLabel: {
        color: "#343a40",
        fontSize: 13,
        //textAlign: 'center'
    },
    fieldHolder: {
        // backgroundColor: 'yellow',
        width: '33%',
        alignItems: 'center'
    }

})