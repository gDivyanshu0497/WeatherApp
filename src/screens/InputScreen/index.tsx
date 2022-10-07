
import axios from 'axios';
import React,{FC,useState} from 'react';
import {View,Text, TouchableOpacity} from "react-native";
import { TextInput } from 'react-native-paper';
import Color from '../../utilities/color';
import CONSTANTS from '../../utilities/constant';
import styles from './styles';



const InputScreen : FC = (props : any) => {
    const [country,setCountry] = useState<string>("");
    const [error,setError] = useState<string>("");

   const onSubmitData = async(value : string) => {
    setError("")
    if(!value){
        console.log("Please Enter some Value")
        return
    }
    else{
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${value}`)
            if(response){
            //    let data = response.data[0];
                props.navigation.navigate("Country",{
                    capital : response.data[0].capital[0],
                    population : response.data[0].population,
                    latlng : response.data[0].latlng,
                    flags : response.data[0].flags.png

                })
            }
        } catch (error:any) {
            console.log("ERROR",error.response.status);
            let StatusCode = error.response.status;
            if(StatusCode === 404){
                setError("Please Enter Valid Country name")
            }
        }
    }
   
   }


    return (
        <View style = {styles.mainContainer}>
            <TextInput
            label={CONSTANTS.COUNTRY_PLACEHOLDER}
            placeholder={CONSTANTS.COUNTRY_PLACEHOLDER}
            value={country}
            mode = "outlined"
            outlineColor= {Color.GREY_BORDER}
            activeOutlineColor={Color.GREY_BORDER}
            style = {styles.textInputContainer}
            onChangeText={value => setCountry(value)}
    />
        {error ? <Text style = {{color : "red"}}>{error}</Text>:null}
        <TouchableOpacity style = {country ? styles.buttonEnableContainer: styles.buttonDisableContainer} onPress = {() => onSubmitData(country)}>
            <Text style = {country ? styles.submitEnableText : styles.submitDisableText}>Submit</Text>
        </TouchableOpacity>
        </View>
    )
}

export default InputScreen;

// response.data[0].capital[0]
// response.data[0].population
// response.data[0].latlng
// response.data[0].flags.png