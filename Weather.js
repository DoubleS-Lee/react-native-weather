import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function Weather ({temp, condition}) {
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name="weather-lightning-rainy" size={96} />
                <Text style={styles.temp}>{temp}도</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text>{condition}</Text>
            </View>
        </View>
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