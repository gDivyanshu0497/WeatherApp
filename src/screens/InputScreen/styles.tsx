import React from "react";
import { StyleSheet } from "react-native";
import Color from "../../utilities/color";

const styles = StyleSheet.create({
    mainContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    textInputContainer : {
        width : "50%"
    },
    buttonDisableContainer :{
        marginTop : 50,
        justifyContent : "center",
        alignItems : "center",
        width : "25%",
        borderRadius : 5,
        height : 40,
        backgroundColor : Color.GREY_BACKGROUND
    },
    buttonEnableContainer :{
        marginTop : 50,
        justifyContent : "center",
        alignItems : "center",
        width : "25%",
        borderRadius : 5,
        height : 40,
        backgroundColor : Color.PURPLE_BACKGROUND
    },
    submitDisableText:{
        color : Color.GREY_BORDER,
        fontSize : 16,
        fontWeight : "600"
    },

    submitEnableText:{
        color : Color.WHITE,
        fontSize : 16,
        fontWeight : "600"
    },

})
export default styles;