import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"]
    },
    Thunderstorm: {
      iconName: "",
      gradient: []
    },
    Drizzle: {
      iconName: "",
      gradient: []
    },
    Rain: {
      iconName: "",
      gradient: []
    },
    Snow: {
      iconName: "",
      gradient: []
    },
    Atmosphere: {
      iconName: "",
      gradient: []
    },
    Clear: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"]
    },
    Clouds: {
      iconName: "",
      gradient: []
    },
    Haze: {
      iconName: "",
      gradient: []
    },
    Mist: {
      iconName: "",
      gradient: []
    },
    Dust: {
      iconName: "",
      gradient: []
    }
  };

export default function Weather ({temp, condition}) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color='white'/>
                <StatusBar barStyle="light-content" />
                <Text style={styles.temp}>{temp}도</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text>{condition}</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    halfContainer: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    temp: {
        fontSize: 42,
        color: 'white',
    }
})

Weather.PropTypes ={
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ])
}