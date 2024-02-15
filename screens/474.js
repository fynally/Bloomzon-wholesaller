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
import { AntDesign, Entypo, EvilIcons, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import HeaderFile2 from '../headers/HeaderFile2'
import { PRODUCT } from '../data/data';
import ProductMOQItem from '../components/wholesale/ProductMOQItem';
import ProductSizeItem from '../components/wholesale/ProductSizeItem';
import { ImageViewer } from '../resources/ImageViewer';
import ProductGalleryItem_474 from '../components/wholesale/ProductGalleryItem_474';
import { Divider } from '@rneui/themed';
import Screen_48 from './48';
import Screen_64 from './64';
import Screen_80 from './80';
import Screen_99 from './99';
import Screen_113 from './113';
import Screen_129 from './129';
import Screen_303 from './303';
import { useDispatch, useSelector } from 'react-redux';
import { activeMOQ } from '../globals/variations/moqSlice';
import { sizeData } from '../globals/variations/sizesSlice';
import { activeColor } from '../globals/variations/colorsSlice';
import { userTempCart } from '../globals/cart/tempCartSlice';
import { formatMoney } from '../helper/Helper';
import { customizationExtra, setCustomizeImage } from '../globals/customization/customizationSlice';
import Screen_90 from './90';

const productGallery = [
    {
        id: 1,
        image: PRODUCT.productClotheImage,
    },
    {
        id: 2,
        image: PRODUCT.productClotheImage,
    },
    {
        id: 3,
        image: PRODUCT.productClotheImage,
    },
    {
        id: 4,
        image: PRODUCT.productClotheImage,
    },
    {
        id: 5,
        image: PRODUCT.productClotheImage,
    },
    {
        id: 6,
        image: PRODUCT.productClotheImage,
    },
    {
        id: 7,
        image: PRODUCT.productClotheImage,
    },
]

const Screen_474 = ({ navigation, route }) => {
    const { dataToCustomize, is_sample } = route.params
    const dispatch = useDispatch()
    const tempCartState = useSelector(userTempCart);
    const { currentMoqData } = useSelector(activeMOQ);
    const { extras } = useSelector(customizationExtra)
    //const { data, currentMoqData } = useSelector(activeMOQ);
    //const { allSizes } = useSelector(sizeData);
    //const { colorsData, currentColor } = useSelector(activeColor);

    //const [product, setProduct] = useState(PRODUCT);
    // const [moqVariation, setMOQVariation] = useState(
    //     product.variations[0].options[0]
    // );
    // const [sizeVariation, setSizeVariation] = useState(
    //     product.variations[3].options[0]
    // );

    //const [colorVariation, setColorVariation] = useState({});
    const [showSizes, setShowSizes] = useState(false);
    const [expandImage, setExpandImage] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(dataToCustomize?.selected_color[0])
    const [showContactUs, setShowContactUs] = useState(false);
    const [showPrint, setShowPrint] = React.useState(false)
    const [activePrint, setActivePrint] = React.useState({})

    const [showFabric, setShowFabric] = React.useState(false)
    const [activeFabric, setActiveFabric] = React.useState({})

    const [showFeature, setShowFeature] = React.useState(false)
    const [activeFeature, setActiveFeature] = React.useState({})

    const [showSupplyType, setShowSupplyType] = React.useState(false)
    const [activeSupplyType, setActiveSupplyType] = React.useState({})

    const [showMaterial, setShowMaterial] = React.useState(false)
    const [activeMaterial, setActiveMaterial] = React.useState({})

    const [showTechnics, setShowTechnics] = React.useState(false)
    const [activeTechnics, setActiveTechnics] = React.useState({})

    const [showSaveEdit, setShowSaveEdit] = React.useState(false)
    const [showImageOption, setShowImageOption] = React.useState(false)

    const [overallQTY, setOverallQTY] = React.useState(currentMoqData.moq.min)

    const featuredTotalBalance = extras.reduce((acc, entry) => acc + entry.price, 0)

    const totalPrice = currentMoqData.price * parseFloat((is_sample ? tempCartState.temporalItems : overallQTY) + featuredTotalBalance)

    const previewImage = selectedImage.v_image ? selectedImage.v_image : dataToCustomize.selected_color[0].v_image

    const increaseQTY = () => {

        !is_sample ? setOverallQTY(overallQTY + 1) : alert("You can edit the quantity from the `sample variation` screen")
    }

    const decreaseQTY = () => {
        if (!is_sample) {
            overallQTY > currentMoqData.moq.min ? setOverallQTY(overallQTY - 1) :
                alert("You can't go below this quantity")
        } else {
            alert("You can edit the quantity from the `sample variation` screen")
        }

    }

    React.useEffect(() => {
        console.log("Screen No:==> 474")
    }, [])

    const handleSelectUpload = (channel) => {
        setShowImageOption(false)
        alert(channel)
    }

    const EditListItem = ({ label, value, amount, setVariable, noLine }) => (
        <>
            <Pressable
                onPress={() => setVariable(true)}
            >
                <View style={styles.rowFlex}>
                    <Text style={styles.labels}>{label}</Text>
                    <Text style={[styles.labels, { fontSize: 15 }]}>+{amount ? amount : '0.00'}</Text>
                </View>
                <View style={[styles.rowFlex, { alignItems: 'flex-end', marginTop: 5 }]}>
                    <Text style={styles.values}>{value ? value : 'click to select'}</Text>
                    <Feather
                        name={'chevron-down'}
                        size={18}
                        color={"#000000"}
                    />
                </View>
            </Pressable>
            {!noLine && <Divider style={{ marginVertical: 10 }} />}
        </>
    )

    React.useEffect(() => {
        dispatch(setCustomizeImage({ productToDesign: previewImage, designLogo: previewImage, designText: 'Naija' }))
    }, [previewImage])


    const imageOptions = () => (
        <View style={styles.uploadMenuWrapper}>
            <Pressable
                onPress={() => handleSelectUpload("Photo Library")}
                style={styles.uploadMenuItem}>
                <Text style={{ fontSize: 13 }}>Photo Library</Text>
                <Ionicons
                    name={'images'}
                    color={'#000000'}
                    size={20}
                />
            </Pressable>

            <Divider />

            <Pressable
                onPress={() => handleSelectUpload("Take Photo")}
                style={styles.uploadMenuItem}>
                <Text style={{ fontSize: 13 }}>Take Photo</Text>
                <Ionicons
                    name={'camera-outline'}
                    color={'#000000'}
                    size={20}
                />
            </Pressable>

            <Divider />

            <Pressable
                onPress={() => handleSelectUpload("Choose File")}
                style={styles.uploadMenuItem}>
                <Text style={{ fontSize: 13 }}>Choose File</Text>
                <Ionicons
                    name={'folder-outline'}
                    color={'#000000'}
                    size={20}
                />
            </Pressable>
        </View>
    )

    // React.useEffect(() => {
    //     console.log("dataToCustomize==>", dataToCustomize)
    // }, [])

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
            <StatusBar backgroundColor='#ffffff' style='dark' />
            <View style={styles.container}>
                <HeaderFile2
                    navigation={navigation}
                    title={'Customization Service'}
                />

                <View style={styles.productTag}>
                    <Pressable
                        onPress={() => setExpandImage(true)}
                        style={{ padding: 5, borderRadius: 5, backgroundColor: '#e4e4e4' }}>
                        <View style={styles.expander}>
                            <Entypo name="resize-full-screen" size={15} color={'#ffffff'} />
                        </View>

                        <Image
                            source={previewImage}
                            resizeMode="contain"
                            style={{ width: 70, height: 70 }}
                        />
                    </Pressable>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={is_sample ? [dataToCustomize.selected_moq] : dataToCustomize.selected_moq}
                        renderItem={({ item }) => (
                            <ProductMOQItem
                                item={item}
                            />
                        )}
                    />
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View style={styles.ramSectionWrapper}>
                        <View style={styles.ramLabelArea}>
                            <Text style={{ color: '#343a40' }}>Size</Text>
                        </View>

                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={is_sample ? tempCartState.temporalSizes : tempCartState.selectedProduct.variations.sizes}
                            renderItem={({ item }) => (
                                <ProductSizeItem
                                    item={item}
                                    setShowSizes={setShowSizes}
                                />
                            )}
                        />

                        {
                            tempCartState.temporalSizes.length >= 6 &&
                            < Pressable
                                onPress={() => setShowSizes(!showSizes)}
                                style={styles.selectCategory}>
                                <Feather
                                    name={showSizes ? 'chevron-up' : 'chevron-down'}
                                    size={20}
                                    color={'#00000099'}
                                />
                            </Pressable>
                        }


                    </View>

                    {
                        showSizes && (
                            <View
                                style={{
                                    width: '100%',
                                    backgroundColor: '#ffffff',
                                    zIndex: 1,
                                    elevation: 1,
                                    flex: 1,
                                }}>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    numColumns={6}
                                    scrollEnabled={false}
                                    data={tempCartState.temporalSizes}
                                    renderItem={({ item }) => (
                                        <ProductSizeItem
                                            item={item}
                                            setShowSizes={setShowSizes}
                                        />
                                    )}
                                />
                            </View>
                        )
                    }

                    <View style={styles.card}>

                        <View>

                            <View style={styles.rowFlex}>
                                <Text style={styles.labels}>Featured:
                                </Text>

                                <Text style={styles.labels}>{formatMoney(featuredTotalBalance)}</Text>
                            </View>

                            {
                                extras.slice(0, 3).map((item, index) => (
                                    <View style={styles.rowFlex} key={index}>
                                        <Text style={styles.labels}>{item.label}: {item.name}
                                        </Text>
                                    </View>
                                ))
                            }

                        </View>

                        <View style={{ marginTop: 10 }}>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={dataToCustomize.selected_color}
                                renderItem={({ item }) => (
                                    <ProductGalleryItem_474
                                        data={dataToCustomize.selected_color}
                                        item={item}
                                        selectedImage={selectedImage}
                                        setSelectedImage={setSelectedImage}
                                    />
                                )}
                            />
                        </View>

                        {
                            selectedImage.id
                                ?
                                <View style={styles.editButtonWrapper}>
                                    <Pressable
                                        onPress={() => navigation.navigate("Screen_22")}
                                        style={styles.editButton}>
                                        <Feather
                                            name={'edit'}
                                            size={20}
                                            color={"#F67F00"}
                                        />
                                        <Text style={styles.editButtonText}>Edit</Text>
                                    </Pressable>
                                    <Pressable
                                        onPress={() => setShowSaveEdit(true)}
                                        style={[styles.editButton, { borderColor: "#00000059" }]}>
                                        <Feather
                                            name={'download'}
                                            size={18}
                                            color={"#00000099"}
                                        />
                                        <Text style={[styles.editButtonText, { color: "#00000099" }]}>Download</Text>
                                    </Pressable>
                                </View>

                                : <View style={styles.editButtonWrapper}>
                                    <Pressable
                                        onPress={() => setShowImageOption(!showImageOption)}
                                        style={styles.editButton}>
                                        <EvilIcons
                                            name={'image'}
                                            size={20}
                                            color={"#F67F00"}
                                        />
                                        <Text style={styles.editButtonText}>Add image</Text>
                                    </Pressable>
                                    <Pressable style={styles.editButton}>
                                        <MaterialIcons
                                            name={'text-fields'}
                                            size={18}
                                            color={"#F67F00"}
                                        />
                                        <Text style={styles.editButtonText}>Add text</Text>
                                    </Pressable>
                                </View>
                        }

                    </View>

                    <View style={styles.card}>
                        <EditListItem
                            amount={activePrint.price}
                            variable={showPrint}
                            label={"Printing Methods"}
                            setVariable={setShowPrint}
                            value={activePrint.name}
                        />
                        <EditListItem
                            amount={activeFabric.price}
                            variable={showFabric}
                            label={"Fabric Type"}
                            setVariable={setShowFabric}
                            value={activeFabric.name}
                        />
                        <EditListItem
                            amount={activeFeature.price}
                            variable={showFeature}
                            label={"Feature"}
                            setVariable={setShowFeature}
                            value={activeFeature.name}
                        />
                        <EditListItem
                            amount={activeSupplyType.price}
                            variable={showSupplyType}
                            label={"Supply Type"}
                            setVariable={setShowSupplyType}
                            value={activeSupplyType.name}
                        />
                        <EditListItem
                            amount={activeMaterial.price}
                            variable={showMaterial}
                            label={"Material"}
                            setVariable={setShowMaterial}
                            value={activeMaterial.name}
                        />
                        <EditListItem
                            amount={activeTechnics.price}
                            variable={showTechnics}
                            label={"Technics"}
                            setVariable={setShowTechnics}
                            value={activeTechnics.name}
                            noLine={true}
                        />
                    </View>

                    <View style={styles.card}>
                        <View style={styles.rowFlex}>
                            <View>
                                <Text>Product quantity</Text>
                                <Text>MOQ: {currentMoqData.moq.min} piece(s)</Text>
                            </View>
                            <View style={styles.shortButtonsWrapper}>
                                <Pressable
                                    onPress={decreaseQTY}
                                    style={styles.shoppingButtons}>
                                    <Feather
                                        name={'minus'}
                                        color={"#000000"}
                                        size={15}
                                    />
                                </Pressable>
                                <View style={[styles.shoppingButtons, { backgroundColor: "#ffffff", borderLeftWidth: 1, borderRightWidth: 1, borderColor: "#00000059", }]}>
                                    <Text>{is_sample ? tempCartState.temporalItems : overallQTY}</Text>
                                </View>
                                <Pressable
                                    onPress={increaseQTY}
                                    style={styles.shoppingButtons}>
                                    <Feather
                                        name={'plus'}
                                        color={"#000000"}
                                        size={15}
                                    />
                                </Pressable>
                            </View>
                        </View>

                    </View>

                </ScrollView>

                <View style={styles.bottomContent}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5,
                            backgroundColor: '#f5f5f5',
                            paddingHorizontal: 10,
                            paddingVertical: 5
                        }}>
                        <AntDesign name="infocirlceo" color={'red'} size={13} />
                        <Text style={{ color: "#000000", fontSize: 12, fontWeight: "500" }}>Only 1 piece in stock</Text>
                    </View>
                    <View
                        style={styles.listWrapper}>
                        <Text style={styles.shippingLabel}>Difficulty in customization?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Screen_106")}
                            style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                            <Text style={styles.shippingValues}>Chat with supplier</Text>
                            <Feather
                                name='chevron-right'
                                size={15}
                                color={"#F67F00"}
                            />
                        </Pressable>
                    </View>

                    <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
                        <Text style={{ fontSize: 12, color: "#000000" }}>Lead time: 16 day(s)</Text>
                        <View style={[styles.rowFlex, { marginTop: 4 }]}>
                            <Text style={{ fontSize: 12, color: "#000000" }}>Total price of {is_sample ? tempCartState.temporalItems : currentMoqData.moq.min} piece(s)</Text>
                            <Text style={{ color: "#F67F00", fontSize: 12 }}>{formatMoney(totalPrice)}</Text>
                        </View>
                    </View>

                    <View style={[styles.rowFlex, { padding: 10 }]}>
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
                            onPress={() => alert("Enquiry sent")}
                            style={[styles.cartButton]}>
                            <Text style={{ color: '#F67F00' }}>Send enquiry</Text>
                        </Pressable>

                        <Pressable
                            onPress={() => alert("You just paid")}
                            style={[styles.cartButton, { backgroundColor: '#F67F00' }]}>
                            <Text style={{ color: '#ffffff' }}>Pay</Text>
                        </Pressable>
                    </View>
                </View>
            </View >

            <Screen_48
                setShowPrint={setShowPrint}
                showPrint={showPrint}
                activePrint={activePrint}
                setActivePrint={setActivePrint}
            />
            <Screen_64
                activeFabric={activeFabric}
                setActiveFabric={setActiveFabric}
                setShowFabric={setShowFabric}
                showFabric={showFabric}
            />
            <Screen_80
                activeFeature={activeFeature}
                setActiveFeature={setActiveFeature}
                setShowFeature={setShowFeature}
                showFeature={showFeature}
            />
            <Screen_99
                activeSupplyType={activeSupplyType}
                setActiveSupplyType={setActiveSupplyType}
                setShowSupplyType={setShowSupplyType}
                showSupplyType={showSupplyType}
            />
            <Screen_113
                activeMaterial={activeMaterial}
                setActiveMaterial={setActiveMaterial}
                setShowMaterial={setShowMaterial}
                showMaterial={showMaterial}
            />
            <Screen_129
                activeTechnics={activeTechnics}
                setActiveTechnics={setActiveTechnics}
                setShowTechnics={setShowTechnics}
                showTechnics={showTechnics}
            />
            <Screen_303
                setShowSaveEdit={setShowSaveEdit}
                showSaveEdit={showSaveEdit}
            />

            <Screen_90
                setShowContactUs={setShowContactUs}
                showContactUs={showContactUs}
                navigation={navigation}
            />

            {expandImage && ImageViewer(previewImage, setExpandImage)}
            {showImageOption && imageOptions()}
        </SafeAreaView >
    )
}

