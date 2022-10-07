
import { StyleSheet } from "react-native";
import Color from "../../utilities/color";


const styles = StyleSheet.create({
    mainContainer : {
        flex : 1,
        alignItems :"center"
    },
    headerContainer : {
        flex : 0.05,
        paddingVertical : 20,
    },
    headerText : {
        fontSize: 20,
        fontWeight : "700"
    },
    flagContainer : {
        flex : 0.95,
        justifyContent :"center",
        alignItems : "flex-start",
        paddingVertical : 10
    },
    flagStyle : {
        height : 100,
        width : 100,
        paddingTop : 20,
        paddingBottom : 30,
    },
    textStyle : {
        fontSize : 20,
        color : "#91908c",
        fontWeight : "500",
        paddingVertical : 20
    },
})

export default styles;