import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "774ff742b0f8d403ffaebf8f5661f843";

export default function App() {

  const [state, setState] = useState({
    isLoading: true,
  })
  
  const getWeather = async(latitude, longitude) => {
    const {data:{main:{temp}, weather}} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    // console.log(data);
    setState({
      isLoading:false,
      temp:temp,
      condition: weather[0].main,
    })
  }

  const getLocation = async() => {
    try {
      // throw(error)
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync(); 
      // console.log(coords);
      getWeather(latitude, longitude);
    } catch(error) {
      Alert.alert("위치를 찾을 수가 없습니다", "위치 정보 사용 요청을 승인해주세요")
    }
  }

  useEffect(() => {
    getLocation();
  },[])
  
  const {isLoading, temp, condition} = state;
  return (
    <>
    {isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>}
    </>
  );
}
