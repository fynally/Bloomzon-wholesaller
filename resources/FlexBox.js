import { AntDesign } from "@expo/vector-icons";
import { View, Text, ImageBackground } from "react-native";

// Styles
const styles = {
    app: {
        flex: 4, // the number of columns you want to devide the screen into
        marginHorizontal: "auto",
        //width: 400,
        backgroundColor: "red"
    },
    row: {
        flexDirection: "row"
    },
    "1col": {
        backgroundColor: "lightblue",
        borderColor: "#fff",
        borderWidth: 1,
        flex: 1
    },
    "2col": {
        backgroundColor: "green",
        borderColor: "#fff",
        borderWidth: 1,
        flex: 2
    },
    "3col": {
        backgroundColor: "orange",
        borderColor: "#fff",
        borderWidth: 1,
        flex: 3
    },
    "4col": {
        flex: 4
    },
    ImageBackground: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ffffff'
    },
    imageWrapper: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
};

// RN Code
const Col = ({ numRows, children }) => {
    return (
        <View style={styles[`${numRows}col`]}>{children}</View>
    )
}

const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
)

export const FlexBox = ({ data }) => {

    return (
        <View style={styles.app}>
            <Row>
                <Col numRows={1}>
                    <ImageBackground source={data[0].image}
                        resizeMode='cover'
                        style={styles.ImageBackground}
                    >
                        <View style={styles.imageWrapper}></View>
                    </ImageBackground>
                </Col>
            </Row>
            <Row>
                <Col numRows={1}>
                    <ImageBackground source={data[1].image}
                        resizeMode='cover'
                        style={styles.ImageBackground}
                    >
                        <View style={styles.imageWrapper}></View>
                    </ImageBackground>
                </Col>
                <Col numRows={1}>
                    <ImageBackground source={data[2].image}
                        resizeMode='cover'
                        style={styles.ImageBackground}
                    >
                        <View style={styles.imageWrapper}></View>
                    </ImageBackground>
                </Col>

                <Col numRows={1}>
                    <ImageBackground source={data[3].image}
                        resizeMode='cover'
                        style={styles.ImageBackground}
                    >
                        <View style={styles.imageWrapper}></View>
                    </ImageBackground>
                </Col>
            </Row>
            <Row>
                <Col numRows={1}>
                    <ImageBackground source={data[4].image}
                        resizeMode='cover'
                        style={styles.ImageBackground}
                    >
                        <View style={styles.imageWrapper}></View>
                    </ImageBackground>
                </Col>
                <Col numRows={1}>
                    <ImageBackground source={data[5].image}
                        resizeMode='cover'
                        style={styles.ImageBackground}
                    >
                        <View style={styles.imageWrapper}></View>
                    </ImageBackground>
                </Col>
            </Row>
        </View>
    )
}