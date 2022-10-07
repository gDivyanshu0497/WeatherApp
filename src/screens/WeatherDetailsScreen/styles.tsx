
import { StyleSheet } from "react-native";
import Color from "../../utilities/color";


const styles = StyleSheet.create({
    mainContainer : {
        flex : 1,
        alignItems :"center",
        padding : 10
       
    },
    headerContainer : {
        flex : 0.05,
        paddingVertical : 20,
    },
    headerText : {
        fontSize: 20,
        fontWeight : "700",
    },
    flagContainer : {
        flex : 0.5,
        justifyContent :"space-between",
        alignItems : "flex-start",
        paddingVertical : 20,
    },
    flagStyle : {
        height : 100,
        width : 100,
        paddingVertical : 20,
    },
    textStyle : {
        fontSize : 20,
        color : "#91908c",
        fontWeight : "500",
        paddingVertical : 20
    },
})

export default styles;