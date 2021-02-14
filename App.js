import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';

export default function App() {
  
  const getLocation = async() => {
    let location = await Location.getCurrentPositionAsync(); 
    console.log(location);
  }

  useEffect(() => {
    getLocation();
  },[])
  
  return (
    <Loading />
  );
}
