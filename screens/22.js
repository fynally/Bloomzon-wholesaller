import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Divider } from '@rneui/themed';
import { useSelector } from 'react-redux';
import { customizationExtra } from '../globals/customization/customizationSlice';


const Screen_22 = ({ navigation }) => {

  const { customizeImage } = useSelector(customizationExtra)

  const handleDone = () => {
    navigation.goBack();
  };

  const handleExpand = () => {
    alert('Expand function');
  };

  const handleDownload = () => {
    alert('Download function');
  };

  const handleAddImage = () => {
    alert('Add image function');
  };

  const handleAddText = () => {
    alert('Add text function');
  };

  React.useEffect(() => {
    console.log("Screen No:==> 22")
    console.log("customizeImage:==>", customizeImage)
  }, [])



  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 30, backgroundColor: '#000000' }}>
      <StatusBar backgroundColor="#000000" style="light" />

      <View style={{}}>
        <View style={styles.headerWrapper}>
          <Pressable onPress={handleDone}>
            <AntDesign name={'close'} size={25} color={'#ffffff'} />
          </Pressable>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <Pressable onPress={handleExpand} style={styles.iconWrapper}>
              <Ionicons name={'expand'} size={20} color={'#000000'} />
            </Pressable>

            <Pressable onPress={handleDownload} style={styles.iconWrapper}>
              <AntDesign name={'download'} size={20} color={'#000000'} />
            </Pressable>

            <Pressable onPress={handleDone} style={styles.doneButton}>
              <Text style={{ color: '#ffffff' }}>Done</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={{}}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#ffffff',
            margin: 15,
            justifyContent: 'center',
          }}>
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#00000039',
              padding: 10,
              zIndex: 1,
            }}>
            <Text style={{ color: '#ffffff' }}>Text or slogan</Text>
          </View>

          <Image
            source={customizeImage.productToDesign}
            resizeMode={'contain'}
            style={{ width: 400, height: 400 }}
          />
        </View>
      </View>

      <View style={styles.actionButtonsWrapper}>
        <Pressable onPress={handleAddImage} style={styles.adderButton}>
          <AntDesign name={'picture'} size={23} color={'#ffffff'} />
          <Text style={{ color: '#ffffff' }}>Add image</Text>
        </Pressable>

        <Divider orientation={'vertical'} />

        <Pressable onPress={handleAddText} style={styles.adderButton}>
          <MaterialIcons name={'text-fields'} size={23} color={'#ffffff'} />
          <Text style={{ color: '#ffffff' }}>Add text</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Screen_22;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 15,
  },
  doneButton: {
    backgroundColor: '#ff6501',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  iconWrapper: {
    backgroundColor: '#ffffff',
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  actionButtonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#242125',
    padding: 5,
    justifyContent: 'center',
    gap: 10,
    position: 'absolute',
    width: '100%',
    bottom: 10,
  },
  adderButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    width: '40%',
  },
});
