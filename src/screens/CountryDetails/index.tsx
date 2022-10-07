
import React, { FC } from "react";
import { View,Text,TouchableOpacity,Image } from "react-native";
import styles from "./styles";
import axios from 'axios';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { stackParams } from "../../navigations/Navigations";

type Props = NativeStackScreenProps<stackParams,"Country">

const CountryScreen:FC<Props> = (props) => {
    let data = props.route.params
    console.log("CountryScreenData",data);
    const accessKey = "9a04cf5f0c6e4bb4243bc8ba1f0a095b"; 

    const checkWeather = async() => {
       try {
        const response = await axios.get(`http://api.weatherstack.com/current?access_key=${accessKey}&query=${data.capital}`);
        console.log("RESPONSE",response.data)
        let weatherData = response.data.current;
        props.navigation.navigate("Weather",{
            temprature : weatherData.temperature,
            precipitation : weatherData.precip,
            windSpeed : weatherData.wind_speed,
            weatherImage : weatherData.weather_icons[0],

        })
       } catch (error) {
        console.log("error",error);
       }
    }
    return(
        <View style = {styles.mainContainer}>
            <View style= {styles.headerContainer}>
                <Text style ={styles.headerText}>Country Details</Text>
            </View>
           
           <View style = {styles.flagContainer}>
           <Image source={data.flags} style = {styles.flagStyle}/>
            <Text style = {styles.textStyle}>{`Capital ${data.capital}`}</Text>
            <Text style = {styles.textStyle}>{`Country Populations ${data.population}`}</Text>
            <Text style = {styles.textStyle}>{`Lattitude : ${data.latlng[0]}`}</Text>
            <Text style = {styles.textStyle}>{`Longitude : ${data.latlng[1]}`}</Text>

            <TouchableOpacity style = {styles.buttonContainer} onPress = {() => {checkWeather()}}>
                <Text style = {styles.submitEnableText}>Capital Weather</Text>
            </TouchableOpacity>
           </View>

        </View>
    )
}

export default CountryScreen;