export default Screen_474

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
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
        backgroundColor: "#ffffff"
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
        backgroundColor: "#ffffff"
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
    labels: {
        fontSize: 15,
        color: "#6c757d"
    },
    values: {
        fontSize: 15,
        color: "#343a40",
        fontWeight: "500"
    },
    card: {
        padding: 10,
        marginHorizontal: 10,
        marginTop: 6,
        backgroundColor: "#ffffff",
        borderRadius: 6
    },
    bottomContent: {
        backgroundColor: '#ffffff',
        bottom: 0,
    },
    listWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //marginTop: 10,
        padding: 10,
        backgroundColor: "#FEF2E5"
    },
    shippingValues: {
        fontSize: 12,
        color: "#F67F00"
        //fontWeight: 'bold',
    },
    shippingLabel: {
        fontSize: 12,
        color: "#00000099"
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
    editButtonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginTop: 15
    },
    editButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        paddingHorizontal: 0,
        borderRadius: 4,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#F67F00",
        justifyContent: 'center',
        width: "40%",
        paddingVertical: 10
    },
    editButtonText: {
        color: "#F67F00",
        fontSize: 14,
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
        backgroundColor: "#00000019"
    },
    uploadMenuWrapper: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: 330,
        left: '10%',
        width: 160,
        borderRadius: 4,
        elevation: 5
    },
    uploadMenuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 6
    }
})