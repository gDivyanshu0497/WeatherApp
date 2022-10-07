
import React from "react";
import { StyleSheet } from "react-native";
import Color from "../../utilities/color";

const styles = StyleSheet.create({
    mainContainer :{
        flex : 1,
        alignItems : "center",
        padding : 10
    },
    headerContainer : {
        flex : 0.05,
        paddingVertical : 20,
    },
    headerText : {
        fontSize: 20,
        fontWeight : "700"
    },
    textStyle : {
        fontSize : 20,
        color : "#91908c",
        fontWeight : "500"
    },
    flagContainer : {
        flex : 0.95,
        justifyContent :"space-between",
        alignItems : "flex-start",
        paddingVertical : 10
    },
    flagStyle : {
        height : 200,
        width : 200,
        paddingVertical : 20
    },
    buttonContainer : {
        justifyContent : "center",
        alignItems : "center",
        width : "70%",
        borderRadius : 5,
        height : 40,
        backgroundColor : Color.PURPLE_BACKGROUND
    },
    submitEnableText:{
        color : Color.WHITE,
        fontSize : 16,
        fontWeight : "600"
    },

})

export default styles;