import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';
import CarouselItem from '../components/wholesale/CarouselItem';


const Carousel = ({ data, likes }) => {

    const [carouselData, setCarouselData] = useState(data)
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [prevButton, setPrevButton] = React.useState(false);
    const [nextButton, setNextButton] = React.useState(true);


    const flatListRef = React.useRef(null);


    const scrollToIndex = (index) => {

        flatListRef.current.scrollToIndex({ animated: true, index });
        setActiveIndex(index);
    };

    const nextItem = () => {
        if (activeIndex < carouselData.length - 1) {
            scrollToIndex(activeIndex + 1);
        }
    };

    const prevItem = () => {
        if (activeIndex > 0) {
            scrollToIndex(activeIndex - 1);
        }
    };

    React.useEffect(() => {
        if (activeIndex === 0) {
            setPrevButton(false);
        } else if (activeIndex === carouselData.length - 1) {
            setNextButton(false);
        } else {
            setPrevButton(true);
            setNextButton(true);
        }
    }, [activeIndex, carouselData]);


    const renderIndicator = () => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {carouselData.map((_, index) => (
                    <View
                        key={index}
                        style={{
                            width: 8,
                            height: 8,
                            backgroundColor: index === activeIndex ? '#F67F00' : '#dddddd',
                            borderRadius: 5,
                            margin: 4,
                        }}
                    //onTouchStart={() => scrollToIndex(index)}
                    />
                ))}
            </View>
        );
    };

    return (
        <View style={styles.container}>

            <FlatList
                ref={flatListRef}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={carouselData}
                renderItem={({ item }) => (
                    <CarouselItem
                        item={item}
                    />
                )}
                onMomentumScrollEnd={(event) => {
                    const contentOffset = event.nativeEvent.contentOffset.x;
                    const itemWidth = event.nativeEvent.layoutMeasurement.width;
                    const newIndex = Math.round(contentOffset / itemWidth);
                    setActiveIndex(newIndex);
                }}
            />
            <View style={[styles.indicatorBallsWrapper]}>
                {renderIndicator()}
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 10 }}>

                <View style={styles.imageCounterWrapper}>

                    <Text style={{ color: '#ffffff' }}>{activeIndex + 1}/{carouselData.length}</Text>
                </View>

                <View style={styles.imageCounterWrapper}>
                    <Ionicons
                        name='heart-outline'
                        size={18}
                        color={'#ffffff'}
                    />
                    <Text style={{ color: '#ffffff' }}>{likes}</Text>
                </View>
            </View>

        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    arrowsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //gap: 30,
        width: '90%',
        position: 'absolute',
        zIndex: 1,
        top: 75,
        alignSelf: 'center'
    },
    indicatorBallsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginTop: 15
    },
    hasController: {
        position: 'absolute',
        zIndex: 1,
        bottom: 15,
        alignSelf: 'center'
    },
    arrows: {
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    imageCounterWrapper: {
        //position: 'absolute',
        //right: 10,
        backgroundColor: 'grey',
        paddingHorizontal: 10,
        bottom: 15,
        paddingVertical: 2,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        borderRadius: 18,
        zIndex: 1,
        width: 50,
        justifyContent: "center"
    }
})