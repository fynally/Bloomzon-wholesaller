import { FlatList, Modal, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import HeaderFile2 from '../headers/HeaderFile2'
import { StatusBar } from 'expo-status-bar'
import { Feather, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import { CART, COMPANIES, SHIPPING_SERVICES } from '../data/data'
import { Divider } from '@rneui/themed'
import { Image } from 'react-native'
import { Line, Svg } from 'react-native-svg'
import Screen_245 from './245'
import CartItem_232 from '../components/wholesale/CartItem_232'
import { calculatePercentage, formatMoney } from '../helper/Helper'
import Screen_252 from './252'
import Screen_458 from './458'
import { selectedCartItems } from '../globals/cart/cartSlice'
import { useSelector } from 'react-redux'

const Screen_232 = ({ navigation }) => {
    const cartItems = useSelector(selectedCartItems);

    const [company, setCompany] = React.useState(COMPANIES[0])
    const [note, setNote] = React.useState("")
    const [selectedAddress, setSelectedAddress] = React.useState({})
    const [showAddress, setShowAddress] = React.useState(false)
    const [cart, setCart] = React.useState(CART)
    const [showPromo, setShowPromo] = React.useState(false)
    const [shippingService, setShippingService] = React.useState(false)
    const [activeServices, setActiveServices] = React.useState(SHIPPING_SERVICES[0]);
    const [totalPrice, setTotalPrice] = React.useState(0)

    const handleShipTo = () => {
        //navigation.navigate("Screen_245")
        setShowAddress(true)
    }

    const handleShippingMethod = () => {
        setShippingService(true)
    }

    const handlePayNow = () => {
        if (!selectedAddress.address) {
            alert("You have not selected a shipping address")
        } else {
            setShowPromo(true)
            //alert("Paying now function called")
        }
    }

    const handleQuantityChange = (itemId, newQuantity) => {
        setCart((prevCartData) =>
            prevCartData.map((item) => ({
                ...item,
                variation: item.variation.map((product) =>
                    product.id === itemId ? { ...product, quantity: newQuantity } : product
                ),
            }))
        );
    };


    React.useEffect(() => {
        if (cart && cart[0] && cart[0].variation) {
            const totalPrices = cart[0].variation
                .map((item) => item.price * item.quantity) // Multiply price by quantity
                .reduce((acc, price) => acc + price, 0);
            setTotalPrice(totalPrices);

        }
    }, [cart])

    React.useEffect(() => {
        console.log("Screen No:==> 232")

        console.log("cartItems:==>", cartItems)
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
            <StatusBar backgroundColor='#ffffff' style='dark' />
            <View style={styles.container}>
                <HeaderFile2
                    navigation={navigation}
                    title={'Place Order'}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.shippingAddressWrapper}>

                        <View style={styles.protectionNoteWrapper}>
                            <MaterialCommunityIcons
                                name={'shield-star-outline'}
                                size={20}
                                color={"#F67F00"}
                            />
                            <Text style={styles.protectionNoteText}>Trade assurance protects your Bloomzon orders for free</Text>
                        </View>

                        <Pressable
                            onPress={handleShipTo}
                            style={styles.addressCard}>
                            <View style={[styles.rowFlex, { marginBottom: 5 }]}>
                                <Text style={{ fontWeight: 'bold', color: "#000000" }}>Ship To</Text>
                                <Feather
                                    name={'chevron-right'}
                                    color={"#000000"}
                                    size={20}
                                />
                            </View>

                            <View style={[styles.rowFlexWithGap, { marginVertical: 5 }]}>
                                <Octicons
                                    name={'person'}
                                    color={"#00000099"}
                                    size={15}
                                />
                                <Text style={styles.addressLabel}>{selectedAddress?.title ? selectedAddress?.title : "---------------------------"}</Text>
                            </View>

                            <View style={[styles.rowFlexWithGap, { marginVertical: 5 }]}>
                                <Feather
                                    name={'phone'}
                                    color={"#00000099"}
                                    size={15}
                                />
                                <Text style={styles.addressLabel}>{selectedAddress?.contact ? selectedAddress?.contact : "---------------------------"}</Text>
                            </View>

                            <View style={[styles.rowFlexWithGap, { marginVertical: 5 }]}>
                                <Ionicons
                                    name={'location-outline'}
                                    color={"#00000099"}
                                    size={15}
                                />
                                <Text style={styles.addressLabel}>{selectedAddress?.address ? selectedAddress.address : "---------------------------"}</Text>
                            </View>

                        </Pressable>

                    </View>

                    <View style={{ padding: 10 }}>
                        <Text style={[styles.sectionHeader, { marginBottom: 0 }]}>Product details</Text>

                        <Text style={{ color: "#00000099", fontSize: 12, marginVertical: 5 }}>sold by {company.name}</Text>

                        <Divider style={{ marginVertical: 5 }} />


                        <FlatList
                            scrollEnabled={false}
                            data={cart}
                            renderItem={({ item }) => (
                                <CartItem_232
                                    item={item}
                                    onQuantityChange={handleQuantityChange}
                                />
                            )}
                        />

                        <View style={[styles.rowFlex, { padding: 10 }]}>

                            <View>
                                <Text style={{ color: "#000000" }}>Total items ({cart.length})</Text>
                            </View>

                            <View>
                                <Text style={{ color: "#000000", fontWeight: 'bold' }}>{formatMoney(totalPrice)}</Text>

                                <Text style={styles.amountSaved}>
                                    <Text>N12,000 </Text>
                                    <Text>saved</Text>
                                </Text>
                            </View>
                        </View>

                        <Divider />

                        <View style={styles.sectionBlock}>
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionTitle}>Shipping Details</Text>
                            </View>

                            <View style={[styles.rowFlex, styles.labelWrapper]}>
                                <Text style={styles.lightLabel}>Shipping method</Text>
                                <Text
                                    onPress={handleShippingMethod}
                                    style={[styles.blackLabel, { color: "#F67F00", textDecorationLine: 'underline', textDecorationColor: "#F67F00" }]}>{activeServices.name} ({activeServices.level})</Text>
                            </View>

                            <View style={[styles.rowFlex, styles.labelWrapper]}>
                                <Text style={styles.lightLabel}>Dispatch time</Text>
                                <Text style={styles.blackLabel}>Withing 7 days(s)</Text>
                            </View>

                            <View style={[styles.rowFlex, styles.labelWrapper]}>
                                <Text style={styles.lightLabel}>Shipping fee</Text>
                                <Text style={styles.blackLabel}>N6,000</Text>
                            </View>

                        </View>

                        <Divider />

                        <View style={styles.sectionBlock}>

                            <View style={styles.rowFlex}>
                                <View style={{ padding: 2, width: '40%', height: '100%' }}>
                                    <Text style={[styles.lightLabel]}>Note to the supplier (optiona)</Text>
                                </View>

                                <View style={{
                                    borderWidth: 1, width: "50%", borderRadius: 2, borderColor: "#00000039", padding: 5, height: 100
                                }}>
                                    <TextInput
                                        numberOfLines={4}
                                        multiline={true}
                                        textAlignVertical={Platform.OS === 'android' ? 'top' : 'auto'}
                                        onChangeText={(text) => setNote(text)}
                                    />
                                    <Text style={{ alignSelf: 'flex-end', color: "#000000", fontSize: 11, marginTop: 5 }}>{note.length}/2000</Text>
                                </View>
                            </View>

                        </View>

                    </View>

                    <View style={styles.dottedLineWrapper}>
                        <View style={{ display: "flex", width: "100%" }}>
                            <Svg>
                                <Line
                                    x1="0"
                                    y1="1"
                                    x2={420}
                                    y2="2"
                                    stroke="#F67F00"
                                    strokeWidth="1"
                                    strokeDasharray={`${10},${5}`}
                                    height="1"
                                />
                            </Svg>
                        </View>
                    </View>

                    <View style={{ padding: 10 }}>

                        <View style={[styles.sectionBlock, { marginVertical: 0, marginTop: -15, marginBottom: 10, }]}>

                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionTitle}>Order summary</Text>
                            </View>

                            <View style={[styles.rowFlex, styles.labelWrapper]}>
                                <Text style={styles.lightLabel}>Total items(3)</Text>
                                <Text style={styles.blackLabel}>N24,000</Text>
                            </View>

                            <View style={[styles.rowFlex, styles.labelWrapper]}>
                                <Text style={styles.lightLabel}>Shipping fee</Text>
                                <Text style={styles.blackLabel}>N6,000</Text>
                            </View>

                            <View style={[styles.rowFlex, styles.labelWrapper]}>
                                <Text style={styles.lightLabel}>Total before tax</Text>
                                <Text style={styles.blackLabel}>N8,000</Text>
                            </View>

                        </View>

                        <Divider />

                        <View style={styles.sectionBlock}>
                            <View style={[styles.rowFlex, styles.labelWrapper]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <Text style={styles.lightLabel}>Transaction fee</Text>

                                    <Feather
                                        name={'info'}
                                        size={15}
                                        color={"grey"}
                                    />

                                </View>
                                <Text style={styles.blackLabel}>To be determined</Text>
                            </View>
                        </View>

                        <Divider />

                        <View style={styles.sectionBlock}>
                            <View style={styles.rowFlex}>
                                <View>
                                    <Text style={styles.lightLabel}>Total order</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={[styles.blackLabel, { fontSize: 17 }]}>{formatMoney(totalPrice)}</Text>

                                    <Text style={[styles.lightLabel, { fontWeight: '400', fontSize: 13 }]}>+ Transaction fee</Text>

                                    <Text style={styles.amountSaved}>
                                        <Text>{formatMoney(calculatePercentage(totalPrice, cart[0].discount))} </Text>
                                        <Text>saved</Text>
                                    </Text>

                                </View>
                            </View>
                        </View>

                    </View>

                </ScrollView>

                <View style={styles.bottomComp}>
                    <View style={styles.rowFlex}>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                <Text style={[styles.blackLabel, { fontSize: 17 }]}>{formatMoney(totalPrice)}</Text>

                                <Feather
                                    name={'chevron-up'}
                                    color={"#000000"}
                                    size={14}
                                />
                            </View>
                            <Text style={styles.amountSaved}>
                                <Text>{formatMoney(calculatePercentage(totalPrice, cart[0].discount))}</Text>
                                <Text>saved</Text>
                            </Text>
                        </View>

                        <Pressable
                            onPress={handlePayNow}
                            style={styles.payButton}>
                            <Text style={{ color: "#ffffff" }}>Proceed to pay</Text>
                        </Pressable>
                    </View>
                </View>

            </View >
            <Screen_245
                navigation={navigation}
                showAddress={showAddress}
                setShowAddress={setShowAddress}
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
            />

            <Screen_252
                setShowPromo={setShowPromo}
                showPromo={showPromo}
            />
            <Screen_458
                setShippingService={setShippingService}
                shippingService={shippingService}
                activeServices={activeServices}
                setActiveServices={setActiveServices}
            />
        </SafeAreaView >
    )
}

export default Screen_232

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    shippingAddressWrapper: {
        backgroundColor: "#f5f5f5",
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    protectionNoteWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    protectionNoteText: {
        fontSize: 11,
        color: "#000000"
    },
    addressCard: {
        backgroundColor: "#ffffff",
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    rowFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rowFlexWithGap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    addressLabel: {
        color: "#00000099",
        fontSize: 12,
        width: "85%"
    },
    productImageHolder: {
        backgroundColor: '#eeeeee',
        width: 80,
        height: 80,
        borderRadius: 5
    }, productDesc: {
        fontSize: 12,
        color: "#000000",
    },
    percentage: {
        width: 50,
        height: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#F6800149"
    },
    variationHolder: {
        backgroundColor: "#f5f5f5",
        borderRadius: 5,
        padding: 10,
        marginVertical: 4
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        fontSize: 11
    },
    shortButtonsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#939393",
    },
    shoppingButtons: {
        padding: 4,
        width: 35,
        alignItems: 'center',
    },

    sectionBlock: {
        marginVertical: 10
    },
    sectionHeader: {
        marginBottom: 10
    },
    sectionTitle: {
        fontWeight: 'bold',
        color: "#000000"
    },
    labelWrapper: {
        marginVertical: 2
    },
    lightLabel: {
        color: "#000000",
        fontSize: 13,
        fontWeight: "300"
    },
    blackLabel: {
        color: "#000000",
        fontSize: 13,
        fontWeight: "bold"
    },
    dottedLineWrapper: {
        position: "relative",
        height: 20,
        width: "100%"
    },
    amountSaved: {
        color: "#F67F00",
        fontWeight: 'bold',
        fontSize: 13
    },
    bottomComp: {
        backgroundColor: "#ffffff",
        padding: 10,
        borderTopWidth: 1,
        borderColor: "lightgrey"
    },
    payButton: {
        backgroundColor: "#F67F00",
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        width: "49%"
    }
})