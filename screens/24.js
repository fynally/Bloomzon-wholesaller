import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Pressable,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../headers/SearchBar';
import { CATEGORIES, COMPANIES } from '../data/data';
import VRItem from '../components/wholesale/VRItem';
import CategoryWithNoImageItem from '../components/wholesale/CategoryWithNoImageItem';
import { Feather } from '@expo/vector-icons';
import Screen_73 from './73';

const Screen_24 = ({ navigation }) => {
  const [companies, setCompanies] = useState(COMPANIES);
  const [categories, setCategories] = useState(CATEGORIES);
  const [activeCategory, setActiveCategory] = useState(1);
  const [showCategory, setShowCategory] = useState(false);

  // const filteredCategory = categories.filter(category => category.id === activeCategory);

  React.useEffect(() => {
    console.log("Screen No:==> 24")
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <View style={styles.container}>
        <View style={[styles.upperView, { paddingBottom: 20 }]}>
          <SearchBar navigation={navigation} canScan={false} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.banner}>
            <Image
              source={require('../assets/wholesale/backgrounds/worker.jpg')}
              resizeMode={'cover'}
              style={{ width: '100%', height: '100%' }}
            />
          </View>

          <View style={styles.H_categoryWrapper}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={categories}
              renderItem={({ item }) => (
                <CategoryWithNoImageItem
                  item={item}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
              )}
            />

            <Pressable
              onPress={() => setShowCategory(true)}
              style={styles.selectCategory}>
              <Feather name={'chevron-down'} size={20} color={'#000000'} />
            </Pressable>
          </View>

          <View style={{ marginBottom: 15 }}>
            <FlatList
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              data={COMPANIES}
              renderItem={({ item }) => (
                <VRItem
                  item={item}
                  navigation={navigation}
                />
              )}
            />
          </View>
        </ScrollView>
      </View>
      <Screen_73
        categories={categories}
        setShowCategory={setShowCategory}
        showCategory={showCategory}
      />
    </SafeAreaView>
  );
};

export default Screen_24;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  upperView: {
    backgroundColor: '#ADE5E3',
    paddingTop: 20,
  },
  banner: {
    height: 180,
    backgroundColor: 'teal',
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

});
