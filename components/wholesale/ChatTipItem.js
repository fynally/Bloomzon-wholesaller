import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import moment from 'moment';

const ChatTipItem = ({ item, chats, setChats }) => {
    const currentDate = moment().format('YYYY-MM-DD');
    const currentTime = moment().format('hh:mm A');

    const handleSelect = () => {

        const newMessage = {
            messageId: 'ddddd',
            sender: 'buyer',
            message: item.title,
            dateSent: currentDate,
            timeStamp: currentTime
        };

        setChats([...chats, newMessage])
        const selectedItem = JSON.stringify(item, 0, 2)
        //alert(selectedItem)
    }

    return (
        <Pressable
            onPress={handleSelect}
            style={styles.container}>
            <Text style={{ color: '#00000099' }}>{item.title}</Text>
        </Pressable>
    )
}

export default ChatTipItem

const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderWidth: 0.3,
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: '#00000099'
    }
})