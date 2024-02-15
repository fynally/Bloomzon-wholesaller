import { StyleSheet, ScrollView, Text, View, FlatList, Modal } from 'react-native'
import React from 'react'
import ManufacturerTopInfo_226 from '../resources/ManufacturerTopInfo_226'
import VideoItem_408 from '../components/wholesale/VideoItem_408'
import { VIDEOS } from '../data/data'
import { useFocusEffect } from '@react-navigation/native'
import { Video, ResizeMode } from 'expo-av';

const Screen_408 = ({ navigation, companyData }) => {

    const [showPlayer, setShowPlayer] = React.useState(false)
    const [videoData, setVideoData] = React.useState({})
    const [videoStatus, setVideoStatus] = React.useState({});
    const videoRef = React.useRef(null);


    React.useEffect(() => {
        console.log("Screen No:==> 408")
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            // Page is focused

            if (videoRef.current) {
                videoRef.current.playAsync();
            }

            return () => {
                if (videoRef.current) {
                    videoRef.current.pauseAsync();
                }
            };

        }, [])
    );

    React.useEffect(() => {
        console.log("videoData==>", videoData)
    }, [videoData])

    const playerModal = () => (
        <Modal
            visible={showPlayer}
            transparent
            onRequestClose={() => setShowPlayer(false)}


        >
            <View style={{ backgroundColor: "#000000", flex: 1 }}>
                {/* ///////////////////// */}

                <Video
                    ref={videoRef}
                    style={{ height: "100%" }}
                    source={{
                        uri: videoData.video_file,
                    }}
                    posterSource={videoData.video_cover}
                    useNativeControls={true}
                    usePoster={true}
                    resizeMode={ResizeMode.COVER}
                    //isLooping
                    onPlaybackStatusUpdate={status => setVideoStatus(() => status)}

                />

                {/* ///////////////////// */}
            </View>
        </Modal>
    )

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <ManufacturerTopInfo_226 companyData={companyData} />

                <FlatList
                    numColumns={2}
                    scrollEnabled={false}
                    data={VIDEOS}
                    renderItem={({ item, index }) => (
                        <VideoItem_408
                            item={item}
                            data={VIDEOS}
                            index={index}
                            setVideoData={setVideoData}
                            setShowPlayer={setShowPlayer}
                            showPlayer={showPlayer}
                        />
                    )}
                />
                <View style={{ height: 20 }}></View>
            </ScrollView>
            {playerModal()}
        </View>
    )
}

export default Screen_408

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        //paddingBottom: 20
    }
})