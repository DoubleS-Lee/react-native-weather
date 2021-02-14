import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';

const API_KEY = "774ff742b0f8d403ffaebf8f5661f843";

export default function App() {

  const [state, setState] = useState({
    isLoading: true,
  })
  
  const getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    console.log(data);
  }

  const getLocation = async() => {
    try {
      // throw(error)
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync(); 
      // console.log(coords);
      getWeather(latitude, longitude);
      setState({isLoading:false,});
    } catch(error) {
      Alert.alert("위치를 찾을 수가 없습니다", "위치 정보 사용 요청을 승인해주세요")
    }
  }

  useEffect(() => {
    getLocation();
  },[])
  
  const {isLoading} = state;
  return (
    <>
    {isLoading ? <Loading /> : null}
    </>
  );
}
