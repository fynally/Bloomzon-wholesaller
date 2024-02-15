import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from '@expo/vector-icons';
import {
  FEEDBACKS,
  MAIN_CATEGORY_226,
  TOP_CAROUSEL,
  WHY_CHOOSE_US,
} from '../data/data';
import CarouselItem from '../components/wholesale/CarouselItem';
import Carouse_226 from './Carouse_226';
import MainCategoryItem_226 from '../components/wholesale/MainCategoryItem_226';
import SubCategoryItem from '../components/wholesale/SubCategoryItem';
import WhyChooseUsItem from '../components/wholesale/WhyChooseUsItem';
import WhyChooseUsGallery1 from '../components/wholesale/WhyChooseUsGallery1';
import WhyChooseUsGallery2 from '../components/wholesale/WhyChooseUsGallery2';
import { FlexBox } from './FlexBox';
import { Divider } from '@rneui/themed';
import FeedbackItem from '../components/wholesale/FeedbackItem';
import NewTrendingProductItem from '../components/wholesale/NewTrendingProductItem';
import WholesaleBottomComponent from '../components/wholesale/WholesaleBottomComponent';
import ManufacturerTopInfo_226 from './ManufacturerTopInfo_226';

const HomeTab_226 = ({ navigation, companyData }) => {
  //const { companyData } = route.params
  const [mainCategoryData, setMainCategoryData] = useState(MAIN_CATEGORY_226);
  const [topTrending, setTopTrending] = useState(MAIN_CATEGORY_226.slice(0, 3));
  const [whyChooseUsData, setWhyChooseUsData] = useState(WHY_CHOOSE_US);
  const [feedbacks, setFeedbacks] = useState(FEEDBACKS);

  React.useEffect(() => {
    //console.log("products==>", products)
  }, [])

  const showCaseFunc = () => {
    alert('Showcase function called');
  };

  const trendingProductsFunc = () => {
    alert('New trending products function called');
  };


  const categorySection = (desc) => {
    return (
      <View style={{ padding: 10 }}>
        {desc && <Text style={styles.sectionTitle}>{desc}</Text>}
        <FlatList
          numColumns={2}
          scrollEnabled={false}
          data={mainCategoryData}
          renderItem={({ item }) => (
            <SubCategoryItem
              item={item}
              data={companyData}
            />
          )}
        />
      </View>
    );
  };

  const slimViewComponent = (text, func) => (
    <Pressable
      onPress={func}
      style={[styles.section, { paddingHorizontal: 0 }]}>
      <ImageBackground
        source={require('../assets/wholesale/backgrounds/worker.jpg')}
        resizeMode="cover"
        style={{ flex: 1 }}>
        <View
          style={{
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: 5,
          }}>
          <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '400' }}>
            {' '}
            {text}{' '}
          </Text>
          <View style={styles.slimView}>
            <EvilIcons name={'chevron-right'} size={25} color={'#F67F00'} />
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ManufacturerTopInfo_226 companyData={companyData} />
        <Carouse_226 data={TOP_CAROUSEL} showController={true} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Main Category</Text>

          <View style={{ padding: 6 }}>
            <FlatList
              scrollEnabled={false}
              numColumns={3}
              data={mainCategoryData}
              renderItem={({ item }) => <MainCategoryItem_226 item={item} />}
            />
          </View>
        </View>

        {slimViewComponent('Showcase', showCaseFunc)}

        {categorySection()}

        <View>
          <ImageBackground
            source={require('../assets/wholesale/backgrounds/worker.jpg')}
            resizeMode="cover"
            style={{ flex: 1 }}>
            <View
              style={{
                height: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AntDesign
                name="playcircleo"
                color={'#ffffff'}
                size={40}
                style={{}}
              />
            </View>
          </ImageBackground>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              margin: 10,
            }}>
            <Text style={{ color: '#F67F00', fontSize: 13 }}>
              Verified by TuvRheinland
            </Text>
            <AntDesign name="check" size={15} color={'#5CD3CF'} />
          </View>
        </View>

        <View style={[styles.section, { paddingBottom: 5 }]}>
          <Text style={styles.sectionTitle}>Why choose us</Text>
          <View style={{ paddingLeft: 10, marginVertical: 10 }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={whyChooseUsData}
              renderItem={({ item }) => <WhyChooseUsItem item={item} />}
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              numColumns={3}
              data={whyChooseUsData.slice(0, 6)}
              scrollEnabled={false}
              renderItem={({ item }) => <WhyChooseUsGallery1 item={item} />}
            />
          </View>

          <View
            style={{
              paddingTop: 10,
              paddingHorizontal: 10,
              paddingBottom: 7,
              backgroundColor: '#f5f5f5',
            }}>
            <FlexBox data={whyChooseUsData} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { marginTop: 10 }]}>
            Certifications
          </Text>

          <View style={{ marginTop: 10 }}>
            <Image
              source={require('../assets/wholesale/certs.png')}
              resizeMode="contain"
              style={{ width: 300, height: 100, alignSelf: 'center' }}
            />
          </View>
        </View>

        <Divider style={{ marginVertical: 10 }} width={6} color="#f5f5f5" />

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { marginTop: 10 }]}>Feedback</Text>

          <View style={{ marginVertical: 25 }}>
            <ImageBackground
              source={require('../assets/wholesale/feedback_bg.png')}
              resizeMode="cover"
              style={{ flex: 1 }}>
              <View style={{ height: 215 }}>
                <View
                  style={{
                    alignItems: 'flex-end',
                    position: 'absolute',
                    right: 0,
                    top: 10,
                  }}>
                  <FeedbackItem item={feedbacks[0]} />
                </View>

                <View
                  style={{
                    alignItems: 'flex-end',
                    position: 'absolute',
                    left: 5,
                    bottom: 75,
                  }}>
                  <FeedbackItem item={feedbacks[1]} />
                </View>

                <View
                  style={{
                    alignItems: 'flex-end',
                    position: 'absolute',
                    right: '25%',
                    bottom: 0,
                  }}>
                  <FeedbackItem item={feedbacks[2]} />
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>

        <Divider style={{ marginVertical: 10 }} width={6} color="#f5f5f5" />

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, {}]}>Top-Ranking Products</Text>

          <Carouse_226 data={topTrending} showController={false} />
        </View>

        {slimViewComponent('New Trending Products', trendingProductsFunc)}

        <View style={{ alignItems: 'center', padding: 10 }}>
          <FlatList
            scrollEnabled={false}
            numColumns={3}
            data={mainCategoryData.slice(0, 3)}
            renderItem={({ item }) => <NewTrendingProductItem item={item} />}
          />
        </View>

        <Divider width={6} color="#f5f5f5" />

        <View>{categorySection('Mesh Shorts')}</View>

        <Divider width={6} color="#f5f5f5" />

        <View>{categorySection('T-Shirts')}</View>

        <Divider width={6} color="#f5f5f5" />

        <View>{categorySection('Hoodle')}</View>

        <Divider width={6} color="#f5f5f5" />

        <View>{categorySection('Sweatsuit')}</View>

        <Divider width={6} color="#f5f5f5" />

        <View>{categorySection('Pants')}</View>

        <Divider width={6} color="#f5f5f5" />

        <View>{categorySection('Jackets')}</View>

        <Divider width={6} color="#f5f5f5" />
      </ScrollView>

      <WholesaleBottomComponent navigation={navigation} />

    </View>
  );
};

export default HomeTab_226;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  section: {
    //backgroundColor: 'red'
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15,
  },
  slimView: {
    width: 25,
    height: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  bottomContent: {
    bottom: 0,
    backgroundColor: '#ffffff',
  },
  cartButton: {
    width: '48%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#F67F00',
    borderWidth: 1,
  },
  sideActionWrapper: {
    //padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#F5DDC4',
  },
});
