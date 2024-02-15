import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import CarouselItem from '../components/wholesale/CarouselItem';
import TopRankingSliderItem from '../components/wholesale/TopRankingSliderItem';
import CarouselItem_226 from '../components/wholesale/CarouselItem_226';


const Carouse_226 = ({ data, showController }) => {

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
                            backgroundColor: index === activeIndex ? '#F67F00' : !showController ? '#dddddd' : '#ffffff',
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

            {
                showController === true &&

                <View style={styles.arrowsWrapper}>
                    <Pressable

                        style={styles.arrows}
                    >
                        <EvilIcons
                            name={"chevron-left"}
                            size={30}
                            color={prevButton ? "#F67F00" : "#adb5bd"}
                            onPress={() => prevButton && prevItem()}
                        />
                    </Pressable>

                    <Pressable

                        style={styles.arrows}
                    >
                        <EvilIcons
                            name={"chevron-right"}
                            size={30}
                            color={nextButton ? "#F67F00" : "#adb5bd"}
                            onPress={() => nextButton && nextItem()}
                        />
                    </Pressable>

                </View>
            }

            <FlatList
                ref={flatListRef}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={carouselData}
                renderItem={({ item }) => (
                    <>
                        {
                            showController ?
                                <CarouselItem_226 item={item} />
                                :
                                <View style={{ width: Dimensions.get('screen').width, }}>
                                    <TopRankingSliderItem item={item} />
                                </View>
                        }
                    </>
                )}
                onMomentumScrollEnd={(event) => {
                    const contentOffset = event.nativeEvent.contentOffset.x;
                    const itemWidth = event.nativeEvent.layoutMeasurement.width;
                    const newIndex = Math.round(contentOffset / itemWidth);
                    setActiveIndex(newIndex);
                }}
            />
            <View style={[styles.indicatorBallsWrapper, showController && styles.hasController]}>
                {renderIndicator()}
            </View>

        </View>
    )
}

export default Carouse_226

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    arrowsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //gap: 30,
        width: '90%',
        position: 'absolute',
        zIndex: 100,
        top: 75,
        alignSelf: 'center',
        //pointerEvents: 'none',
        //backgroundColor: 'red'
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
        bottom: 30,
        alignSelf: 'center'
    },
    arrows: {
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    }
})