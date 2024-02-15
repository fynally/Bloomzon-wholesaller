import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ScrollView,
  Keyboard,
  Pressable,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { CHAT_TIPS } from '../data/data';
import ChatTipItem from '../components/wholesale/ChatTipItem';
import { Feather, FontAwesome, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import ChatItem from '../components/wholesale/ChatItem';
import moment from 'moment';
import Header_106 from '../headers/Header_106';

const Screen_106 = ({ navigation, route }) => {
  const { businessCard } = route.params || {};
  const [chatTips, setChatTips] = useState(CHAT_TIPS);
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState('');
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const currentDate = moment().format('YYYY-MM-DD');
  const currentTime = moment().format('hh:mm A');

  const scrollViewRef = useRef(null);

  const submitChat = () => {
    const newMessage = {
      messageId: 'ddddd',
      sender: 'buyer',
      message: message,
      dateSent: currentDate,
      timeStamp: currentTime,
    };

    setChats([...chats, newMessage]);
    setMessage('');
  };

  const messageWithCard = () => {
    const newMessage = {
      messageId: 'ddddd',
      sender: 'seller',
      message: "Hello, Justin Christian, this is our company's business card, please check",
      dateSent: currentDate,
      timeStamp: currentTime,
    };
    setChats([...chats, newMessage]);
    setMessage('');
  }

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats, isKeyboardOpen]);

  useEffect(() => {
    if (businessCard?.name) {
      messageWithCard()
    }
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      }
    );

    // Clean up listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [isKeyboardOpen]);

  React.useEffect(() => {
    console.log("Screen No:==> 106")
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30, backgroundColor: '#ffffff' }}>
      <StatusBar backgroundColor={'#FFFFFF'} style={'dark'} />
      <Header_106 chatCount={chats.length} navigation={navigation} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.safeArea}>
        <View style={styles.container}>
          <ScrollView
            style={{ marginBottom: 125 }}
            ref={scrollViewRef}
            showsVerticalScrollIndicator={false}>
            <View>

              {chats.length > 0 ? (
                <View>
                  <FlatList
                    scrollEnabled={false}
                    data={chats}
                    renderItem={({ item }) => (
                      <ChatItem
                        item={item}
                        businessCard={businessCard}
                      />
                    )}
                  />
                </View>
              ) : (
                <View style={{ alignItems: 'center' }}>
                  <Image
                    source={require('../assets/wholesale/customer_care.png')}
                    resizeMode="contain"
                    style={{ width: 48, height: 48, marginVertical: 20 }}
                  />

                  <Text style={{ fontWeight: 'bold', color: '#000000' }}>
                    Welcome!
                  </Text>

                  <Text style={{ color: '#00000099', marginVertical: 10 }}>
                    Want to learn more about our products? start chatting
                  </Text>
                </View>
              )}
            </View>
          </ScrollView>

          <View style={styles.quickChatsWrapper}>
            {!message.trim() && (
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={chatTips}
                renderItem={({ item }) => (
                  <ChatTipItem item={item} chats={chats} setChats={setChats} />
                )}
              />
            )}

            <View style={styles.chatArea}>
              <Ionicons
                name="add-circle-outline"
                size={30}
                color={'#00000099'}
              />

              <TextInput
                placeholder="Enter your message..."
                value={message}
                onChangeText={(text) => setMessage(text)}
                style={[styles.inputBox, { height: 40 }]}
                onSubmitEditing={submitChat}
              />

              <SimpleLineIcons name="emotsmile" size={24} color={'#00000099'} />

              <Ionicons name="image-outline" size={24} color={'#00000099'} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

export default Screen_106;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  safeArea: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: 16,
  },
  quickChatsWrapper: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    padding: 10,
  },
  chatArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  inputBox: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 15,
    borderRadius: 18,
    paddingVertical: 5,
    width: '65%',
  },

});
