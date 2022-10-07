
import React, { FC } from "react";
import { View,Text,Image } from "react-native";
import styles from "./styles";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { stackParams } from "../../navigations/Navigations";

type Props = NativeStackScreenProps<stackParams,"Weather">

const WeatherScreen:FC<Props> = (props) => {
    let data = props.route.params
    console.log("weather Data",data)
    return(
        <View style = {styles.mainContainer}>
            <View style= {styles.headerContainer}>
                <Text style ={styles.headerText}>Weather Details</Text>
            </View>
            <View style = {styles.flagContainer}>
                <Image source={data.weatherImage} style = {styles.flagStyle}/>
                    <Text style = {styles.textStyle}>{`Temperature : ${data.temprature} *C`}</Text>
                    <Text style = {styles.textStyle}>{`Precipitaion : ${data.precipitation} %`}</Text>
                    <Text style = {styles.textStyle}>{`Wind Speed : ${data.windSpeed} kmph`}</Text>
            </View>
           
        </View>
    )
}
export default WeatherScreen;