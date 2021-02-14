import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

export default function App() {

  const [state, setState] = useState({
    isLoading: true,
  })
  
  const getLocation = async() => {
    try {
      // throw(error)
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync(); 
      // console.log(coords);
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
